'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class BufferFromArray extends AsyncObject {

  constructor(array) {
    super(array);
  }

  definedSyncCall() {
    return Buffer.from;
  }

}

module.exports = BufferFromArray;
