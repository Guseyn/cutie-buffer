'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class CopiedBuffer extends AsyncObject {

  constructor(source, target, targetStart, sourceStart, sourceEnd) {
    super(
      source, target,
      targetStart || 0, sourceStart || 0,
      sourceEnd || source.length
    );
  }

  definedSyncCall() {
    return (source, target, targetStart, sourceStart, sourceEnd) => {
      source.copy(target, targetStart, targetEnd, sourceStart, sourceEnd);
      return target;
    }
  }

}

module.exports = CopiedBuffer;
