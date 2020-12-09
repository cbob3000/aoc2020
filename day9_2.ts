import fs = require("fs");

const file = fs.readFileSync('input/day9.txt', 'utf-8');
const input = file.split("\n");
const solution = 20874512;

var factors = [];
var sum = 0;
for (var i = 0; i < input.length - 1; i++) {
    sum = +input[i];
    factors.push(+input[i]);
    for (var k = i + 1; k < input.length -1; k++) {
        sum += +input[k];
        factors.push(+input[k]);
        if (sum === solution) {
            const low = Math.min(...factors);
            const high = Math.max(...factors);
            console.log(high + low);
        }
        if (sum > solution) break;
    }
    sum = 0;
    factors = [];
}
