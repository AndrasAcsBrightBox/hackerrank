let bodySizes = [];
let currentBodySize = 0;

function bodiesOfWater(n, arr) {
  let map = [];
  arr.forEach(mapRow => {
    map.push([]);
    mapRow.split(" ").forEach(point => {
      map[map.length - 1].push(point);
    });
  });
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      findWater(map, r, c);
    }
  }
  return bodySizes.sort();
}

function findWater(map, r, c) {
  if (map[r][c] != "0") return;
  else {
    if (r == 2 && c == 1) debugger;
    map[r][c] = "*";
    currentBodySize++;

    // south
    if (r < map.length - 1) findWater(map, r + 1, c);
    
    // north
    if (r > 0) findWater(map, r - 1, c);

    // west
    if (c > 0) findWater(map, r, c - 1);

    // east
    if (c < map[r].length - 1) findWater(map, r, c + 1);

    // diagonals
    if (r > 0 && c < map[r].length - 1) findWater(map, r - 1, c + 1);
    if (r < map.length - 1 && c < map[r].length - 1)
      findWater(map, r + 1, c + 1);
    if (r < map.length - 1 && c > 0) findWater(map, r + 1, c - 1);
    if (r > 0 && c > 0) findWater(map, r - 1, c - 1);
  }
  if (currentBodySize > 0) {
    bodySizes.push(currentBodySize);
    currentBodySize = 0;
  }
}

console.log(bodiesOfWater(5, [
  "1 2 1 1 0",
  "0 1 1 0 1",
  "0 0 1 1 1",
  "1 1 0 1 1",
  "0 1 1 1 0"
]));
