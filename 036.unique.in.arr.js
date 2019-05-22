/*
    constraints:
        input either a string or an array
        output is the unique items in the string, so let's remove the duplicates..

    idea:
        if the length is one, zero return empty array
                                if the length is 1 rreturn that element in an array

        else focus on prev cuccent. if prev and current are not the same push to 
        array and continue

    compexity this way is O(N)

*/

function uniqueInOrder(iterable) {
  if (iterable.length == 0) return [];
  if (iterable.length == 1) return [iterable[0]];

  const res = [];
  let prevInd = 0;
  res.push(iterable[prevInd]);
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[prevInd] != iterable[i]) res.push(iterable[i]);
    prevInd = i;
  }
  return res;
}

/* Test harvest */
console.log(uniqueInOrder("AAAABBBCCDAABBB"))// == ["A", "B", "C", "D", "A", "B"]);
console.log(uniqueInOrder("ABBCcAD"))// == ["A", "B", "C", "c", "A", "D"]);
console.log(uniqueInOrder([1, 2, 2, 3, 3]))// == [1, 2, 3]);
