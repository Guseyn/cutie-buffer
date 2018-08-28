'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
