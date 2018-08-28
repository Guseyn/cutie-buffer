'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
