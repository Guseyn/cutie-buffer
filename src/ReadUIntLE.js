'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class ReadUIntLE extends AsyncObject {
  constructor (buf, offset, byteLength) {
    super(buf, offset, byteLength)
  }

  syncCall () {
    return (buf, offset, byteLength) => {
      return buf.readUIntLE(offset, byteLength)
    }
  }
}

module.exports = ReadUIntLE
