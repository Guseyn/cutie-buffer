'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class SlicedBuffer extends AsyncObject {

  constructor(buf, start, end) {
    super(buf, start || 0, end || buf.length);
  }

  definedSyncCall() {
    return (buf, start, end) => {
      return buf.slice(start, end);
    }
  }

}

module.exports = SlicedBuffer;
