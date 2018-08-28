'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer[]
class ArrayOfBuffers extends AsyncObject {

  constructor(...buffers) {
    super(...buffers);
  }

  definedSyncCall() {
    return (...buffers) => {
      return buffers;
    }
  }

}

module.exports = ArrayOfBuffers;
