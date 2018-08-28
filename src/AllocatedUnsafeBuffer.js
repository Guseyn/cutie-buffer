'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class AllocatedUnsafeBuffer extends AsyncObject {

  constructor(size) {
    super(size);
  }

  definedSyncCall() {
    return Buffer.allocUnsafe;
  }

}

module.exports = AllocatedUnsafeBuffer;
