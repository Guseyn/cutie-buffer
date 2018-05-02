'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is ArrayBuffer
class ArrayBuffer extends AsyncObject {

  constructor(buf) {
    super(buf);
  }

  definedSyncCall() {
    return (buf) => {
      return buf.buffer;
    }
  }

}

module.exports = IsBuffer;
