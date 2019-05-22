/*
    Constraints:
        n, and p are positive integers
        (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k, where n[0] --> 'a'
        we want to find k

    Ideas -->

        convert n to string and to be able to easily get the a, b, c.. numbers.
        (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) / n =  k

        return k if it is a positive integer --> how to check that?
        Number.isInteger();

        Complexity:
        toString --> and iterate in the string and convert to num
        + division plus is integer check


        O(N)



*/

function digPow(n, p) {
  let sn = n.toString();
  let k = 0;
  for (let i = 0; i < sn.length; i++) {
    k += Math.pow(new Number(sn[i]).valueOf(), p + i);
  }
  k = k / n;
  return Number.isInteger(k) ? k : -1;
}

// test harness:
console.log(digPow(89, 1) == 1);
console.log(digPow(695, 2) == 2);
console.log(digPow(46288, 3) == 51);
