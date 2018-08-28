'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class AllocatedBuffer extends AsyncObject {

  constructor(size, fill, encoding) {
    super(size, fill || 0, encoding || 'utf8');
  }

  definedSyncCall() {
    return Buffer.alloc;
  }

}

module.exports = AllocatedBuffer;
