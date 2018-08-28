'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

class AreBuffersEqual extends AsyncObject {

  constructor(buf1, buf2) {
    super(buf1, buf2);
  }

  definedSyncCall() {
    return (buf1, buf2) => {
      return buf1.equals(buf2);
    }
  }

}

module.exports = AreBuffersEqual;
