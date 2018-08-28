'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class AllocatedUnsafeSlowBuffer extends AsyncObject {

  constructor(size) {
    super(size);
  }

  definedSyncCall() {
    return Buffer.allocUnsafeSlow;
  }

}

module.exports = AllocatedUnsafeSlowBuffer;
