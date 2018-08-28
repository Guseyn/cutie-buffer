'use strict'

const {
  IsString
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  StringFromBuffer
} = require('./../index');

new Assertion(
  new IsString(
    new StringFromBuffer(
      new AllocatedUnsafeBuffer(10)
    )
  )
).call();
