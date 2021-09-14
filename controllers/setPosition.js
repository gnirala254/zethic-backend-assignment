const setPosition = (drn, xn, yn) => {
  switch (drn) {
    case 'E':
      xn = xn + 1;
      yn = yn;
      return [xn++, yn];
    case 'S':
      xn = xn;
      yn = yn - 1;
      return [xn, yn--];
    case 'W':
      xn = xn - 1;
      yn = yn;
      return [xn--, yn];
    case 'N':
      xn = xn;
      yn = yn + 1;
      return [xn, yn++];
  }
};

module.exports = setPosition;
