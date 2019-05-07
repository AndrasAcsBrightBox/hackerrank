function isPalindrome(str) {
    let i = 0;
    while ( i < str.length / 2) {
        if(str[i] != str[str.length -1 - i])
            return false;
        i++;
    }
    return true;
}

console.log(isPalindrome('madam'));

console.log(isPalindrome('madoouodam'));