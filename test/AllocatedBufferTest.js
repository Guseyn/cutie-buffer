'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  AllocatedBuffer
} = require('./../index');

new Assertion(
  new Is(
    new AllocatedBuffer(10), Buffer
  )
).call();
