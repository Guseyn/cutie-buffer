'use strict'

const {
  Is
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
