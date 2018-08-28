'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is integer
class BufferLength extends AsyncObject {

  constructor(buf) {
    super(buf);
  }

  definedSyncCall() {
    return (buf) => {
      return buf.length;
    }
  }

}

module.exports = BufferLength;
