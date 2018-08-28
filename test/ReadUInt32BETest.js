'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadUInt32BE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadUInt32BE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
