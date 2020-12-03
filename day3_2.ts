import fs = require("fs");

const file = fs.readFileSync('input/day3.txt', 'utf-8');
const input = file.split("\n");

const stepsX:number[] = [1, 3, 5, 7, 1];
const stepsY:number[] = [1, 1, 1, 1, 2];
const totalTrees:number[] = [];

const mapHeight:number = input.length - 1;
const mapWidth:number = input[0].length - 1;

for (var i = 0; i < stepsX.length; i++) {
  var trees:number = 0;
  var yPos:number = stepsY[i];
  var xPos:number = stepsX[i];
  var xPosTotal:number = xPos;

  while (yPos < mapHeight) {
    const mapRow = input[yPos].trim();
    const sample = mapRow[xPos].trim();
    if (sample === '#') trees++;
    yPos += stepsY[i];
    xPosTotal += stepsX[i];
    xPos = xPosTotal % mapWidth;
  }
  totalTrees.push(trees);
}

var result: number = -1;
totalTrees.forEach((entry) => {
    if (result == -1) result = entry;
    else result *= entry;
})

console.log(result);
