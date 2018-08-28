'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class ReadIntLE extends AsyncObject {

  constructor(buf, byteLength, offset, noAssert) {
    super(buf, byteLength, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, byteLength, offset, noAssert) => {
      return buf.readIntLE(offset, byteLength, noAssert);
    }
  }

}

module.exports = ReadIntLE;
