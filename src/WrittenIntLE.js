'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class WrittenIntLE extends AsyncObject {

  constructor(buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, value, offset, noAssert) => {
      return buf.writeIntLE(value, offset, noAssert);
    }
  }

}

module.exports = WrittenIntLE;
