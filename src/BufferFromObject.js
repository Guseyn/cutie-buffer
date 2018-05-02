'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class BufferFromObject extends AsyncObject {

  constructor(object, offsetOrEncoding, length) {
    super(object, offsetOrEncoding, length);
  }

  definedSyncCall() {
    return Buffer.from;
  }

}

module.exports = BufferFromObject;
