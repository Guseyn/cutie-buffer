'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

class FilledBuffer extends AsyncObject {

  constructor(buf, value, offset, end, encoding) {
    super(buf, value, offset || 0, end || buf.length, encoding || 'utf8');
  }

  definedSyncCall() {
    return (buf, value, offset, end, encoding) => {
      return buf.fill(value, offset, end, encoding);
    }
  }

}

module.exports = FilledBuffer;
