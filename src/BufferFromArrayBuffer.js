'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class BufferFromArrayBuffer extends AsyncObject {

  constructor(arrayBuffer, byteOffset, length) {
    super(arrayBuffer, byteOffset || 0, length || arrayBuffer.length - byteOffset);
  }

  definedSyncCall() {
    return Buffer.from;
  }

}

module.exports = BufferFromArrayBuffer;
