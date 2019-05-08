class Node {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild ? leftChild : null;
    this.rightChild = rightChild ? rightChild : null;
  }
}

class BST {
  constructor() {
    this.rootNode = null;
    this.offset = 0;
  }

  insert(nodeValue) {
    const nodeToInsert = new Node(nodeValue, null, null);
    if (this.rootNode == null) {
      this.rootNode = nodeToInsert;
      return;
    }
    let currNode = this.rootNode;
    let parrentNode = null;
    while (currNode != null) {
      parrentNode = currNode;
      if (nodeValue < currNode.value) {
        currNode = currNode.leftChild;
      } else {
        currNode = currNode.rightChild;
      }
    }
    if (nodeValue < parrentNode.value) parrentNode.leftChild = nodeToInsert;
    else parrentNode.rightChild = nodeToInsert;
  }

  toString() {
    const printOffset = s => {
      for (let i = 0; i < this.offset; ++i) {
        s = " " + s;
      }
      return s;
    };

    const visualize = node => {
      let s = "";
      s += printOffset(s);

      if (node == null) {
        s += "-\n";
        return s;
      }
      s += `${node.value}\n`;

      /* leaves at the same level will be on the same indent level as well */
      this.offset += 3;
      s += "lc " + visualize(node.leftChild);
      s += "rc " + visualize(node.rightChild);
      this.offset -= 3;
      return s;
    };
    return visualize(this.rootNode);
  }

  getMaxDepth() {
    let maxDepth = (node) => {
      if (node == null) return 0;
      const lDepth = maxDepth(node.leftChild);
      const rDepth = maxDepth(node.rightChild);

      if(lDepth > rDepth) return lDepth + 1;
      else return rDepth + 1;
    }
    return maxDepth(this.rootNode);
  }
}

const bst = new BST();
const leaves = [50, 40, 30, 20, 10, 60, 70, 65, 85];
leaves.forEach(leaf => bst.insert(leaf));
console.log(bst.toString());
console.log(`Maximum depth of the BST: ${bst.getMaxDepth()}`)
