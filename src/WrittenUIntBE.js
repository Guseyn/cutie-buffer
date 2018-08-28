'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class WrittenUIntBE extends AsyncObject {

  constructor(buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, value, offset, noAssert) => {
      return buf.writeUIntBE(value, offset, noAssert);
    }
  }

}

module.exports = WrittenUIntBE;
