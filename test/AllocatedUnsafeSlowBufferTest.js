'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  AllocatedUnsafeSlowBuffer
} = require('./../index');

new Assertion(
  new Is(
    new AllocatedUnsafeSlowBuffer(10), Buffer
  )
).call();
