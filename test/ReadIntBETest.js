'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  ReadIntBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadIntBE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
