'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  AllocatedUnsafeBuffer
} = require('./../index');

new Assertion(
  new Is(
    new AllocatedUnsafeBuffer(10), Buffer
  )
).call();
