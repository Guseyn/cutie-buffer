'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class BufferFromString extends AsyncObject {

  constructor(string, encoding) {
    super(string, encoding || 'utf8');
  }

  definedSyncCall() {
    return Buffer.from;
  }

}

module.exports = BufferFromString;
