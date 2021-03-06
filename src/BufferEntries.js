'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is iterator [index, byte]
class BufferEntries extends AsyncObject {
  constructor (buf) {
    super(buf)
  }

  syncCall () {
    return (buf) => {
      return buf.entries()
    }
  }
}

module.exports = BufferEntries
