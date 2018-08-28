'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadUInt8
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadUInt8(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
