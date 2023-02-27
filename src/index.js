module.exports = function check(str, bracketsConfig) {

  const PAIRING_BRACKETS = {};
  let bracketsStack = [];

  if (str.length % 2) {
    return false;
  }

  bracketsConfig.forEach(item => {
    PAIRING_BRACKETS[item[1]] = item[0]
  })

  for (let i = 0; i < str.length; i++) {
    let upperElement = bracketsStack[bracketsStack.length - 1];
    if (bracketsStack.length && PAIRING_BRACKETS[str[i]] === upperElement) {
      bracketsStack.pop()
    } else {
      bracketsStack.push(str[i])
    }
  }

  return bracketsStack.length === 0
}

