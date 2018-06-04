'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
