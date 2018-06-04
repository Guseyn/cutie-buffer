'use strict'

const {
  Is
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  Swapped16Buffer
} = require('./../index');

new Assertion(
  new Is(
    new Swapped16Buffer(
      new AllocatedUnsafeBuffer(10)
    ), Buffer
  )
).call();
