'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class ReadInt16LE extends AsyncObject {

  constructor(buf, offset, noAssert) {
    super(buf, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, offset, noAssert) => {
      return buf.readInt16LE(offset, noAssert);
    }
  }

}

module.exports = ReadInt16LE;
