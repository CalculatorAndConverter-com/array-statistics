const Big = require("big-js/big")

// Attempts to convert strings to numbers e.g., '5' => 5, '$863,546.56' => 863546.56
// Returns new array with invalid numbers (including strings that can't be converted to numbers) removed.
// Throws error if array doesn't include at least one valid number
const ArrayValuesToNumbersAndCheckThatIncludesAtLeastOneValidNo = (array) => {
  let newArray = []
  if (Array.isArray(array)) {
    array.map((i) => {
      if (typeof i !== "boolean" && Array.isArray(i) === false) {
        i = String(i).replace(/[^0-9.\- ]+/g, "")
        if (Number(i) || i === 0 || i === "0") {
          newArray.push(Number(i))
        }
      }
    })
  } else {
    throw "The parameter you passed must be an array."
  }

  if (newArray.length > 0) {
    return newArray
  } else {
    throw "Array does not include any valid numbers."
  }
}

let sum = (array) => {
  let arr = ArrayValuesToNumbersAndCheckThatIncludesAtLeastOneValidNo(array)
  let s = arr.reduce((a, b) => {
    return Big(a).plus(Big(b))
  })
  return Number(s)
}

let count = (array) => {
  let arr = ArrayValuesToNumbersAndCheckThatIncludesAtLeastOneValidNo(array)
  let c = arr.length
  return c
}

let mean = (array) => {
  let s = sum(array)
  let c = count(array)
  let m = Big(s).div(Big(c))
  return Number(m)
}

let median = (array) => {
  let arr = ArrayValuesToNumbersAndCheckThatIncludesAtLeastOneValidNo(array)
  let sortedArray = arr.sort((a, b) => {
    return Number(a) - Number(b)
  })

  var middleNumber = Math.floor(sortedArray.length / 2)

  if (sortedArray.length % 2) return sortedArray[middleNumber]

  let median = Big(sortedArray[middleNumber - 1]).plus(Big(sortedArray[middleNumber]))
  median = median.div(2)
  return Number(median)
}

let mode = (array) => {
  let arr = ArrayValuesToNumbersAndCheckThatIncludesAtLeastOneValidNo(array)
  let modes = []
  let count = []
  let maxIndex = 0

  for (let i = 0; i < arr.length; i += 1) {
    let no = arr[i]
    count[no] = (count[no] || 0) + 1
    if (count[no] > maxIndex) {
      maxIndex = count[no]
    }
  }

  for (let i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i))
      }
    }

  return modes
}

let minimum = (array) => {
  let arr = ArrayValuesToNumbersAndCheckThatIncludesAtLeastOneValidNo(array)
  let mini = Math.min(...arr)
  return mini
}
let maximum = (array) => {
  let arr = ArrayValuesToNumbersAndCheckThatIncludesAtLeastOneValidNo(array)
  let maxi = Math.max(...arr)
  return maxi
}

let range = (array) => {
  return Number(Big(maximum(array)).minus(Big(minimum(array))))
}

let standardDeviation = (array) => {
  let arr = ArrayValuesToNumbersAndCheckThatIncludesAtLeastOneValidNo(array)
  let c = arr.length
  let m = mean(arr)
  let SquareRoot = arr
    .map((n) => {
      let nMinusMean = Big(n).minus(Big(m))
      let power = nMinusMean.pow(2)
      return power
    })
    .reduce((a, b) => {
      return Big(a).plus(Big(b))
    })
    .div(Big(c))
    .sqrt()

  return Number(SquareRoot)
}

module.exports = {
  sum,
  count,
  mean,
  median,
  mode,
  minimum,
  maximum,
  range,
  standardDeviation,
}
