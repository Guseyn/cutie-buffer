'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  IndexOf
} = require('./../index');

new Assertion(
  new IsNumber(
    new IndexOf(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
