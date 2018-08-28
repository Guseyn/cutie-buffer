'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  WrittenUInt8
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenUInt8(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
