'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class ReadDoubleBE extends AsyncObject {

  constructor(buf, offset, noAssert) {
    super(buf, offset, noAssert || false);
  }

  definedSyncCall() {
    return (buf, offset, noAssert) => {
      return buf.readDoubleBE(offset, noAssert);
    }
  }

}

module.exports = ReadDoubleBE;
