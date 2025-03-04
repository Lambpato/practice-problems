function maxStarSum(vals: number[], edges: number[][], k: number): number {
  if (k === 0) {
    return Math.max(...vals);
  }

  const graph: Map<number, number[]> = new Map();

  for (const [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u)!.push(v);
    graph.get(v)!.push(u);
  }

  let maxSum = -Infinity;

  for (let node = 0; node < vals.length; node++) {
    const neighbors = (graph.get(node) || []).map((neighbor) => vals[neighbor]);

    neighbors.sort((a, b) => b - a);

    let starSum = vals[node];
    for (let i = 0; i < Math.min(k, neighbors.length); i++) {
      if (neighbors[i] > 0) {
        starSum += neighbors[i];
      } else {
        break;
      }
    }

    maxSum = Math.max(maxSum, starSum);
  }

  return maxSum;
}
