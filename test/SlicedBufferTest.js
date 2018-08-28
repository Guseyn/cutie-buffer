'use strict'

const {
  Is
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
