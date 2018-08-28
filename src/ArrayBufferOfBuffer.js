'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is ArrayBuffer
class ArrayBufferOfBuffer extends AsyncObject {

  constructor(buf) {
    super(buf);
  }

  definedSyncCall() {
    return (buf) => {
      return buf.buffer;
    }
  }

}

module.exports = ArrayBufferOfBuffer;
