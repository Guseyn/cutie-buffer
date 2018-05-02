'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class ReadInt16BE extends AsyncObject {

  constructor(buf, offset, noAssert) {
    super(buf, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, offset, noAssert) => {
      return buf.readInt16BE(offset, noAssert);
    }
  }

}

module.exports = ReadInt16BE;
