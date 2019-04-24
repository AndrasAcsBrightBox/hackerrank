/*
Lilah has a string, `s`, of lowercase English letters that she repeated infinitely many times.
Given an integer, `n`, find and print the number of letter a's in the first `n` letters of Lilah's
infinite string.

For example, if the string `s = 'abcac'` and `n = 10`, the substring we consider is `abcacabcac`,
the first `10` characters of her infinite string. There are `4` occurrences of a in the substring. 
*/

function repeatedString(s, n) {
    const countA = str => {
        return str.split('')
        .filter(letter => letter === 'a')
        .length;
    }
    var l = s.length;
    var rt = Math.floor(n / l);
    return countA(s) * rt + countA(s.substr(0, (n - rt * l)));
}

// Should print 4
console.log(repeatedString('abcac', 10)); 