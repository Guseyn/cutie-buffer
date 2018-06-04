'use strict'

const {
  Is
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  TranscodedBuffer
} = require('./../index');

new Assertion(
  new Is(
    new TranscodedBuffer(
      new AllocatedUnsafeBuffer(10),
      'utf8', 'ascii'
    ), Buffer
  )
).call();
