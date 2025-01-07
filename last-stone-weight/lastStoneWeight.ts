function lastStoneWeight(stones: number[]): number {
  const sortedStones: number[] = stones.sort((a, b) => b - a);
  while (sortedStones.length > 1) {
    if (sortedStones[0] === sortedStones[1]) {
      sortedStones.splice(0, 2);
    } else {
      sortedStones.splice(0, 2, sortedStones[0] - sortedStones[1]);
      sortedStones.sort((a, b) => b - a);
    }
  }
  return sortedStones.length === 1 ? sortedStones[0] : 0;
}
