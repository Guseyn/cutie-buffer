'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

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
