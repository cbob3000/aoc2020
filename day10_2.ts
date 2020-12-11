import fs = require("fs");

const file = fs.readFileSync('input/day10_test.txt', 'utf-8');
var input = file.split("\r\n");

var oneDiffs: number[] = [];

const solutions = [];
const data: number[] = [];

const priorities = [    1, 2, 3,
                        3, 2, 1,
                        2, 1, 3,
                        3, 1, 2     ];
var arrangements = 0;

var used: Set<number> = new Set();

input.sort((a, b) => { return (+a) - (+b); });
input = input.slice(1);
input.unshift("0");

input.forEach(value => {
  data.push((+value));
});

for (var prio = 0; prio < priorities.length / 3; prio += 3) {
    var prioIndex = prio * 3;
    for (var i = 0; i < data.length; i++) {
        data.forEach((value: number) => {
                for (var p = 0; p < 3; p++) {
                    var output = data.filter((n) => { return n === value + priorities[prioIndex + p]; });
                    if (output.length > 0 && !used.has(output[0])) {
                        used.add(output[0]);
                        oneDiffs.push(output[0]);
                        break;
                    }
                }
            }
        );
        solutions.push(oneDiffs);
        oneDiffs = [];
        used.clear();
    }
}

console.log(solutions.length);
