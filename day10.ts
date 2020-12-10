import fs = require("fs");

const file = fs.readFileSync('input/day10.txt', 'utf-8');
const input = file.split("\r\n");
const differences: number[] = [];

input.sort((a, b) => { return (+a) - (+b); });
var output = 0;

for (var i = 0; i < input.length; ) {
  if (input[i].length > 0) {
    var diff = (+input[i]) - output;
    output = +input[i];
    differences.push(diff);
  }
  i++;
}

differences.push(3);

const ones = differences.filter((v) => { return v === 1;});
const threes = differences.filter((v) => { return v === 3;});

console.log(ones.length * threes.length);
