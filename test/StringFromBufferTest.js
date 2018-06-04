'use strict'

const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
