'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class ReadDoubleLE extends AsyncObject {

  constructor(buf, offset, noAssert) {
    super(buf, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, offset, noAssert) => {
      return buf.readDoubleLE(offset, noAssert);
    }
  }

}

module.exports = ReadDoubleLE;
