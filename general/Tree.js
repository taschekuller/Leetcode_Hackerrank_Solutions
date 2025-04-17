/*
  ! important notes

*/

// ***
// Recursive Inorder Traversal L_Root_R
// ***
function inorderTraversal(root) {
  if (!root) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}

// ***
// Recursive Preorder Traversal Root_L_R
// ***
function preorderTraversal(root) {
  if (!root) return [];
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
}

// ***
// Recursive Postorder Traversal L_Root_R
// ***
function postorderTraversal(root) {
  if (!root) return [];
  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
}

// ***
// BFS Level Order Traversal
// ***
function levelOrder(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}

// ! TRIES
// ***
// Trie Node
// ***
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
// ***
// Trie Class
// ***
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
  delete(word) {
    const deleteHelper = (node, word, depth) => {
      if (!node) return false;

      if (depth === word.length) {
        if (!node.isEndOfWord) return false;
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }

      const char = word[depth];
      if (deleteHelper(node.children[char], word, depth + 1)) {
        delete node.children[char];
        return Object.keys(node.children).length === 0 && !node.isEndOfWord;
      }
      return false;
    };
    deleteHelper(this.root, word, 0);
  }
}

//! Graphs
// ***
// Graph Node
// ***
class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}
// ***
// Graph Class
// ***
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    const node = new GraphNode(value);
    this.nodes.set(value, node);
    return node;
  }

  addEdge(value1, value2) {
    const node1 = this.nodes.get(value1);
    const node2 = this.nodes.get(value2);
    if (node1 && node2) {
      node1.edges.push(node2);
      node2.edges.push(node1); // Assuming undirected graph
    }
  }
}