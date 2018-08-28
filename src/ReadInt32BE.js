'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class ReadInt32BE extends AsyncObject {

  constructor(buf, offset, noAssert) {
    super(buf, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, offset, noAssert) => {
      return buf.readInt32BE(offset, noAssert);
    }
  }

}

module.exports = ReadInt32BE;
