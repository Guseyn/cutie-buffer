'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsIncluded extends AsyncObject {

  constructor(buf, value, byteOffset, encoding) {
    super(buf, value, byteOffset || 0, encoding || 'utf8');
  }

  definedSyncCall() {
    return (buf, value, byteOffset, encoding) => {
      return buf.includes(value, byteOffset, encoding);
    }
  }

}

module.exports = IsIncluded;
