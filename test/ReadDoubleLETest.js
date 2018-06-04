'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  ReadDoubleLE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadDoubleLE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
