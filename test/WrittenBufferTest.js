'use strict'

const {
  Is
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
