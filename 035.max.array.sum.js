/*
    Constraints:

        Find the subsets of non adjacent elements and sum them and get back with the max.


    Ideas:
        [-2, 1, 3, -4, 5]   1 1 1 1 1
        [-2, 3, 5]          1 0 1 0 1   21
        [-2, 3]             1 0 1 0 0   20
        [-2, -4]            1 0 0 1 0   18
        [-2, 5]             1 0 0 0 1   17
        [1, -4]             0 1 0 1 0   10
        [1, 5]              0 1 0 0 1    9
        [3, 5]              0 0 1 0 1    5
                           16 8 4 2 1

        Generate all binary numbers and filter them by adjacency 
        + they must each have two elements + filter out full set.
    
    Complexity:

    Code:

    Tests:



*/

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (this.length >= targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

function maxSumSubset(arr) {
    // generate the mask elements which match the above criteria
  const mask = [];
  for (let i = 0; i < Math.pow(2, arr.length); i++) {
    const currBinary = i.toString(2).padStart(arr.length, "0");
    let prevInd = 0;
    let oneC = currBinary[prevInd] == "1" ? 1 : 0;
    let addThis = true;
    for (let j = 1; j < currBinary.length; j++) {
      if (currBinary[j] == "1" && currBinary[prevInd] == "1") {
        addThis = false;
        break;
      }
      if (currBinary[j] == "1") oneC++;
      prevInd = j;
    }
    if (addThis && oneC > 1) {
      mask.push(currBinary);
    }
  }

  let subArrSums = [];
  for(let i = 0; i < mask.length; i++) {
      let currSum = 0;
      for(let j = 0; j < mask[i].length; j++) {
          if(mask[i][j] == '1') currSum+= arr[j];
      }
      subArrSums.push(currSum);
  }

  let maxInd = 0;
  for(let i = 0; i < subArrSums.length; i++) {
      if(subArrSums[i] > subArrSums[maxInd]) maxInd = i;
  }
  return subArrSums[maxInd];
}

//should output 8
console.log(maxSumSubset([-2, 1, 3, -4, 5]));
