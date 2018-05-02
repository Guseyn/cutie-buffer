'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class Swapped16Buffer extends AsyncObject {

  constructor(buffer) {
    super(buffer);
  }

  definedSyncCall() {
    return (buffer) => {
      return buf.swap16();
    }
  }

}

module.exports = Swapped16Buffer;
