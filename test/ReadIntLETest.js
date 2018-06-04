'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
