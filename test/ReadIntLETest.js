'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadIntLE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadIntLE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
