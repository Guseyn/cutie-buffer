'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class FilledBuffer extends AsyncObject {

  constructor(buffer, value, offset, end, encoding) {
    super(buffer, value, offset || 0, end || buffer.length, encoding || 'utf8');
  }

  definedSyncCall() {
    return (buffer, value, offset, end, encoding) => {
      return buffer.equals(value, offset, end, encoding);
    }
  }

}

module.exports = FilledBuffer;
