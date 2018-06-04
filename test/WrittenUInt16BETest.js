'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenUInt16BE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenUInt16BE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
