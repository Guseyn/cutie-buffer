'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  WrittenUInt32LE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenUInt32LE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
