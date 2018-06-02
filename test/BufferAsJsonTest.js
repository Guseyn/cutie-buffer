'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  AllocatedUnsafeBuffer,
  BufferAsJSON
} = require('./../index');

new Assertion(
  new Is(
    new BufferAsJSON(
      new AllocatedUnsafeBuffer(10)
    ), JSON
  )
)
