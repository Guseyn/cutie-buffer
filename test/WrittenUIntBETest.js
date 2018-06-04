'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenUIntBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenUIntBE(
      new AllocatedUnsafeBuffer(10), 0x1234567890ab, 0, 6
    )
  )
).call();
