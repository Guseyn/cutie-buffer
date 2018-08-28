'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadDoubleBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadDoubleBE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
