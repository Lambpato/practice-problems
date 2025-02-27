function isValid(word: string): boolean {
  const regEx =
    /^(?=.*[a-zA-Z0-9]{3,})(?=.*[aeiou])(?=.*[bcdfghjklmnpqrstvwxyz])[a-zA-Z0-9]+$/i;
  return regEx.test(word);
}
