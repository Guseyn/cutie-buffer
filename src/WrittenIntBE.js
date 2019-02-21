'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class WrittenIntBE extends AsyncObject {
  constructor (buf, value, offset, byteLength) {
    super(buf, value, offset, byteLength)
  }

  syncCall () {
    return (buf, value, offset, byteLength) => {
      return buf.writeIntBE(value, offset, byteLength)
    }
  }
}

module.exports = WrittenIntBE
