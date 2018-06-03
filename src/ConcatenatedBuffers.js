'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class ConcatenatedBuffers extends AsyncObject {

  constructor(buffers, totalLength) {
    super(buffers, totalLength);
  }

  definedSyncCall() {
    return Buffer.concat;
  }

}

module.exports = ConcatenatedBuffers;
