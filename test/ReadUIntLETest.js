'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
