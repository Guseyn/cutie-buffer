'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class ReadUInt32BE extends AsyncObject {
  constructor (buf, offset, noAssert) {
    super(buf, offset, noAssert || false)
  }

  syncCall () {
    return (buf, offset, noAssert) => {
      return buf.readUInt32BE(offset, noAssert)
    }
  }
}

module.exports = ReadUInt32BE
