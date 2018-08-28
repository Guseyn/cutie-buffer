'use strict'

const {
  Is
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
