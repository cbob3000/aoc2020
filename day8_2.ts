import fs = require("fs");

const file = fs.readFileSync('input/day8_test.txt', 'utf-8');
const input = file.split("\n");

const executed: Set<number> = new Set();
const flipped: Set<number> = new Set();
const paths: string[] = [];

var path: string = "";
var acc = 0;
var count = 0;
var run = true;

while (run) {
    paths.push(path);
    path += count;
    if (executed.has(count)) {
        // no end found, reset
        path = "0";
        executed.clear();
        count = 0;
        acc = 0;
        console.log(paths);
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
        var futureCount = count + (+value);
        var futurePath = path + futureCount;

        console.log(futurePath);

        if ((paths.includes(futurePath))) {
            // make it a nop
            flipped.add(count);
            console.log("flippin jmp to nop at " + count);
        }
        else {
             jmp = +value;
         }
    }
    else {
        var futureCount = count + 1;
        var futurePath = path + futureCount;

        console.log(futurePath);

        if ((paths.includes(futurePath))) {
            flipped.add(count);
            // make it a jmp
            jmp = +value;
        }

    }
    executed.add(count);
    count += jmp;
};
