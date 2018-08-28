'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadInt32BE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadInt32BE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
