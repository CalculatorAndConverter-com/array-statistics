# array-statics

[![NPM](https://nodei.co/npm/array-statistics.png)](https://nodei.co/npm/array-statistics/)

A simple to use package for performing statistical calculations on arrays of numbers.

**Note:** All of the exported functions in this package will attempt to convert any strings in your array to numbers (e.g., "5.67" => 5.67, "100,000.56" => 100000.56, "$56.58" => 56.58). All other values will filtered out of the calculations. See below for more details.

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
  standardDeviation,
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
console.log(`standardDeviation:`, standardDeviation(array))

// sum: 90
// count: 5
// mean: 18
// median: 20
// mode: [10, 20]
// minimum: 10
// maximum: 30
// range: 20
// standardDeviation: 7.483314773547883
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
