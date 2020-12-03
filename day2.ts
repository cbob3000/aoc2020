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
  const limits:string[] = splitPolicy[0].split("-");
  const min: number = +limits[0];
  const max:number = +limits[1];
  const test = pw.split(char).length - 1;
  if (test >= min && test <= max) {
    valids++;
  }
});

console.log(valids);
