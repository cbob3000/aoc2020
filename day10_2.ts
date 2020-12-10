import fs = require("fs");

const file = fs.readFileSync('input/day10_test.txt', 'utf-8');
var input = file.split("\r\n");

var oneDiffs: number[] = [];
var twoDiffs: number[] = [];
var threeDiffs: number[] = [];

input.sort((a, b) => { return (+a) - (+b); });
input = input.slice(1);
input.unshift("0");

const data: number[] = [];
input.forEach(value => {
  data.push((+value));
});

data.forEach((value: number) => {

    // prefer diff of 1
    var output = data.filter((n) => { return n === value + 1; });
    if (output.length > 0) {
      console.log(output);
      //console.log("ke" + output[1]);
      oneDiffs.push((+output[1]));
    }
    else {
      // second priority: diff of 2
      output = data.filter((n) => { return n == value + 2; });
      if (output.length > 0) {
          console.log("pe" + output[1]);
          oneDiffs.push((+output[1]));
      }
      else {
        // second priority: diff of 3
        output = data.filter((n) => { return n == value + 3; });
        if (output.length > 0) {
          console.log("la" + output[1]);
            oneDiffs.push((+output[1]));
        }
      }
    }
});

//console.log(oneDiffs);
