'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  AllocatedUnsafeBuffer,
  ArrayBufferOfBuffer
} = require('./../index');

new Assertion(
  new Is(
    new ArrayBufferOfBuffer(
      new AllocatedUnsafeBuffer(10), ArrayBuffer
    )
  )
)
