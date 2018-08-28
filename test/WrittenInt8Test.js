'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
