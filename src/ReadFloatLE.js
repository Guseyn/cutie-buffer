'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class ReadFloatLE extends AsyncObject {

  constructor(buffer, offset, noAssert) {
    super(buffer, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buffer, offset, noAssert) => {
      return buffer.readFloatLE(offset, noAssert);
    }
  }

}

module.exports = ReadFloatLE;
