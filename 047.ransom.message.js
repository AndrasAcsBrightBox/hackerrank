'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine_ordo_square(magazine, note) {
    let m = magazine.length;
    let n = note.length;

    let used = [];
    for (let i = 0; i < n; i++){
        let found = false;
        for (let j = 0; j < m; j++) {
            if (note[i] == magazine[j] && used.indexOf(j) == -1) {
                used.push(j);
                found = true;
                break;
            }
        }
        if (!found) return 'No';
    }
    return 'Yes';

}

// https://www.hackerrank.com/challenges/ctci-ransom-note
let c=(m,n)=>{let d={}
    m.forEach(x=>d[x]=d[x]?d[x]+1:1)
    for(m of n){if(d[m])d[m]--
        else return 'No'}
    return 'Yes'}

let checkMagazine=(mag,note)=>{
    const magDict = {};
    mag.forEach(m => {
        if (magDict.hasOwnProperty(m)) magDict[m]++;
        else magDict[m] = 1;
    })

    for (let i = 0; i < note.length; i++) {
        let found = false;
        if (magDict.hasOwnProperty(note[i]) && magDict[note[i]] > 0) {
            magDict[note[i]]--;
            found = true;
        }
        if(!found) return 'No'
    }
    return 'Yes'
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    // 134  char solution :)))
    console.log(c(magazine, note))

    // O(N) solution to the problem
    //console.log(checkMagazine(magazine, note));
}
