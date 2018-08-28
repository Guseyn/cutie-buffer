'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
