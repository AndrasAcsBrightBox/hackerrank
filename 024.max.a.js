// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function has3a(s) {
  return s.indexOf("aaa") > -1;
}

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (has3a(S)) return -1;
  let insertedCount = 0;
  if (S[0] != "a") {
    S = `aa${S}`;
    insertedCount = insertedCount + 2;
  }
  if (S[S.length - 1] != "a") {
    S = `${S}aa`;
    insertedCount = insertedCount + 2;
  }
  let p = 0;
  while (p < S.length) {
    if (S[p] != "a") {
      let newS = S.substr(0, p + 1) + "a" + S.substr(p + 1);
      if (!has3a(newS)) {
        S = newS;
        insertedCount++;
      }
      newS = S.substr(0, p - 1) + "a" + S.substr(p - 1);
      if (!has3a(newS)) {
        S = newS;
        insertedCount++;
      }
    }
    p++;
  }
  return insertedCount;
}

solution("aabab");
