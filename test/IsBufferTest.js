'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  IsBuffer
} = require('./../index');

new Assertion(
  new IsBuffer(
    new AllocatedUnsafeBuffer(10)
  )
).call();
