/*
    Constraints:
        input: string
        output: true is sentence contains all letters from abc, else false

    Ideas:
        go through the abc and for each check if it is in the sentence

    Complexity:
    26 * O(N)

    Code:
*/

function isPangram(string) {
    string = string.toLowerCase();
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);

    for(let i = a; i <= z; i++) {
        if(string.indexOf(String.fromCharCode(i)) == -1) return false;
    }
    return true;
}

// Tests:

console.log(isPangram("The quick brown fox jumps over the lazy dog") == true);
console.log(isPangram("This is not a pangram") == false);
