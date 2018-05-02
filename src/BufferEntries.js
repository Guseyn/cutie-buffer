'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is iterator [index, byte]
class BufferEntries extends AsyncObject {

  constructor(buffer) {
    super(buffer);
  }

  definedSyncCall() {
    return (buffer) => {
      return buffer.entries();
    }
  }

}

module.exports = BufferEntries;
