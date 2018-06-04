'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenInt32LE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenInt32LE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
