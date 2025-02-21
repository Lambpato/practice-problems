function maxAbsValExpr(arr1: number[], arr2: number[]): number {
  let max1 = -Infinity,
    min1 = Infinity;
  let max2 = -Infinity,
    min2 = Infinity;
  let max3 = -Infinity,
    min3 = Infinity;
  let max4 = -Infinity,
    min4 = Infinity;

  for (let i = 0; i < arr1.length; i++) {
    let S1 = arr1[i] + arr2[i] + i;
    let S2 = arr1[i] + arr2[i] - i;
    let S3 = arr1[i] - arr2[i] + i;
    let S4 = arr1[i] - arr2[i] - i;

    max1 = Math.max(max1, S1);
    min1 = Math.min(min1, S1);
    max2 = Math.max(max2, S2);
    min2 = Math.min(min2, S2);
    max3 = Math.max(max3, S3);
    min3 = Math.min(min3, S3);
    max4 = Math.max(max4, S4);
    min4 = Math.min(min4, S4);
  }

  return Math.max(max1 - min1, max2 - min2, max3 - min3, max4 - min4);
}
