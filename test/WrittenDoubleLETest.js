'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
