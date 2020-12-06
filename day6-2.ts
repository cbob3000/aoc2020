import fs = require("fs");

const file = fs.readFileSync('input/day6.txt', 'utf-8');
const input = file.split("\n\r");
const char = new RegExp(/[a-z]/);

var sum = 0;
input.forEach(group => {
    const persons = group.split("\n");
    const yesses = {};
    var numPersons = 0;
    var yesQuestions = 0;
    persons.forEach(person => {
        if (person.length > 0) {
            numPersons++;
            for (var i = 0; i < person.length; i++) {
                if (!char.exec(person[i])) continue;
                if (!(person[i] in yesses)) yesses[person[i]] = 1;
                else yesses[person[i]]++;
            }
        }
    });    
    Object.values(yesses).forEach(numAnswers => {
        if (+numAnswers === numPersons) {
            yesQuestions++;
        }
    });
    sum += yesQuestions;
});

console.log(sum);
