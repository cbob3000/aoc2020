import fs = require("fs");

const file = fs.readFileSync('input/day7.txt', 'utf-8');
const input = file.split("\n");

const bagmap: any = {};

function updateBagSpec(spec: string, map: any) {
  const [color, content] = spec.split(" bags contain ");
  const innerBags = content.split(",");
  const bagSpec: any = {};
  innerBags.forEach(bag => {
    const trim = bag.replace(/bags|bag/, "").replace(/\./, "").trim();
    const numberOf = trim.substring(0, 1);
    const color = trim.substring(2);
    bagSpec[color] = +numberOf;
  });
  map[color] = bagSpec;
}

function laukkuHaukka(searchColor: string, bagColours: Set<string>) {
  Object.keys(bagmap).forEach(containingColor => {
    if (searchColor in bagmap[containingColor]) {
        bagColours.add(containingColor);
        laukkuHaukka(containingColor, bagColours);
    }
  });
}

input.forEach(bagspec => {
  if (bagspec.length > 0) {
    updateBagSpec(bagspec, bagmap);
  }
});

var colors: Set<string> = new Set();
laukkuHaukka("shiny gold", colors);
console.log(colours.size());
