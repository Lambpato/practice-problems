const MOD = 1_000_000_007;

function idealArrays(n: number, maxValue: number): number {
    const maxLen = 14; 

    const comb: number[][] = Array.from({ length: n + 1 }, () => Array(maxLen + 1).fill(0));
    comb[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        comb[i][0] = 1;
        for (let j = 1; j <= Math.min(i, maxLen); j++) {
            comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
        }
    }

    
    const dp: number[][] = Array.from({ length: maxValue + 1 }, () => Array(maxLen + 1).fill(0));
    for (let i = 1; i <= maxValue; i++) dp[i][1] = 1;

    for (let length = 2; length <= maxLen; length++) {
        for (let i = 1; i <= maxValue; i++) {
            for (let j = 2 * i; j <= maxValue; j += i) {
                dp[j][length] = (dp[j][length] + dp[i][length - 1]) % MOD;
            }
        }
    }

    let result = 0;
    for (let i = 1; i <= maxValue; i++) {
        for (let length = 1; length <= maxLen; length++) {
            if (dp[i][length] === 0) continue;
            result = (result + dp[i][length] * comb[n - 1][length - 1]) % MOD;
        }
    }

    return result;
}