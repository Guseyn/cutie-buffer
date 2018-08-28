'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is iterator [index]
class BufferKeys extends AsyncObject {

  constructor(buf) {
    super(buf);
  }

  definedSyncCall() {
    return (buf) => {
      return buf.keys();
    }
  }

}

module.exports = BufferKeys;
