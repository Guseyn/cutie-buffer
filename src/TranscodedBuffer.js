'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const buffer = require('buffer');

// Represented result is buffer
class TranscodedBuffer extends AsyncObject {

  constructor(source, fromEnc, toEnc) {
    super(source, fromEnc, toEnc);
  }

  definedSyncCall() {
    return (source, fromEnc, toEnc) => {
      return buffer.transcode(source, fromEnc, toEnc);
    }
  }

}

module.exports = TranscodedBuffer;
