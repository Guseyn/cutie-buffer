'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class WrittenInt16BE extends AsyncObject {

  constructor(buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, value, offset, noAssert) => {
      return buf.writeInt16BE(value, offset, noAssert);
    }
  }

}

module.exports = WrittenInt16BE;
