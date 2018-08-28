'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadUInt32LE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadUInt32LE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
