'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class WrittenUInt8 extends AsyncObject {

  constructor(buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, value, offset, noAssert) => {
      return buf.writeUInt8(value, offset, noAssert);
    }
  }

}

module.exports = WrittenUInt8;
