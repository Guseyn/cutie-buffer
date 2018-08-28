'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadInt32LE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadInt32LE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
