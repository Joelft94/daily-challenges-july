/*    1
        /   \
        2     3
     /    \   / \
    4     5  6   7  ejemplo del arbol*/

const createNode = (value, left = null, right = null) => {
  return { value, left, right };
};

const tree = createNode(
  1,
  createNode(2, createNode(4), createNode(5)),
  createNode(3, createNode(6), createNode(7))
);

const bfs = (node) => {
  if (!node) {
    return [];
  }

  const queue = [node];
  const result = [];

  while (queue.length) {
    const current = queue.shift();
    result.push(current.value);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return result;
};

bfs(tree);
