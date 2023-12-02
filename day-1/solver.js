const digits = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

const digiWords = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

var fs = require('fs');
fs.readFile(process.cwd() + "/day-1/input.txt", function (err, data) {
  if (err)
    console.log(err)
  else
    calculateOutput(data.toString());
});

function calculateOutput(text) {
  let total = 0;
  const lines = text.split('\n');
  for (const line of lines) {
    let subbedLine = subWordsInLine(line);
    let nums = subbedLine.split('').filter(letter => digits.includes(letter));
    total += parseInt(nums[0] + nums[nums.length - 1]);
  }

  console.log(total);
}

function subWordsInLine(line) {
  let subbedLine = line.toLowerCase();
  for (let i = 0; i < digiWords.length; i++) {
    subbedLine = subbedLine.replaceAll(digiWords[i], digiWords[i] + digits[i] + digiWords[i]);
  }

  return subbedLine;
}