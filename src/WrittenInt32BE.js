'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class WrittenInt32BE extends AsyncObject {
  constructor (buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false)
  }

  syncCall () {
    return (buf, value, offset, noAssert) => {
      return buf.writeInt32BE(value, offset, noAssert)
    }
  }
}

module.exports = WrittenInt32BE
