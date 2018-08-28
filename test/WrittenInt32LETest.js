'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
