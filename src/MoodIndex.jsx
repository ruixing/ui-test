import React, { useRef } from 'react'

import './MoodIndex.less'

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="user-portrait"></div>
      <div className="user-name">张三</div>
    </div>
  )
}

const MoodBar = ({ index, day, average  }) => {
  return (
    <div className="mood-index-bar">
      <div className="mood-index-bar-body"></div>
      <div className="mood-index-bar-day">{day}</div>
    </div>
  )
}

const MoodIndexBars = () => {
  const moodData = [
    { day: '六', index: 86 },
    { day: '日', index: 80 },
    { day: '一', index: 0 },  
    { day: '二', index: 90 },
    { day: '三', index: 92 },
    { day: '四', index: 97 },
    { day: '五', index: 81 }
  ]

  const effectiveData = moodData.filter(m => m.index > 0)
  const average = effectiveData.length > 0
                    ? effectiveData.reduce((p, c) => p.index + c.index, 0) / effectiveData.length
                    : 0


  return (
    <div className="mood-index-bar-bg">
      <hr className="mood-index-level" data-index="1" />
      <hr className="mood-index-level" data-index="2" />
      <div className="mood-index-bar-wrapper">
        {
          moodData.map(({ day, index }) => (
            <MoodBar
              key={day}
              day={day}
              index={index}
              average={average}
            />
          ))
        }
      </div>
    </div>
  )
}

const MoodIndex = () => {
  return (
    <div className="mood-index-body">
      <Profile />
      <div className="average-mood-index-count">88</div>
      <div className="average-mood-index-text">周平均心情指数</div>
      <MoodIndexBars />
    </div>
  )
}

export default MoodIndex
