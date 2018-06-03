'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
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
