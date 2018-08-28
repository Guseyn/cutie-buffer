'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is integer
class LastIndexOf extends AsyncObject {

  constructor(buf, value, byteOffset, encoding) {
    super(buf, value, byteOffset || buf.length - 1, encoding || 'utf8');
  }

  definedSyncCall() {
    return (buf, value, byteOffset, encoding) => {
      return buf.lastIndexOf(value, byteOffset, encoding);
    }
  }

}

module.exports = LastIndexOf;
