'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsEncoding extends AsyncObject {

  constructor(encoding) {
    super(encoding);
  }

  definedSyncCall() {
    return Buffer.isEncoding;
  }

}

module.exports = IsEncoding;
