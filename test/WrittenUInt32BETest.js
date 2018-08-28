'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  WrittenUInt32BE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenUInt32BE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
