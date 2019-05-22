/*
    constraints:
        singature  always contains 3 ints -->  if al lof them are 0 return empty array
        output: first n of the tribonacci, included the signatrue


    idea:
        let's have an iterative solution.
        for 0 --> n go and sum the last 3 items in the array and push a new one into it..
*/

function tribonacci(signature, n) {
    if(n == 0) return [];
    if(n == 1) return [signature[0]];
    if(n == 2) return [signature[0], signature[1]];
    const res = [];
    for(let i = 3; i < n; i++) {
        signature.push(signature[signature.length - 3] 
            + signature[signature.length - 2]
            + signature[signature.length - 1]);
    }
    return signature;
}

console.log(tribonacci([0, 0, 0], 0)); //should retrun []
console.log(tribonacci([1, 1, 1], 8))  // should return  [1, 1 ,1, 3, 5, 9, 17, 31])