const checkBoundary = (room, x, y) => {
  if (room[0] < x || x < 0 || room[1] < y || y < 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = checkBoundary;
