'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
