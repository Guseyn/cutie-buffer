'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  WrittenDoubleLE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenDoubleLE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
