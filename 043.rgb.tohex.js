/*
    Constraints:
        r, g, b are integers from 0 to 255
        if over / underflow correct them to closest

        output in hexa string

    Ideas:
        correct the r, g, b values and use toString(16) to convert to hexa and concat them..

    Complexity:
    O(1), as all time I will need to convert each value to hexa

    Code:

*/

function rgb(r, g, b){
    r = normalize(r);
    g = normalize(g);
    b = normalize(b);
    
    return (toHex(r) + toHex(g) + toHex(b)).toUpperCase();
  }

function toHex(n) {
    return n.toString(16).padStart(2, '0');
}

function normalize(n) {
    if(n < 0) return 0;
    if (n > 255) return 255;
    return n;
}

// Tests:

console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300,255,255), 'FFFFFF')
console.log(rgb(173,255,47), 'ADFF2F')