function isValid(word: string): boolean {
  const regEx = /^[a-z]{3,}[aeiou]+[bcdfghjklmnpqrstvwxyz]+[0-9]+$/i;
  return regEx.test(word);
}
