/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
  }

  const visited = new Array(n).fill(false);

  function dfs(node) {
      if (node === destination) return true;
      visited[node] = true;

      for (const neighbor of graph[node]) {
          if (!visited[neighbor]) {
              if (dfs(neighbor)) return true;
          }
      }

      return false;
  }

  return dfs(source);
};
