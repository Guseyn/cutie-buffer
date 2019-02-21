'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is integer
class ByteLengthOfBuffer extends AsyncObject {
  constructor (string, encoding) {
    super(string, encoding || 'utf8')
  }

  syncCall () {
    return Buffer.byteLength
  }
}

module.exports = ByteLengthOfBuffer
