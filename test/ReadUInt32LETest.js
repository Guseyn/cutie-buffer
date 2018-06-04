'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
