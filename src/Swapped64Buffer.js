'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class Swapped64Buffer extends AsyncObject {

  constructor(buf) {
    super(buf);
  }

  definedSyncCall() {
    return (buf) => {
      return buf.swap64();
    }
  }

}

module.exports = Swapped64Buffer;
