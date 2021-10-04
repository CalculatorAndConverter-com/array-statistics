# array-statics

[![NPM](https://nodei.co/npm/array-statistics.png)](https://nodei.co/npm/array-statistics/)

A simple to use package for performing statistical calculations on arrays of numbers.

## Install

```
npm i array-statistics
```

## Example

```
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

<!-- sum: 90
count: 5
mean: 18
median: 20
mode: [ 10, 20 ]
minimum: 10
maximum: 30
range: 20
standardDeviation: 7.483314773547883 -->
```
