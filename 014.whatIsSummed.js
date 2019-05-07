function getMembersOfSum(sum, aNums) {
  let p1 = 0;
  while (p1 < aNums.length - 1) {
    let p2 = aNums.length - 1;
    while (p2 > p1) {
      if (aNums[p1] + aNums[p2] == sum) {
        return [aNums[p1], aNums[p2]];
      }
      p2--;
    }
    p1++;
  }
  throw new TypeError('Members of sum are not found in the array.')
}

/* this should return [5, 7], throws TypeError if not found. */
console.log(getMembersOfSum(13, [0, 1, 2, 5, 6, 7]));
