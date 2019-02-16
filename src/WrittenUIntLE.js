'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class WrittenUIntLE extends AsyncObject {
  constructor (buf, value, offset, byteLength) {
    super(buf, value, offset, byteLength)
  }

  definedSyncCall () {
    return (buf, value, offset, byteLength) => {
      return buf.writeUIntLE(value, offset, byteLength)
    }
  }
}

module.exports = WrittenUIntLE
