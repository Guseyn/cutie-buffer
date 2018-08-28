'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
