'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadUIntLE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadUIntLE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
