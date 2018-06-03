'use strict'

const {
  StrictEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  BufferLength
} = require('./../index');

new StrictEqualAssertion(
  new BufferLength(
    new AllocatedUnsafeBuffer(10)
  ), 10
).call();
