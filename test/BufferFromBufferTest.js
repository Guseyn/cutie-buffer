'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  AllocatedUnsafeBuffer,
  BufferFromBuffer
} = require('./../index');

new Assertion(
  new Is(
    new BufferFromBuffer(
      new AllocatedUnsafeBuffer(10)
    ), Buffer
  )
).call();
