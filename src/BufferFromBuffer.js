'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class BufferFromBuffer extends AsyncObject {

  constructor(buffer) {
    super(buffer);
  }

  definedSyncCall() {
    return Buffer.from;
  }

}

module.exports = BufferFromBuffer;
