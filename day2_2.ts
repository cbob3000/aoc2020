import fs = require("fs");

const file = fs.readFileSync('input/day2.txt', 'utf-8');
const input = file.split("\n");

const policies: Array<string> = [];
const passwords: Array<string> = [];

input.forEach(line => {
  if (line.length > 0) {
    const split = line.split(":");
    policies.push(split[0].trim());
    passwords.push(split[1].trim());
  }
});

var valids: number = 0;

passwords.forEach((pw:string, index) => {
  const policy:string = policies[index];
  const splitPolicy = policy.split(" ");
  const char = splitPolicy[1];
  const positions:string[] = splitPolicy[0].split("-");
  const first: number = +positions[0];
  const second:number = +positions[1];
  var hits: number = 0;
  hits += pw[first - 1] === char ? 1 : 0;
  hits += pw[second - 1] === char ? 1 : 0;
  if (hits === 1) valids++;
});

console.log(valids);
