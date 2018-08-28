'use strict'

const {
  Is
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
