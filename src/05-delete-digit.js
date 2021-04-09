/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const sorted = String(n).split('').sort();
  const v = String(n).split('');
  for (let i = 0; i < v.length; i++) {
    if (v[i] === sorted[0]) {
      v.splice(i, 1);
      break;
    }
  }
  return Number(v.join(''));
}

module.exports = deleteDigit;
