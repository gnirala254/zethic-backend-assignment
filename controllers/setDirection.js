const setDirection = (drn, turn) => {
  switch (drn) {
    case 'E':
      if (turn === 'L') {
        return (drn = 'N');
      } else {
        return (drn = 'S');
      }
    case 'S':
      if (turn === 'L') {
        return (drn = 'E');
      } else {
        return (drn = 'W');
      }
    case 'W':
      if (turn === 'L') {
        return (drn = 'S');
      } else {
        return (drn = 'N');
      }
    case 'N':
      if (turn === 'L') {
        return (drn = 'W');
      } else {
        return (drn = 'E');
      }
  }
};

module.exports = setDirection;
