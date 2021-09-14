const setDirection = require('./setDirection');
const setPosition = require('./setPosition');
const checkBoundary = require('./checkBoundary');

exports.insect = (req, res, next) => {
  const roomData = req.body.body[0];
  const insectData = req.body.body[1];
  const insectCoord = insectData[0].split(' ');

  const room = [+roomData[0], +roomData[1]];
  const insect = [
    [+insectCoord[0], +insectCoord[1], insectCoord[2]],
    insectData[1],
  ];

  let x = insect[0][0];
  let y = insect[0][1];
  let drn = insect[0][2];
  const commands = insect[1].split('');
  let isBound;

  // console.log(x, y, drn, commands);

  commands.map((command) => {
    // console.log(command);
    switch (command) {
      case 'L':
        drn = setDirection(drn, 'L');
        break;
      case 'R':
        drn = setDirection(drn, 'R');
        break;
      case 'F':
        x = setPosition(drn, x, y)[0];
        y = setPosition(drn, x, y)[1];
        isBound = checkBoundary(room, x, y);
        break;
      default:
        break;
    }
    // console.log(x, y, drn);
  });
  if (!isBound) {
    res.send(['Out of Room']);
  } else {
    res.send([x, y, drn].join(' '));
  }
};
