/*
    Constraints:
        In --> arr[int], shiftNum
        Out --> arr stringified after shiftings
    Ideas:
        implement the data type for rotations
        rotate n times and Array.prototype.join it().
    Complexity:

    Tests:
*/

class RArray {
    constructor(a) {
        this.a = a;
    }

    shift() {
        let fe = this.a.shift();
        this.a.push(fe);
        return this.a;
    }

    get() {
        return this.a;
    }
}

function rotLeft(a, d) {
    const ra = new RArray(a);
    for(let i = 0; i < d; i++) ra.shift();
    return ra.get().join(' ');
}

console.log(rotLeft([1, 2, 3, 4, 5], 54));