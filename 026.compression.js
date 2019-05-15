function compression(s) {
  if (s.length == 0) return "";
  if (s.length == 1) return s + 1;
  let compressed = "" + s[0];
  let count = 1;
  for (let p = 1; p < s.length; p++) {
    if (s[p] == compressed[compressed.length - 1]) {
      count++;
    } else {
      compressed += count;
      compressed += s[p];
      count = 1;
    }
  }
  compressed += count;
  return s.length < compressed.length ? s : compressed;
}


console.log(compression('aaabbbc'));