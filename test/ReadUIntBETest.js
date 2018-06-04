'use strict'

const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Assertion
} = require('@guseyn/cutie-assert');
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
