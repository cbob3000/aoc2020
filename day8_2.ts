import fs = require("fs");

const file = fs.readFileSync('input/day8.txt', 'utf-8');
const input = file.split("\n");

const executed: Set<number> = new Set();
const flipped: Set<number> = new Set();

var acc = 0;
var run = true;
var program: string[] = [];

function reHash() {
  var patched  = Object.assign([], input);
  for (var i = 0; i < patched.length; i++) {
    const [instruction, value] = patched[i].split(" ");
    if (instruction === "jmp" && !flipped.has(i)) {
      flipped.add(i);
      patched[i] = "nop " + value;
      break;
    }
    if (instruction === "nop" && !flipped.has(i)) {
      flipped.add(i);
      patched[i] = "jmp " + value;
      break;
    }
  }
  return patched;
}

program = input;

while (run) {
  acc = 0;
  executed.clear();
  for (var count = 0; count < program.length; ) {

      if (executed.has(count)) {
          acc = 0;
          executed.clear();
          program = reHash();
          break;
      }
      if (count === program.length - 1) {
        run = false;
        break;
      }
      executed.add(count);

      var jmp = 1;
      const [instruction, value] = program[count].split(" ");

      if (instruction === "acc") {
          acc += +value;
      }
      else if (instruction === "jmp") {
          jmp = +value;
      }
      count += jmp;
  };
}

console.log(acc);
