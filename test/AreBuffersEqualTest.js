'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  AllocatedUnsafeBuffer,
  AreBuffersEqual
} = require('./../index');

new Assertion(
  new IsBoolean(
    new AreBuffersEqual(
      new AllocatedUnsafeBuffer(10),
      new AllocatedUnsafeBuffer(10)
    )
  )
).call();
