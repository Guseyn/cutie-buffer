'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  IsIncluded,
  FilledBuffer
} = require('./../index');

new Assertion(
  new IsIncluded(
    new FilledBuffer(
      new AllocatedUnsafeBuffer(10), 12
    ), 12
  )
).call();
