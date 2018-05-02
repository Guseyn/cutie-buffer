'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class Swapped64Buffer extends AsyncObject {

  constructor(buffer) {
    super(buffer);
  }

  definedSyncCall() {
    return (buffer) => {
      return buf.swap64();
    }
  }

}

module.exports = Swapped64Buffer;
