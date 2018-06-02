'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  AllocatedUnsafeSlowBuffer
} = require('./../index');

new Assertion(
  new Is(
    new AllocatedUnsafeSlowBuffer(10), Buffer
  )
).call();
