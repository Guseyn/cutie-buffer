'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is buffer
class BufferFromArrayBuffer extends AsyncObject {
  constructor (arrayBuf, byteOffset, length) {
    super(arrayBuf, byteOffset || 0, length || arrayBuf.length - byteOffset)
  }

  syncCall () {
    return Buffer.from
  }
}

module.exports = BufferFromArrayBuffer
