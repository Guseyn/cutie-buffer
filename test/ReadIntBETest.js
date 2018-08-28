'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadIntBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadIntBE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
