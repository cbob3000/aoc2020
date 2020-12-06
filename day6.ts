import fs = require("fs");

const file = fs.readFileSync('input/day6.txt', 'utf-8');
const input = file.split("\n\r");

input.forEach(group => {
    console.log(group);
});
