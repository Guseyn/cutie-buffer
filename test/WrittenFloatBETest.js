'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
