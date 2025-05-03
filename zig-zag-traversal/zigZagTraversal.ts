function zigzagTraversal(grid: number[][]): number[] {
    const result: number[] = [];
    let skip = false;

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        const cols = row.length;
        const indices = i % 2 === 0 
            ? [...Array(cols).keys()]
            : [...Array(cols).keys()].reverse();

        for (const j of indices) {
            if (!skip) {
                result.push(row[j]);
            }
            skip = !skip;
        }
    }

    return result;
}