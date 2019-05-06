function multiplication() {
    let outpout = '';
    for(let i = 1; i < 13; i++) {
        for(let j = 1; j < 13; j++) {
            outpout += (i * j).toString().padStart(4, ' ');
        }
        outpout += '\n';
    }
    return outpout;
}

// https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions
// http://bigocheatsheet.com/
// http://old.hiredintech.com/app (algorithm and systems design )

// String.prototype.padStart!

console.log(multiplication());