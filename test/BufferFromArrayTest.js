'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  BufferFromArray
} = require('./../index');

new Assertion(
  new Is(
    new BufferFromArray(
      [1, 2, 3]
    ), Buffer
  )
).call();
