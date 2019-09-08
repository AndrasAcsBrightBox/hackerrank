const anagram = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const ds1 = {},
    ds2 = {};
  const mapToDictionary = (string, dictionary) => {
    Array.from(string).forEach(character => {
      dictionary[character] = dictionary[character]
        ? dictionary[character] + 1
        : 1;
    });
  };
  mapToDictionary(s1, ds1);
  mapToDictionary(s2, ds2);

  for (let key in ds1) {
    if (ds1[key] !== ds2[key]) return false;
  }
  return true;
};

createSubStrings = string => {
  let sa = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      if (!(i == 0 && j == string.length - 1))
        sa.push(string.substring(i, j + 1));
    }
  }
  return sa;
};

console.log(createSubStrings("mom"));
console.log(createSubStrings("abba"));
