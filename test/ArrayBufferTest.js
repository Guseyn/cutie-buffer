'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
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
