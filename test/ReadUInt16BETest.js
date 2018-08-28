'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  ReadUInt16BE
} = require('./../index');

new Assertion(
  new IsNumber(
    new ReadUInt16BE(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
