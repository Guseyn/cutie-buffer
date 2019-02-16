'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class ReadUIntBE extends AsyncObject {
  constructor (buf, offset, byteLength, noAssert) {
    super(buf, offset, byteLength, noAssert || false)
  }

  definedSyncCall () {
    return (buf, offset, byteLength, noAssert) => {
      return buf.readUIntBE(offset, byteLength, noAssert)
    }
  }
}

module.exports = ReadUIntBE
