'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class WrittenInt32LE extends AsyncObject {

  constructor(buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, value, offset, noAssert) => {
      return buf.writeInt32LE(value, offset, noAssert);
    }
  }

}

module.exports = WrittenInt32LE;
