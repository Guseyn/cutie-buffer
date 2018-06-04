'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenUInt16LE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenUInt16LE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
