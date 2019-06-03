/*
    Constraints:
        local maxima of a numeric array
        Output: object with positions and values of peaks

        Input can be empty as well.
        First and last elements of the array are not considered as peaks

    Ideas:
        If length is 0, 1, 2 --> return empty result.
        Let's do it in O(N) time --> iterate once in the array.

        0 1 2 5 1
          U U U D
          
        0 1 2 2 2 1
          U S S S D --> return pos: [3], peak: [2]

        We need to care about the diff between the prev and current and store the last highest
        position.

    Complexity:

    Code:
*/

function pickPeaks(arr) {
  const len = arr.length;
  if ([0, 1, 2].indexOf(len) > -1) return { pos: [], peaks: [] };

  let isUpwards = false;
  let prevPos = 0;
  let inPeak = false;
  let peakStartPos;

  let result = {
      pos : [],
      peaks: []
  }
  for (let i = 1; i < len; i++) {
      if(arr[prevPos] < arr[i]){
        isUpwards = true;
      }
      else if (arr[prevPos] == arr[i]) {
          isUpwards = false;
          if(!inPeak) {
              peakStartPos = prevPos;
          }
          inPeak = true;
      }
      else {
          /* Change of direction, let's save the porevious as local maxima. */
          if(isUpwards) {
              result.pos.push(prevPos);
              result.peaks.push(arr[prevPos]);
              isUpwards = false;
          }

          if(inPeak) {
            result.pos.push(peakStartPos);
            result.peaks.push(arr[peakStartPos]);
            peakStartPos = undefined;
            inPeak = false;
          }
      }
      prevPos = i;
  }

  return result;
}

/*
    Tests:
*/

console.log(pickPeaks([0, 1, 2, 5, 1]), { pos: [3], peaks: [5] });

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), {
  pos: [3, 7],
  peaks: [6, 3]
});

console.log(pickPeaks([]), { pos: [], peaks: [] });

console.log(pickPeaks([3, 4, 5]), { pos: [], peaks: [] });

console.log(pickPeaks([5, 4, 3]), { pos: [], peaks: [] });

console.log(pickPeaks([1, 2, 2, 2, 1]), {pos: [1], peaks: [2]});

console.log(pickPeaks([1, 2, 2, 2, 3]), {pos: [], peaks: []});
