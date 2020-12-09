import fs = require("fs");

const file = fs.readFileSync('input/day8.txt', 'utf-8');
const input = file.split("\n");
const executed: Set<number> = new Set();

var acc = 0;

for (var count = 0; count < input.length; ) {
    if (executed.has(count)) {
        console.log(acc);
        break;
    }
    executed.add(count);    
    var jmp = 1;
    if (input[count] !== undefined) {
        const [instruction, value] = input[count].split(" ");
        if (instruction === "acc") {
            acc += +value;
        }
        else if (instruction === "jmp") {
            jmp = +value;
        }
    }
    count += jmp;
};
