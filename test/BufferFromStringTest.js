'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  BufferFromString
} = require('./../index');

new Assertion(
  new Is(
    new BufferFromString(
      'string'
    ), Buffer
  )
).call();
