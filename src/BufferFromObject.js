'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is buffer
class BufferFromObject extends AsyncObject {
  constructor (object, offsetOrEncoding, length) {
    super(object, offsetOrEncoding, length)
  }

  syncCall () {
    return Buffer.from
  }
}

module.exports = BufferFromObject
