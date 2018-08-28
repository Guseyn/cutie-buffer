'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class WrittenBuffer extends AsyncObject {

  constructor(buf, string, offset, length, encoding) {
    super(buf, string, offset || 0, length || buf.length - offset, encoding || 'utf8');
  }

  definedSyncCall() {
    return (buf, string, offset, length, encoding) => {
      buf.write(string, offset, length, encoding);
      return buf;
    }
  }

}

module.exports = WrittenBuffer;
