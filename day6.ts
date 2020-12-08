import fs = require("fs");

const file = fs.readFileSync('input/day6.txt', 'utf-8');
const input = file.split("\n\r");
const char = new RegExp(/[a-z]/);

var yesses = 0;
input.forEach(group => {
    const answers: Set<string> = new Set();
    for (var i = 0; i < group.length; i++) {
        if (group[i].match(char) !== null) {
            answers.add(group[i]);
        }
    }
    yesses += answers.size;
});

console.log(yesses);
