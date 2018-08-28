'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
