'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  LastIndexOf
} = require('./../index');

new Assertion(
  new IsNumber(
    new LastIndexOf(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
