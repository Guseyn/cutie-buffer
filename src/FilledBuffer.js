'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class FilledBuffer extends AsyncObject {

  constructor(buf, value, offset, end, encoding) {
    super(buf, value, offset || 0, end || buf.length, encoding || 'utf8');
  }

  definedSyncCall() {
    return (buf, value, offset, end, encoding) => {
      return buf.equals(value, offset, end, encoding);
    }
  }

}

module.exports = FilledBuffer;
