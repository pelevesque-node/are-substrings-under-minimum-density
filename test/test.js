/* global describe, it */
'use strict'

const expect = require('chai').expect
const areSubstringsUnderMinimumDensity = require('../index')

describe('#areSubstringsUnderMinimumDensity()', () => {
  describe('empty string', () => {
    it('should return false with an empty check', () => {
      const str = ''
      const checks = {}
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with a check with minimum === 0', () => {
      const str = ''
      const checks = { a: 0 }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true with a check with minimum > 0', () => {
      const str = ''
      const checks = { a: 0.1 }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('single character substring', () => {
    it('should return true when under minimum', () => {
      const str = 'aaaabbbb'
      const checks = { a: 0.75 }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when equal to minimum', () => {
      const str = 'aaaabbbb'
      const checks = { a: 0.5 }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when over minimum', () => {
      const str = 'aaaabbbb'
      const checks = { a: 0.25 }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substring', () => {
    it('should return true when under minimum', () => {
      const str = 'aaaabbbb'
      const checks = { aaaa: 0.75 }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when equal to minimum', () => {
      const str = 'aaaabbbb'
      const checks = { aaaa: 0.5 }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when over minimum', () => {
      const str = 'aaaabbbb'
      const checks = { aaaa: 0.25 }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('single character substrings', () => {
    it('should return true with many under minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        a: 0.9,
        b: 0.9,
        c: 0.9
      }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true with some under minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        a: 0.1,
        b: 1,
        c: 0.1
      }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false with many equal to minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        a: 0.25,
        b: 0.25,
        c: 0.25,
        d: 0.25
      }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with many over minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        a: 0.1,
        b: 0.1,
        c: 0.1,
        d: 0.1
      }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substrings', () => {
    it('should return true with many under minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        aaaa: 0.9,
        bbbb: 0.9,
        cccc: 0.9
      }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true with some under minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        aaaa: 0.1,
        bbbb: 1,
        cccc: 0.1
      }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false with many equal to minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        aaaa: 0.25,
        bbbb: 0.25,
        cccc: 0.25,
        dddd: 0.25
      }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with many over minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        aaaa: 0.1,
        bbbb: 0.1,
        cccc: 0.1,
        dddd: 0.1
      }
      const result = areSubstringsUnderMinimumDensity(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })
})
