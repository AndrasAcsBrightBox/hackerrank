/*
    John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
    Given an array of integers representing the color of each sock, determine how many pairs of socks
    with matching colors there are.

    For example, there are `n = 7` socks with colors `ar = [1, 2, 1, 2, 1, 3, 2]. 
    There is one pair of color `1` and one of color `2`. There are three odd socks left, one of each
    color. The number of pairs is `2`.

    Complete the sockMerchant function in the editor below. It must return an integer representing
    the number of matching pairs of socks that are available.

    sockMerchant has the following parameter(s):

    n: the number of socks in the pile. Constraint: 1 <= n <= 100
    ar: the colors of each sock. Constraint: 1 <= ar[i] <= 100, where 0 <= n < 100
*/

function sockMerchant(n, ar) {
    var numberOfSocksByColor = {};
    ar.forEach(sock => {
        let sockColorAsString = sock.toString();
        if(numberOfSocksByColor.hasOwnProperty(sockColorAsString))
            numberOfSocksByColor[sockColorAsString]++;
        else
        numberOfSocksByColor[sockColorAsString] = 0;
    });
    var numberOfPairs = 0;
    for(let sock in numberOfSocksByColor) {
        numberOfPairs += parseInt(Number.prototype.toFixed.call(numberOfSocksByColor[sock] / 2, 0));
    }
    return numberOfPairs;
}

// Should result in `3` 
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))