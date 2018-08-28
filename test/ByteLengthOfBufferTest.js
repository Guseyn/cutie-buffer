'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ByteLengthOfBuffer
} = require('./../index');

new StrictEqualAssertion(
  new ByteLengthOfBuffer(
    new AllocatedUnsafeBuffer(10)
  ), 10
).call();
