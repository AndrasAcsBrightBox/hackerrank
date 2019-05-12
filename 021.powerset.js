function powerSet(arr) {
  if (arr == null || arr == undefined || arr.constructor != Array) {
    throw new TypeError(`${arr} is not a valid input.`);
  }
  let powSetLen = Math.pow(2, arr.length);
  let maskArr = [];
  for (let i = 0; i < powSetLen; i++) {
    maskArr.push(i.toString(2).padStart(arr.length, "0"));
  }
  let result = [];
  for (let i = powSetLen - 1; i >= 0; i--) {
    let currSet = [];
    for (let j = 0; j < maskArr[i].length; j++) {
      if (maskArr[i][j] == "1") {
        currSet.push(arr[j]);
      }
    }
    result.push(currSet);
  }
  return result;
}

// tests:
function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}

console.log("Input is null --> TypeError is trown\n");
try {
  powerSet(null);
  console.log("failed");
} catch (err) {
  if (err instanceof TypeError) {
    console.log("passed");
  } else {
    console.log("failed");
  }
  console.log("\n\n");
}

console.log("Input is undefined --> TypeError is trown\n");
try {
  powerSet();
  console.log("failed");
} catch (err) {
  if (err instanceof TypeError) {
    console.log("passed");
  } else {
    console.log("failed");
  }
  console.log("\n\n");
}

console.log("Input is not an array --> TypeError is trown\n");
try {
  powerSet(Object.create());
  console.log("failed");
} catch (err) {
  if (err instanceof TypeError) {
    console.log("passed");
  } else {
    console.log("failed");
  }
  console.log("\n\n");
}

console.log(`Input is an empty array -->
             powerset is an array containing an empty array\n`);
var result = powerSet([]);
if(arraysEqual(result, [[]])) {
    console.log('passed');
}
else {
    console.log('failed');
}
console.log("\n\n");

console.log(`Input is an array of integers -->
             powerset of it is returned\n`);
var result = powerSet([0, 1]);
if(arraysEqual(result, [[0, 1], [0], [1], []])) {
    console.log('passed');
}
else {
    console.log('failed');
}
console.log("\n\n");

console.log(`Input is an array of strings -->
             powerset of it is returned\n`);
var result = powerSet(['a', 'b', 'c']);
var expectedResult = [['a', 'b', 'c'], ['a', 'b'], ['a', 'c'], ['a'], ['b', 'c'], ['b'], ['c'], []]; 
if(arraysEqual(result, expectedResult)) {
    console.log('passed');
}
else {
    console.log('failed');
}
console.log("\n\n");