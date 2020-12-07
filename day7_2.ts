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

function laukkuHaukka(searchColor: string) {
  if (searchColor.includes("other")) return 0;
  var branchBags = 0;
  Object.keys(bagmap[searchColor]).forEach(subBag => {
    const numBags = bagmap[searchColor][subBag];
    if (!isNaN(numBags)) {
      branchBags += numBags;
      branchBags += numBags * laukkuHaukka(subBag);
    }
  });
  return branchBags;
}

input.forEach(bagspec => {
  if (bagspec.length > 0) {
    updateBagSpec(bagspec, bagmap);
  }
});

console.log(laukkuHaukka("shiny gold"));
