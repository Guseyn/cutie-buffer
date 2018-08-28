'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
