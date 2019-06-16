/*
Constraints:
Input: random triplets from a string
Array of arrays of strings, each has the length of 3

Each letter only appears once in the secret string.

Each triplet is valid, and together they contain enough information, to deduce the
sectret string.

Secret word must be at least 3 chars long

Ideas:

We need to have two lists:
- letters, with all the letters before them
            - letters wit all the letters after them
            
            Based on the first list we can find the first letter.
            Based on the second list we start to build a tree, and go level by level
            
            Each level is one more letter long -> from the second list until we find letters after
            the current last one.
            
            The longest leaf node will be the solution. (just keep an array of terminal strings.)
            
        One item --> value + childNodes
        
        Complexity:
        ???
        
        Code:
        
        */
var recoverSecret = function(triplets) {
  console.time('call');

  function Letter(value, parent) {
    this.value = value;
    this.children = [];
    this.parent = parent ? parent : null;
    this.secretMessage =
      (this.parent ? this.parent.secretMessage : "") + this.value;
  }

  let terminalNodes = [];
  const lb = {};
  const la = {};

  function populateLettersBefore(lb, triplet) {
    if (!lb.hasOwnProperty(triplet[0])) {
      lb[triplet[0]] = {};
    }
    if (!lb.hasOwnProperty(triplet[1])) {
      lb[triplet[1]] = {};
      lb[triplet[1]][triplet[0]] = triplet[0];
    } else {
      if (!lb[triplet[1]].hasOwnProperty(triplet[0])) {
        lb[triplet[1]][triplet[0]] = triplet[0];
      }
    }
    if (!lb.hasOwnProperty(triplet[2])) {
      lb[triplet[2]] = {};
      lb[triplet[2]][triplet[0]] = triplet[0];
      lb[triplet[2]][triplet[1]] = triplet[1];
    } else {
      if (!lb[triplet[2]].hasOwnProperty(triplet[0])) {
        lb[triplet[2]][triplet[0]] = triplet[0];
      }
      if (!lb[triplet[2]].hasOwnProperty(triplet[1])) {
        lb[triplet[2]][triplet[1]] = triplet[1];
      }
    }
  }

  function populateLettersAfter(la, triplet) {
    if (!la.hasOwnProperty(triplet[0])) {
      la[triplet[0]] = {};
      la[triplet[0]][triplet[1]] = triplet[1];
      la[triplet[0]][triplet[2]] = triplet[2];
    } else {
      if (!la[triplet[0]].hasOwnProperty(triplet[1])) {
        la[triplet[0]][triplet[1]] = triplet[1];
      }
      if (!la[triplet[0]].hasOwnProperty(triplet[2])) {
        la[triplet[0]][triplet[2]] = triplet[2];
      }
    }

    if (!la.hasOwnProperty(triplet[1])) {
      la[triplet[1]] = {};
      la[triplet[1]][triplet[2]] = triplet[2];
    } else {
      if (!la[triplet[1]].hasOwnProperty(triplet[2])) {
        la[triplet[1]][triplet[2]] = triplet[2];
      }
    }
    if (!la.hasOwnProperty(triplet[2])) {
      la[triplet[2]] = {};
    }
  }

  let secretMessage = "";

  function buildTree(node, la) {
    node.children = getChildrenNode(node, la);
    if (!node.children) {
      if (secretMessage.length < node.secretMessage.length) {
        secretMessage = node.secretMessage;
      }
    } else {
      for (let i = 0; i < node.children.length; i++) {
        buildTree(node.children[i], la);
      }
    }
  }

  function getChildrenNode(node, la) {
    const children = [];
    let cl = node.value;
    for (let letter in la[cl]) {
      if (node.secretMessage.indexOf(letter) == -1) {
        children.push(new Letter(letter, node));
      }
    }
    return children.length ? children : null;
  }

  console.time("tripleting");
  for (let i = 0; i < triplets.length; i++) {
    populateLettersBefore(lb, triplets[i]);
    populateLettersAfter(la, triplets[i]);
  }
  console.timeEnd("tripleting");

  let startNode;
  for (let letter in lb) {
    if (Object.keys(lb[letter]).length == 0) {
      startNode = new Letter(letter);
      break;
    }
  }
  console.time("tree building");
  buildTree(startNode, la);
  console.timeEnd("tree building");
  console.timeEnd('call');
  return secretMessage;
};

// tests

secret1 = "whatisup";
triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"]
  // , ['w', 't', 'i']
];

console.log(recoverSecret(triplets1), secret1);


/*
 t -> u -> p
 t -> s -> u -> p
 a -> t -> s -> u -> p
 a -> t -> i -> s -> u -> p
*/
