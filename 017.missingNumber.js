function missingNumber(ar1, ar2) {
    for(let i = 0; i < ar1.length; i++) {
        let j = 0;
        while(j < ar2.length) {
            if(ar1[i] == ar2[j]) break;
            j++;
        }
        if (j == ar2.length) return ar1[i];
    }
}

console.log(missingNumber([1, 2, 3, 4, 5], [1, 2, 3, 4]));