'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class IsBuffer extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return Buffer.isBuffer;
  }

}

module.exports = IsBuffer;
