const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

// input --> graph + node, from where we would like to
// see the length of the path

function bfs(graph, root) {
  let nodesLen = {};

  // transform to an array
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  // from itself it has 0 lenght
  nodesLen[root] = 0;

  let queue = [root];
  let current;
  while (queue.length > 0) {
    current = queue.shift();

    let currConnected = graph[current];
    let neighbourIndexes = [];

    // get the first connected neightbour from row
    let idx = currConnected.indexOf(1);
    while (idx > -1) {
      neighbourIndexes.push(idx);
      // search the next neighbour from 
      // the place of the current neighbour
      idx = currConnected.indexOf(1, idx + 1);
    }

    // We only counting the way from the root, so as we are 
    // going further from the root we add 1 for each level 
    for(let i = 0; i < neighbourIndexes.length; i++) {
        if(nodesLen[neighbourIndexes[i]] == Infinity) {
            nodesLen[neighbourIndexes[i]] = nodesLen[current] + 1;
            queue.push(neighbourIndexes[i]);
        }
    }
  }
  return nodesLen;
}

console.log(bfs(exBFSGraph, 4));
