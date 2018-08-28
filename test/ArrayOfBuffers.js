'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  AllocatedUnsafeBuffer,
  ArrayOfBuffers
} = require('./../index');

new Assertion(
  new Is(
    new ArrayOfBuffers(
      new AllocatedUnsafeBuffer(10),
      new AllocatedUnsafeBuffer(10),
      new AllocatedUnsafeBuffer(10)
    ), Array
  )
)
