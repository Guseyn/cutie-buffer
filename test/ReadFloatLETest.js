'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  ReadFloatLE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadFloatLE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
