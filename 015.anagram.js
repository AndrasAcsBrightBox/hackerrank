function areAnagram(str1, str2) {
    if(str1.length != str2.length) return false;
    let i = 0;
    while(i < str1.length) {
        let j = 0;
        while(j < str2.length) {
            if(str2[j] == str1[i]) {
                break;
            }
            j++;
        }
        if(j == str2.length) {
            break;
        }
        i++;
    }
    return i == str1.length;
}

console.log(areAnagram('silent', 'listen')); // should return true
console.log(areAnagram('silent', 'listen1')); // should return false
console.log(areAnagram('silent', 'loud')); // should return false