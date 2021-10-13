function allTeams(n, d, t, type) {
  let res = 0;
  const que = [n];
  while (que.length > 0) {
    const f = que.shift()
    if (f === 0) {
      res++;
    }
    if (type === 'D') {
      for (let i =  1; i < Math.min(d, f + 1); i++) {
        que.push(f - i);
      }
      type = 'T';
    } else if (type === 'T') {
      for (let i =  1; i < Math.min(t, f + 1); i++) {
        que.push(f - i);
      }
      type = 'D';
    }
  }

  return res;
}

console.log(allTeams(4, 3, 2, 'D') + allTeams(4, 3, 2, 'T'))
