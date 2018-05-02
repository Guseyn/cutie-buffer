'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is ArrayBuffer
class ArrayBuffer extends AsyncObject {

  constructor(buffer) {
    super(buffer);
  }

  definedSyncCall() {
    return (buffer) => {
      return buffer.buffer;
    }
  }

}

module.exports = IsBuffer;
