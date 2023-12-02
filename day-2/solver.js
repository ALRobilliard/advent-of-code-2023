const maxCounts = {
  red: 12,
  green: 13,
  blue: 14
};

var fs = require('fs');
fs.readFile(process.cwd() + "/day-2/input.txt", function (err, data) {
  if (err)
    console.log(err)
  else
    calculateOutput(data.toString());
});

function calculateOutput(text) {
  let total = 0;
  const lines = text.split('\n');
  for (const line of lines) {
    total += gamePower(line);
  }

  console.log(total)
}

function possibleGame(line) {
  const rounds = line.substring(line.indexOf(': ') + 2).split(';').map(el => el.trim());
  for (const round of rounds) {
    const counts = round.split(',').map(el => el.trim());

    for (const count of counts) {
      const num = parseInt(count.substring(0, count.indexOf(' ')));
      const colour = count.substring(count.indexOf(' ') + 1);

      if (colour === 'red' && num > maxCounts.red)
        return false;
      else if (colour === 'green' && num > maxCounts.green)
        return false;
      else if (colour === 'blue' && num > maxCounts.blue)
        return false;
    }
  }

  return true;
}

function gamePower(line) {
  const rounds = line.substring(line.indexOf(': ') + 2).split(';').map(el => el.trim());

  let minRed = 0,
    minGreen = 0,
    minBlue = 0;

  for (const round of rounds) {
    const counts = round.split(',').map(el => el.trim());

    for (const count of counts) {
      const num = parseInt(count.substring(0, count.indexOf(' ')));
      const colour = count.substring(count.indexOf(' ') + 1);

      if (colour === 'red' && num > minRed)
        minRed = num;
      else if (colour === 'green' && num > minGreen)
        minGreen = num;
      else if (colour === 'blue' && num > minBlue)
        minBlue = num
    }
  }

  return minRed * minBlue * minGreen;
}

function getGameId(line) {
  return parseInt(line.substring(line.indexOf(' ') + 1, line.indexOf(':')));
}