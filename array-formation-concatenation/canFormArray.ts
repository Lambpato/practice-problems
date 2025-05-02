function canFormArray(arr: number[], pieces: number[][]): boolean {
    let str = ',' + arr.join(',') + ',';
    for (let piece of pieces) {
        let sub = ',' + piece.join(',') + ',';
        if (!str.includes(sub)) return false;
    }
    return true;
}