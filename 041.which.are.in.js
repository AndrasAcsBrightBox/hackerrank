/*
    constaints:
        a1, a2 arrays
        get r, where r has all the a1s which are substrings of any a2 alphabetically ordered

    ideas:
        go through a1
            for each a1 go through all a2 - if it is substring of one,
            then add a1 to r and break

        r.sort()

    complexity:
    A1 * A2

    Code:
*/

function inArray(array1,array2){
    const r = [];
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array2[j].indexOf(array1[i]) > -1) {
                r.push(array1[i]);
                break;
            }
        }
    }
    r.sort();
    return r;
  }

// tests:

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
let a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])