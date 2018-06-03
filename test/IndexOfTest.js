'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  IndexOf
} = require('./../index');

new Assertion(
  new IsNumber(
    new IndexOf(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
