'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
