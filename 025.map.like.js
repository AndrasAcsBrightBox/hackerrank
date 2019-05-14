Array.prototype.map1 = function map1(fn) {
  if (this.constructor != Array) {
    return;
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const currRes = fn.call(this[i], this[i]);
    if (currRes == undefined) throw new TypeError("All elements must be mapped!");
    result.push(currRes);
  }
  return result;
}

console.log([0, 1, 2].map1(elem => elem * 2));
