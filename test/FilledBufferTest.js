'use strict'

const {
  Is
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
