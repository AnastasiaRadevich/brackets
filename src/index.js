module.exports = function check(str, bracketsConfig) {
    let configOpen = []
    let configClose = []

    bracketsConfig.forEach(item => {
        configOpen.push(item[0])
        configClose.push(item[1])
    })
    
    if (str.length <= 1)
    return false

  let openingBracket, bracket
  let stack = []

  for (let i = 0; i < str.length; i++) {
    bracket = str[i]

    if (bracket === '|' || bracket === '7' || bracket === '8') {
      if (stack.length >= 1 && stack.includes(bracket)) {
        stack.pop()
      } else {
        stack.push(bracket)
      }
      
   
    } else if (configClose.indexOf(bracket) > -1) {
      openingBracket = configOpen[configClose.indexOf(bracket)]
      if ( stack.length == 0 || (stack.pop() != openingBracket)) {
        return false;
      }
    } else {
      stack.push(bracket)
    }
  }

  return (stack.length == 0)
}
