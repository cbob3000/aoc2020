import fs = require("fs");

const file = fs.readFileSync('input/day5.txt', 'utf-8');
const input = file.split("\n");

function division(value: number, times: number, depth: number) {
    return depth === times ? value : division(value / 2, times + 1, depth);
}

function traverse(tree: string, value: number, depth: number, root: number, maxDepth: number) {
    if (depth == maxDepth) return value - 1;
    if (tree[depth] === "F" || tree[depth] === "L") {
        value -= division(root, 0, (depth + 1));
    }
    return traverse(tree, value, depth+1, root, maxDepth);
}

var seatID = 0;

input.forEach(boardingPass => {

    if (boardingPass.length !== 0) {
        const encodedRow = boardingPass.substring(0, 7);
        const encodedCol = boardingPass.substring(7);

        const row = traverse(encodedRow, 128, 0, 128, 7);
        const col = traverse(encodedCol, 8, 0, 8, 3);

        const currentID = row * 8 + col;
        if (currentID > seatID) seatID = currentID;
    }
});

console.log(seatID);
