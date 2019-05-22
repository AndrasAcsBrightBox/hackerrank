/*
    constraints:
        input is a string, output is boolean whether the input contains correct parenthesises.

    idea:

        the number of open and close parenthesis must be the same
        the parethesises must be balanced
        count the openings and the begennings --> at all time the # openings >= #closing

        O(N)
*/

function validParentheses(parens) {
  let no = 0;
  let nc = 0;
  for(let i = 0; i < parens.length; i++) {
      if(parens[i] == '(') no++;
      else nc++;

      if(nc > no) return false;
  }
  return nc == no;
}

console.log(validParentheses("(())((()())())") == true);
console.log(validParentheses("))((") == false);
console.log(validParentheses("())") == false);
