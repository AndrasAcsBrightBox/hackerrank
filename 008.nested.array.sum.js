const sumNumbersInNestedArrays = (arr, curr) => {
  if (curr == arr.length) return;
  let sum = 0;
  while (curr < arr.length) {
    if (arr[curr].constructor == Array) {
      sum += sumNumbersInNestedArrays(arr[curr], 0);
    } else {
      sum += arr[curr];
    }
    curr++;
  }
  return sum;
};

console.log(sumNumbersInNestedArrays([1, 2, [1, 2], [1, 2, 3, [1, 2, 3]]], 0));


// language: javascript

function minIndex(array) {
    let minIndex = -1;
    let minValue = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < minValue || minIndex < 0) {
        minIndex = i;
        minValue = array[i];
      }
    }
  
    return minIndex;
  }

  console.log(minIndex([1, 2, -1, -100]));