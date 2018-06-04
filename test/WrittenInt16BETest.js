'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenInt16BE
} = require('./../index');

new Assertion(
  new IsNumber(
    new WrittenInt16BE(
      new AllocatedUnsafeBuffer(10), 1, 1
    )
  )
).call();
