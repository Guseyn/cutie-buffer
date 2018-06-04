'use strict'

const {
  Is
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  WrittenBuffer
} = require('./../index');

new Assertion(
  new Is(
    new WrittenBuffer(
      new AllocatedUnsafeBuffer(10),
      'string'
    ), Buffer
  )
).call();
