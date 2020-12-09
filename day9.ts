import fs = require("fs");

const file = fs.readFileSync('input/day9.txt', 'utf-8');
const input = file.split("\n");
const preambleLen = 25;
const preamble = input.slice(0, preambleLen);

var found = false;
for (var i = preambleLen; i < input.length - 1; i++) {
    const value = +input[i];
    for (var k = i - preambleLen; k < i; k++) {
        const v1 = +input[k];
        for (var l = i - preambleLen; l < i; l++) {
            if (k === l) continue;
            const v2 = +input[l];
            if (v1 + v2 === value) {

                found = true;
                break;
            }
        }
        if (found) break;
    }
    if (!found) {
        console.log(value);
        break;
    }
    found = false;
}
