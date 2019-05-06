function ReverseString(toReverse){
    const len = toReverse.length;
    let reversed = '';
    for (let i = len -1; i >= 0; i--){
        reversed += toReverse[i];
    }
    return reversed;
}

console.log(ReverseString('Madam, I\'m Adam'));