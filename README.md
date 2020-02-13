[![Build Status](https://travis-ci.org/pelevesque/are-substrings-under-minimum-density.svg?branch=master)](https://travis-ci.org/pelevesque/are-substrings-under-minimum-density)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/are-substrings-under-minimum-density/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/are-substrings-under-minimum-density?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# are-substrings-under-minimum-density

Checks if substrings are under minimum densities in a string.

## Related Packages

https://github.com/pelevesque/are-substrings-over-maximum-density   
https://github.com/pelevesque/are-substrings-under-minimum-occurrences  
https://github.com/pelevesque/are-substrings-over-maximum-occurrences  

## Node Repository

https://www.npmjs.com/package/@pelevesque/are-substrings-under-minimum-density

## Installation

`npm install @pelevesque/are-substrings-under-minimum-density`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

### Requiring

```js
const areSubstringsUnderMinimumDensity = require('@pelevesque/are-substrings-under-minimum-density')
```

### One Check

```js
// under density returns true
// 'a' takes up 50% of the string, less than a 75% density
const str = 'aaaabbbb'
const checks = { a: 0.75 }
const result = areSubstringsUnderMinimumDensity(str, checks)
// result === true
```

```js
// equal to density returns false
const str = 'aaaabbbb'
const checks = { a: 0.5 }
const result = areSubstringsUnderMinimumDensity(str, checks)
// result === false
```

```js
// over density returns false
const str = 'a man, a hog, and a fly'
const checks = { hog: 0.01 }
const result = areSubstringsUnderMinimumDensity(str, checks)
// result === false
```

### Multiple Checks

```js
// when one is under density, it returns true ('a' is under 75%)
const str = 'aaaabbbb'
const checks = { a: 0.75, b: 0.5 }
const result = areSubstringsUnderMinimumDensity(str, checks)
// result === true
```

```js
// when all are over or equal to density, it returns false
const str = 'aaaabbbb'
const checks = { a: 0.25, bbbb: 0.5 }
const result = areSubstringsUnderMinimumDensity(str, checks)
// result === false
```
