'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class WrittenUInt16BE extends AsyncObject {

  constructor(buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, value, offset, noAssert) => {
      return buf.writeUInt16BE(value, offset, noAssert);
    }
  }

}

module.exports = WrittenUInt16BE;
