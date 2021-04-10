/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrStr = str.split('');
  const newArr = [];
  let newNewArr = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      newArr.push(arrStr[i]);
    } else {
      newArr.push(arrStr[i]);
      newArr.push(' ');
    }
  }
  const bufer = newArr.join('').split(' ');
  for (let j = 0; j < bufer.length; j++) {
    newNewArr.push(bufer[j].length + bufer[j]);
  }
  const answer = [];
  newNewArr = newNewArr.join('').split('');
  for (let k = 0; k < newNewArr.length; k++) {
    if (newNewArr[k] !== newNewArr[k + 1] && newNewArr[k] !== '0' && newNewArr[k] !== '1') {
      answer.push(newNewArr[k]);
    }
  }
  return answer.join('');
}

module.exports = encodeLine;
