'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class Swapped32Buffer extends AsyncObject {

  constructor(buffer) {
    super(buffer);
  }

  definedSyncCall() {
    return (buffer) => {
      return buf.swap32();
    }
  }

}

module.exports = Swapped32Buffer;
