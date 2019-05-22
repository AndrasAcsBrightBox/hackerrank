function minimumBribes(q) {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    const supposedValue = i + 1;
    const currValue = q[i];

    if (currValue - supposedValue > 2) return "Too chaotic";

    // Count how many people bribed the current guy
    for (let j = 0; j < i; j++) {
        if(q[j] > q[i]) bribes++;
    }
  }
  return bribes;
}


console.log(minimumBribes([2, 1, 5, 3, 4]))
console.log(minimumBribes([2, 5, 1, 3, 4]))
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));