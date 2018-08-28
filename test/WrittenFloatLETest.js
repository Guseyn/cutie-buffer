'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  WrittenFloatLE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenFloatLE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
