'use strict'

const {
  Is
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  SlicedBuffer
} = require('./../index');

new Assertion(
  new Is(
    new SlicedBuffer(
      new AllocatedUnsafeBuffer(10), 1, 4
    ), Buffer
  )
).call();
