'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  ReadFloatBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadFloatBE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
