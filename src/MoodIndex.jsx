import React, { useEffect, useState } from 'react'

import './MoodIndex.less'

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="user-portrait"></div>
      <div className="user-name">张三</div>
    </div>
  )
}

const BarIcon = ({ type, show  }) => {

  switch (type) {
    case 'unknown': return (
      <div className={`bar-icon unknown-icon ${show ? 'bar-icon-show' : ''}`}>?</div>
    )

    case 'normal': return (
      <div className={`bar-icon normal-facial-icon ${show ? 'bar-icon-show' : ''}`}>
        <div className="left-eye" />
        <div className="right-eye" />
        <div className="mouth" />
      </div>
    )

    case 'happy': return (
      <div className={`bar-icon happy-facial-icon ${show ? 'bar-icon-show' : ''}`}>
        <div className="left-eye" />
        <div className="right-eye" />
        <div className="mouth" />
      </div>
    )
  }

  return null;
}

const MoodBar = ({ index, day, average, delay  }) => {
  const [ height, setHeight ] = useState('10.6vw')
  const [ animeFlag, setAnimeFlag ] = useState(false)

  const moodClass = (() => {
    if (index > average) {
      return 'mood-happy';
    } else if (index > 0) {
      return 'mood-normal';
    } else {
      return 'mood-unknown';
    }
  })()

  // const height = index > 0 ? (index * 0.69).toFixed(2) + 'vw' : '21vw';

  useEffect(() => {
    setTimeout(() => {
      setAnimeFlag(true);
      setHeight(index > 0 ? (index * 0.69).toFixed(2) + 'vw' : '21vw');
    }, delay)
  }, [])

  return (
    <div className="mood-index-bar">
      <div className={`mood-index-bar-body ${moodClass} ${animeFlag ? 'bar-show' : ''}`} style={{ height }}>
        { index > 0 && <div className={`bar-index ${animeFlag ? 'bar-index-show' : ''}`}>{index}</div> }
        { index < 1 && <BarIcon type="unknown" show={animeFlag} /> }
        { index >= average &&  <BarIcon type="happy" show={animeFlag} /> }
        { index < average && index > 0 && <BarIcon type="normal" show={animeFlag} /> }
      </div>
      <div className={`mood-index-bar-day ${animeFlag ? 'mood-index-bar-day-show' : ''}`}>{day}</div>
    </div>
  )
}

const MoodIndexBars = ({ moodData, average }) => {
  return (
    <div className="mood-index-bar-bg">
      <hr className="mood-index-level" data-index="1" />
      <hr className="mood-index-level" data-index="2" />
      <div className="mood-index-bar-wrapper">
        {
          moodData.map(({ day, index }, idx) => (
            <MoodBar
              key={day}
              day={day}
              index={index}
              average={average}
              delay={idx * 50}
            />
          ))
        }
      </div>
    </div>
  )
}

const MoodIndex = () => {
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
                    ? Math.round(effectiveData.reduce((p, c) => p + c.index, 0) / effectiveData.length)
                    : 0
  return (
    <div className="mood-index-body">
      <Profile />
      <div className="average-mood-index-count">{average}</div>
      <div className="average-mood-index-text">周平均心情指数</div>
      <MoodIndexBars moodData={moodData} average={average} />
    </div>
  )
}

export default MoodIndex
