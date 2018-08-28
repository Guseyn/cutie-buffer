'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
