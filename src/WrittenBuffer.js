'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class WrittenBuffer extends AsyncObject {

  constructor(buf, string, offset, length, encoding) {
    super(buf, string, offset || 0, length || buf.length - offset, encoding || 'utf8');
  }

  definedSyncCall() {
    return (buf, string, offset, length, encoding) => {
      return buf.write(string, offset, length, encoding);
    }
  }

}

module.exports = WrittenBuffer;
