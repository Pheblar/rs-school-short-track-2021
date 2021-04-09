/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const splitedS1 = s1.split('');
  const splitedS2 = s2.split('');
  splitedS1.forEach((letter) => {
    if (splitedS2.includes(letter)) {
      counter++;
      splitedS2.splice(splitedS2.indexOf(letter), 1);
    }
  });
  return counter;
}

module.exports = getCommonCharacterCount;
