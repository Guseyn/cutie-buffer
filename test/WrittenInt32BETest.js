'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  WrittenInt32BE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenInt32BE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
