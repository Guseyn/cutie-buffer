'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is buffer
class ConcatenatedBuffers extends AsyncObject {
  constructor (buffers, totalLength) {
    super(buffers, totalLength)
  }

  syncCall () {
    return Buffer.concat
  }
}

module.exports = ConcatenatedBuffers
