'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  IsBuffer
} = require('./../index');

new Assertion(
  new IsBuffer(
    new AllocatedUnsafeBuffer(10)
  )
).call();
