'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  ReadDoubleBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadDoubleBE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
