'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
