'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class WrittenInt8 extends AsyncObject {

  constructor(buf, value, offset, noAssert) {
    super(buf, value, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, value, offset, noAssert) => {
      return buf.writeInt8(value, offset, noAssert);
    }
  }

}

module.exports = WrittenInt8;
