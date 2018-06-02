'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  AllocatedUnsafeBuffer
} = require('./../index');

new Assertion(
  new Is(
    new AllocatedUnsafeBuffer(10), Buffer
  )
).call();
