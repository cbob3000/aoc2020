import fs = require("fs");

const file = fs.readFileSync('input/day8_test.txt', 'utf-8');
const input = file.split("\n");

const executed: Set<number> = new Set();
const flipped: Set<number> = new Set();
const path: string = "";
const paths: [];

var acc = 0;
var count = 0;
var run = true;

while (run) {
    path += count;
    console.log(count);
    if (executed.has(count)) {
        // no end found, reset
        paths.push(path);
        path = "";
        executed.clear();
        count = 0;
        acc = 0;
        console.log("reset")
    }
    if (count === input.length - 1) {
        run = false;
        console.log(acc);
        break
    }

    var jmp = 1;
    
    const [instruction, value] = input[count].split(" ");
    if (instruction === "acc") {
        acc += +value;
    }
    else if (instruction === "jmp") {
        if ((!flipped.has(count)) && executed.has(count)) {
            // make it a nop
            flipped.add(count);
        }
        else {
             jmp = +value;
         }
    }
    else {
        if ((!flipped.has(count)) && executed.has(count)) {
            flipped.add(count);
            // make it a jmp
            jmp = +value;
        }

    }
    executed.add(count);
    count += jmp;
};
