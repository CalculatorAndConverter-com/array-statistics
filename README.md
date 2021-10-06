# array-statistics

[![NPM](https://nodei.co/npm/array-statistics.png)](https://nodei.co/npm/array-statistics/)

A simple to use package for performing statistical calculations on arrays of numbers.
[https://calculatorandconverter.com/docs/array-statistics](https://calculatorandconverter.com/docs/array-statistics)

**Note:** All of the exported functions in this package will attempt to convert any strings in your array to numbers (e.g., "5.67" => 5.67, "100,000.56" => 100000.56, "$56.58" => 56.58). All other values will be filtered out of the calculations. See below for more details.

## Install

```
npm i array-statistics
```

## Example

```javascript
const {
  sum,
  count,
  mean,
  median,
  mode,
  minimum,
  maximum,
  range,
  sumOfSquares,
  sampleVariance,
  populationVariance,
  populationStandardDeviation,
  sampleStandardDeviation,
} = require("array-statistics")

let array = [10, 20, 30, 10, 20]

console.log(`sum:`, sum(array))
console.log(`count:`, count(array))
console.log(`mean:`, mean(array))
console.log(`median:`, median(array))
console.log(`mode:`, mode(array))
console.log(`minimum:`, minimum(array))
console.log(`maximum:`, maximum(array))
console.log(`range:`, range(array))
console.log(`sumOfSquares:`, sumOfSquares(array))
console.log(`sampleVariance:`, sampleVariance(array))
console.log(`populationVariance:`, populationVariance(array))
console.log(`sampleStandardDeviation:`, sampleStandardDeviation(array))
console.log(`populationStandardDeviation:`, populationStandardDeviation(array))

// sum: 90
// count: 5
// mean: 18
// median: 20
// mode: [ 10, 20 ]
// minimum: 10
// maximum: 30
// range: 20
// sumOfSquares: 280
// sampleVariance: 70
// populationVariance: 56
// sampleStandardDeviation: 8.366600265340756
// populationStandardDeviation: 7.483314773547883
```

## Conversions, Value Filtering, and Error Handling

- Arrays without any valid numbers will throw an error.
- Booleans, undefined, null, blank strings, and other strings that can't be converted to numbers will be removed from the array before running any of the exported functions.
- All exported functions will attempt to convert strings to numbers for every value in your array. In doing so, they'll remove all characters except 0-9, . (decimal point), and - (minus).
- Note that commas are removed from string values, then converted to numbers. A string intending to use a "decimal comma", would end up "123,45" => 12345

### Conversions and Value Filtering Example

```javascript
let mixedArray = [
  0,
  9,
  987,
  "1234.56",
  "123,456,789",
  "$58.23",
  "€200,000.80",
  true,
  false,
  "120,00",
  "Pizza",
  undefined,
  null,
]
// becomes =>
// [ 0, 9, 987, 1234.56, 123456789, 58.23, 200000.8, 12000 ]
```

## big.js Dependency

At the time of this packages launch, its sole dependency is [big.js](https://www.npmjs.com/package/big.js?activeTab=readme). Whenever possible, big.js is used for all mathematical operations to improve decimal precision.

## Creation

The functions in this package were first created by CalculatorAndConverter.com for use in these online tools: \*\*\*

- [https://calculatorandconverter.com/math/mean-median-mode-range-calculator](https://calculatorandconverter.com/math/mean-median-mode-range-calculator)
- [https://calculatorandconverter.com/math/sum-of-squares-calculator](https://calculatorandconverter.com/math/sum-of-squares-calculator)
- [https://calculatorandconverter.com/math/variance-calculator](https://calculatorandconverter.com/math/variance-calculator)
- [https://calculatorandconverter.com/math/standard-deviation-calculator](https://calculatorandconverter.com/math/standard-deviation-calculator)

We created this package to save ourselves and other developers time when needing to run basic statistical calculations on arrays.

## LICENSE

MIT License

Copyright (c) 2021 [CalculatorAndConverter.com](https://calculatorandconverter.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
