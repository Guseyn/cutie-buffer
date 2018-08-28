'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class StringFromBuffer extends AsyncObject {

  constructor(buf, encoding, start, end) {
    super(buf, encoding || 'utf8', start || 0, end || buf.length);
  }

  definedSyncCall() {
    return (buf, encoding, start, end) => {
      return buf.toString(encoding, start, end);
    }
  }

}

module.exports = StringFromBuffer;
