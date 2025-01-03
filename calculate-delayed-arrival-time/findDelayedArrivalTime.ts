function findDelayedArrivalTime(
  arrivalTime: number,
  delayedTime: number
): number {
  let newTime = arrivalTime + delayedTime;
  newTime >= 24 && (newTime -= 24);
  return newTime;
}
