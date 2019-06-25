'use strict'

const substrOccurrence = require('substr-occurrence')

module.exports = (str, checks) => {
  let areSubstringsUnderMinimumDensity = false
  checks = Object.entries(checks)
  for (let i = 0, len = checks.length; i < len; i++) {
    const substring = checks[i][0]
    const allowedDensity = checks[i][1]
    let substringDensity = 0
    if (str.length > 0) {
      substringDensity = substrOccurrence(substring, str) * substring.length / str.length
    }
    if (substringDensity < allowedDensity) {
      areSubstringsUnderMinimumDensity = true
      break
    }
  }
  return areSubstringsUnderMinimumDensity
}
