'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenFloatBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenFloatBE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
