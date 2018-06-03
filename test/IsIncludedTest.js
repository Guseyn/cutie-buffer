'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
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
