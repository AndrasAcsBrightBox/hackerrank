/*
    constraints:
        arr --> lenth of n
        items either 1 or 0

    idea:
        from beack to the begenning iterate count from 1 to n and multiply with power of 2s.

    O(N)

*/


const binaryArrayToNumber = arr => {
    let num = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        num += arr[i] * Math.pow(2, arr.length - 1 - i);
    }
    return num;
  };

  console.log(binaryArrayToNumber([0,0,0,1]) == 1);
  console.log(binaryArrayToNumber([0,0,1,0]) == 2);