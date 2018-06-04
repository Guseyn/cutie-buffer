'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
