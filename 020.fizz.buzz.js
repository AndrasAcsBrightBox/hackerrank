function fizzBuzz() {
    let s = ``;
    for(let i = 1; i < 101; i++) {
        if(i % 6 == 0) s+= `${i} - FizzBuzz \n`;
        else {
            if(i % 2 == 0) s+= `${i} - fizz \n`;
            if(i % 3 == 0) s += `${i} - buzz \n`;
        }
    }
    return s;
}

console.log(fizzBuzz());