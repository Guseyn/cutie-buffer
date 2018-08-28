'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadUIntBE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadUIntBE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
