function tallPeople(aPpl) {
  const r = aPpl.length;
  if (r == 0) return [];
  if (r == 1) return [minMax("min", aPpl[0]), minMax("max", aPpl[0])];
  const c = aPpl[0].length;
  let tos = "";
  let sot = "";
  for (let j = 0; j < c; j++) {
    let currCol = "";
    for (let i = 0; i < r; i++) {
      if (j == 0) {
        tos += `${minMax("min", aPpl[i])}${i == r - 1 ? "" : " "}`;
      }
      currCol += `${aPpl[i][j]}${i == r - 1 ? "" : " "}`;
    }
    sot += `${minMax("max", currCol)}${j == c - 1 ? "" : " "}`;
  }
  tos = minMax("max", tos);
  sot = minMax("min", sot);
  return [parseInt(tos), parseInt(sot)];
}

function minMax(order, sData) {
  let i = 0;
  for (let j = 0; j < sData.length; j++) {
    if (sData[j] == " ") continue;
    if (order == "min" ? sData[j] < sData[i] : sData[j] > sData[i]) i = j;
  }
  return sData[i];
}

console.log(tallPeople(["9 2 3", "4 8 7"])); // return [4, 7]

console.log(tallPeople(["1 2", "4 5", "3 6"])); // [4, 4]

console.log(tallPeople(["1 1", "1 1"])); // [1, 1]
