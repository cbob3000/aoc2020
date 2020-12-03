import fs = require("fs");

const file = fs.readFileSync('input/day3.txt', 'utf-8');
const input = file.split("\n");

var trees:number = 0;
var yPos:number = 1;
var xPos:number = 3;
var xPosTotal:number = xPos;
const mapHeight:number = input.length - 1;
const mapWidth:number = input[0].length - 1;

while (yPos < mapHeight) {
  const mapRow = input[yPos].trim();
  const sample = mapRow[xPos].trim();
  if (sample === '#') trees++;
  yPos += 1;
  xPosTotal += 3;
  xPos = xPosTotal % mapWidth;
}

console.log(trees);
