'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenDoubleBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenDoubleBE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
