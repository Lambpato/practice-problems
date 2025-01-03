function findDelayedArrivalTime(
  arrivalTime: number,
  delayedTime: number
): number {
  let newTime = arrivalTime + delayedTime;
  if (newTime >= 24) {
    newTime = newTime - 24;
    return newTime;
  } else {
    return newTime;
  }
}
