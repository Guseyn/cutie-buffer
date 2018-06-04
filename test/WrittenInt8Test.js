'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenInt8
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenInt8(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
