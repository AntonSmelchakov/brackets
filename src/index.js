module.exports = function check(str, bracketsConfig) {
  let res = 1
  let newArr = Array.from(str)
  let leftBArr = bracketsConfig.map(x => x[0])
  let rightBArr = bracketsConfig.map(x => x[1])
  let rbClosedArr = []
  console.log(str)
  if ((rightBArr.includes(newArr[0]) && newArr[0] !== '|') || (leftBArr.includes(newArr[newArr.length - 1]) && newArr[newArr.length - 1] !== '|')) return false
  newArr.forEach((x, i) => {
    if (leftBArr.includes(x)) {
      let c = i + 1
      let test = x
      let testInd = leftBArr.indexOf(test)
      let sameC = 0
      console.log(test, i, 'new loop')
      while (c < str.length) {
        if (x === newArr[c]) ++sameC
        if (testInd === rightBArr.indexOf(newArr[c])) {
          if (sameC === 0) {
            (c - i) % 2 !== 0 ? res *= 1 : res *= 0
            rbClosedArr.push(c)
            break
          }
          else --sameC
        }
        /*console.log(c, sameC, !!res)*/
        ++c
      }
    }
    else rbClosedArr.includes(i) ? res *= 1 : res *= 0

  })
  return !!res
}

/*Переделать через индексоф*/

/*console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]))*/