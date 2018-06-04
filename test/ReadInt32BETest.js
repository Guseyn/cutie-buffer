'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
