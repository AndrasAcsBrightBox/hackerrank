/*
    Constraints:
    Input array of arrays containing two numbers -->> intervals
    
    Ideas:
    How would I solve it on paper?
    
    draw them on a numebr line and get find out which ones are overlapping
    Merge the overlapping ones
    
    areOverlapping(int1, int2)
    mergeIntervals(int1, int2)
    
    Complexity:
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var mergeCompley = function(intervals) {
    const areOverlapping = (a, b) => {
        const getNumbersForInterval = (interval) => {
            const start = interval[0];
            const stop = interval[1];
            return Array.from({length:(stop + 1) - start}, (v, i) => start + i );
        }
        const aNums = getNumbersForInterval(a);
        const bNums = getNumbersForInterval(b);
        return aNums.some(num => bNums.some(bnum => num == bnum));
    }
    
    const mergeIntervals = (a, b) => {
        return [a[0] < b[0] ? a[0] : b[0], a[1] > b[1] ? a[1] : b[1]];
    }
    
    const anyOverlaps = intervals => {
        for(let i = 0; i < intervals.length -1; i++) {
            if(areOverlapping(intervals[i], intervals[i +1])){
                return true;
            }
        }
        return false;
    }
    
    while(anyOverlaps(intervals)) {
        let i = 0;
        while(i < intervals.length - 1) {
            if(areOverlapping(intervals[i], intervals[i + 1])){
                break;
            }
        }
        const newInterval = mergeIntervals(intervals[i], intervals[i + 1]);
        intervals.splice(i + 1, 1)
        intervals.splice(i, 1)
        intervals.push(newInterval)
    }
    return intervals.sort((a,b) => {
        if (a[0] < b[0]) {
            return -1;
          }
      if (a[0] > b[0]) {
        return 1;
      }
      // a must be equal to b
      return 0;
    })
};

function merge(intervals) {
    if(!intervals.length) return []
    intervals.sort((a,b) => a[0] - b[0])
    const ans = [intervals[0]];
    for(let i = 1; i < intervals.length; i++) {
        const start = intervals[i][0];
        const end = intervals[i][1];
        const lastAnswerIndex = ans.length - 1;
        const laStart = ans[lastAnswerIndex][0];
        const laEnd = ans[lastAnswerIndex][1];
        if(start <= laEnd) {
            ans[lastAnswerIndex][1] = Math.max(laEnd,end);
        }
        else {
            ans.push(intervals[i])
        }
    }
    return ans;
}

// Test:
console.log(merge([[1,3],[2,6],[8,10],[15,18]]), [[1,6],[8,10],[15,18]]);