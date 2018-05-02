'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is iterator [index]
class BufferKeys extends AsyncObject {

  constructor(buf) {
    super(buffer);
  }

  definedSyncCall() {
    return (buf) => {
      return buf.keys();
    }
  }

}

module.exports = BufferKeys;
