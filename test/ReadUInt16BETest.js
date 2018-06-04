'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  ReadUInt16BE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadUInt16BE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
