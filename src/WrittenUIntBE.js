'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class WrittenUIntBE extends AsyncObject {
  constructor (buf, value, offset, byteLength) {
    super(buf, value, offset, byteLength)
  }

  syncCall () {
    return (buf, value, offset, byteLength) => {
      return buf.writeUIntBE(value, offset, byteLength)
    }
  }
}

module.exports = WrittenUIntBE
