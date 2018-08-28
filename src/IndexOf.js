'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is integer
class IndexOf extends AsyncObject {

  constructor(buf, value, byteOffset, encoding) {
    super(buf, value, byteOffset || 0, encoding || 'utf8');
  }

  definedSyncCall() {
    return (buf, value, byteOffset, encoding) => {
      return buf.indexOf(value, byteOffset, encoding);
    }
  }

}

module.exports = IndexOf;
