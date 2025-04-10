function minOperations(nums: number[], k: number): number {
    if (nums.some(num => num < k)) return -1;

    let operations = 0;
    let currentNums = [...nums];

    while (!currentNums.every(num => num === k)) {
        const greaterThanK = Array.from(new Set(currentNums.filter(n => n > k)));

        if (greaterThanK.length === 0) break;

        greaterThanK.sort((a, b) => b - a);

        const top = greaterThanK[0];
        const next = greaterThanK[1] ?? k;

        const valuesAboveNext = currentNums.filter(n => n > next);
        const uniqueAboveNext = new Set(valuesAboveNext);

        if (uniqueAboveNext.size > 1) return -1;

        currentNums = currentNums.map(n => (n > next ? next : n));
        operations++;
    }

    return operations;
}
