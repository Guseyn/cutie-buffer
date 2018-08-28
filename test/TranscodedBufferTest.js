'use strict'

const {
  Is
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
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
