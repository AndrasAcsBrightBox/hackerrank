function charRemovedFromString(chr, str) {
    let i = 0;
    while(i < str.length) {
        if(str[i] == chr) {
            break;
        }
        i++;
    }
    return i == str.length;
}

console.log(charRemovedFromString('c', 'abba'));