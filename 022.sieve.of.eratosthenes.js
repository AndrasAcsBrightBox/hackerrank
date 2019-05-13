function soe(maxBoundary) {
  const seq = [];
  for (let i = 2; i < maxBoundary; i++) {
    seq.push(i);
  }
  let p1 = 0;
  let nonPrimes = [];
  while (p1 < maxBoundary) {
    if (nonPrimes.indexOf(p1) == -1) {
      let p2 = p1 + seq[p1];
      while (seq[p2] < maxBoundary) {
        nonPrimes.push(p2);
        p2 = p2 + seq[p1];
      }
    }
    p1++;
  }
  let primes = [];
  for(let i = 0; i < seq.length; i++) {
      if(nonPrimes.indexOf(i) == -1){
          primes.push(seq[i]);
      }
  }
  return primes;
}


console.log(soe(121));