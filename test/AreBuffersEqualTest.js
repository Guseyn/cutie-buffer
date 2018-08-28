'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsBoolean
} = require('@cuties/is');
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
