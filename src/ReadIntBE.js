'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class ReadIntBE extends AsyncObject {

  constructor(buf, byteLength, offset, noAssert) {
    super(buf, byteLength, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, byteLength, offset, noAssert) => {
      return buf.readIntBE(offset, byteLength, noAssert);
    }
  }

}

module.exports = ReadIntBE;
