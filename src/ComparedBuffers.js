'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is integer
class ComparedBuffers extends AsyncObject {

  constructor(source, target, targetStart, targetEnd, sourceStart, sourceEnd) {
    super(
      source, target,
      targetStart || 0, targetEnd || target.length,
      sourceStart || 0, sourceEnd || source.length
    );
  }

  definedSyncCall() {
    return (source, target, targetStart, targetEnd, sourceStart, sourceEnd) => {
      return source.compare(target, targetStart, targetEnd, sourceStart, sourceEnd);
    }
  }

}

module.exports = ComparedBuffers;
