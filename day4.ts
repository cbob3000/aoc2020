import fs = require("fs");

const file = fs.readFileSync('input/day4.txt', 'utf-8');
const input = file.split("\r\n\r\n");

const reqFields: string[] = [ "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid" ];
var valids = 0;

input.forEach(element => {
    const line = element.replace(/(\r\n|\n|\r)/gm, " ");
    var valid = true;
    reqFields.forEach(reqField => {
        if (!line.includes(reqField)) valid = false;
    });
    if (valid) valids++;
});


console.log(valids);
