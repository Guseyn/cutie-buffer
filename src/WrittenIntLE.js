'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class WrittenIntLE extends AsyncObject {
  constructor (buf, value, offset, byteLength) {
    super(buf, value, offset, byteLength)
  }

  syncCall () {
    return (buf, value, offset, byteLength) => {
      return buf.writeIntLE(value, offset, byteLength)
    }
  }
}

module.exports = WrittenIntLE
