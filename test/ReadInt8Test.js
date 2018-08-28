'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadInt8
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadInt8(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
