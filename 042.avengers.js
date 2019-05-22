/*

    Constraints:
    array of N numbers, where each number can be 25, 50, 100
    output 'YES' if in order he can sell the tickets other way 'NO'

    Ideas:

    We need to keep track of the money Vasya collects to determine at a stage he can give back or not.
    Go in the line until he can give back money. If the line ended 'YES'. If he struggles to give back money 'NO'.

    Complexity:
    O(N)

    Code:
*/

function tickets(peopleInLine) {
  let cassa = [];
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 25) {
      cassa.push(25);
    }
    if (peopleInLine[i] == 50) {
      let i25 = cassa.indexOf(25);
      if (i25 == -1) return "NO";
      cassa.splice(i25, 1);
      cassa.push(50);
    } else if (peopleInLine[i] == 100) {
      let c25 = cassa.filter(c => c == 25).length;
      let c50 = cassa.filter(c => c == 50).length;

      if(c50 >= 1 && c25 >=1) {
          cassa.splice(cassa.indexOf(25), 1);
          cassa.splice(cassa.indexOf(50), 1);
      } else if( c25 >= 3) {
          for(let j = 0; j < 3; j++) {
              cassa.splice(cassa.indexOf(25), 1);
          }
      }
      else return 'NO'

      cassa.push(100);
    }
  }
  return "YES";
}

// Tests:

console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");

console.log(
  tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 25, 50, 100]),
  "YES"
);

console.log(
  tickets([
    25,
    50,
    25,
    100,
    25,
    25,
    25,
    100,
    25,
    25,
    50,
    100,
    25,
    25,
    50,
    100,
    25,
    25,
    25,
    100,
    100,
    100
  ]),
  "NO"
);
