function pascalTri(n) {
  let s = "";
  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        s += fact(row) / (fact(column) * fact(row - column)) + " ";
      }
    }
    s += "\n";
  }
  return s;
}

function fact(n) {
  return n == 1 || n == 0 ? 1 : fact(n - 1) * n;
}

console.log(pascalTri(5));
