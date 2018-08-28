'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  AllocatedBuffer
} = require('./../index');

new Assertion(
  new Is(
    new AllocatedBuffer(10), Buffer
  )
).call();
