'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  AllocatedUnsafeBuffer,
  ConcatenatedBuffers,
  ArrayOfBuffers
} = require('./../index');

new Assertion(
  new Is(
    new ConcatenatedBuffers(
      new ArrayOfBuffers(
        new AllocatedUnsafeBuffer(10),
        new AllocatedUnsafeBuffer(10),
        new AllocatedUnsafeBuffer(10)
      )
    ), Buffer
  )
).call();
