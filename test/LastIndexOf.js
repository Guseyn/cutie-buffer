'use strict'

const {
  IsNumber
} = require('@cuties/is');
const {
  Assertion
} = require('@cuties/assert');
const {
  AllocatedUnsafeBuffer,
  LastIndexOf
} = require('./../index');

new Assertion(
  new IsNumber(
    new LastIndexOf(
      new AllocatedUnsafeBuffer(10), 1
    )
  )
).call();
