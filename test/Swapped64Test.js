'use strict'

const {
  Is
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  Swapped64Buffer
} = require('./../index');

new Assertion(
  new Is(
    new Swapped64Buffer(
      new AllocatedUnsafeBuffer(40)
    ), Buffer
  )
).call();
