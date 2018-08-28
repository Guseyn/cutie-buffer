'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class BufferFromBuffer extends AsyncObject {

  constructor(buf) {
    super(buf);
  }

  definedSyncCall() {
    return Buffer.from;
  }

}

module.exports = BufferFromBuffer;
