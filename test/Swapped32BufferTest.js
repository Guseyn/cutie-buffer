'use strict'

const {
  Is
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  Swapped32Buffer
} = require('./../index');

new Assertion(
  new Is(
    new Swapped32Buffer(
      new AllocatedUnsafeBuffer(20)
    ), Buffer
  )
).call();
