'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is buffer
class BufferFromString extends AsyncObject {
  constructor (string, encoding) {
    super(string, encoding || 'utf8')
  }

  syncCall () {
    return Buffer.from
  }
}

module.exports = BufferFromString
