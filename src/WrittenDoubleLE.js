'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class WrittenDoubleLE extends AsyncObject {
  constructor (buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false)
  }

  syncCall () {
    return (buf, value, offset, noAssert) => {
      return buf.writeDoubleLE(value, offset, noAssert)
    }
  }
}

module.exports = WrittenDoubleLE
