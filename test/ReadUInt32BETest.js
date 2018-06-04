'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
