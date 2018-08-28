'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
