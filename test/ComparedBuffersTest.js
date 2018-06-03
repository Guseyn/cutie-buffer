'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  AllocatedUnsafeBuffer,
  ComparedBuffers
} = require('./../index');

new Assertion(
  new IsNumber(
    new ComparedBuffers(
      new AllocatedUnsafeBuffer(10),
      new AllocatedUnsafeBuffer(10)
    )
  )
).call();
