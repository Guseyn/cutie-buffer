'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is iterator [byte]
class BufferValues extends AsyncObject {
  constructor (buf) {
    super(buf)
  }

  syncCall () {
    return (buf) => {
      return buf.values()
    }
  }
}

module.exports = BufferValues
