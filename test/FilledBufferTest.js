'use strict'

const {
  Is
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  FilledBuffer
} = require('./../index');

new Assertion(
  new Is(
    new FilledBuffer(
      new AllocatedUnsafeBuffer(10), 1
    ), Buffer
  )
).call();
