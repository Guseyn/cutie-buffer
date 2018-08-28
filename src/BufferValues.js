'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is iterator [byte]
class BufferValues extends AsyncObject {

  constructor(buf) {
    super(buf);
  }

  definedSyncCall() {
    return (buf) => {
      return buf.values();
    }
  }

}

module.exports = BufferValues;
