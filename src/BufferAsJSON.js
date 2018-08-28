'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is json
class BufferAsJSON extends AsyncObject {

  constructor(buf) {
    super(buf);
  }

  definedSyncCall() {
    return (buf) => {
      return buf.toJSON();
    }
  }

}

module.exports = BufferAsJSON;
