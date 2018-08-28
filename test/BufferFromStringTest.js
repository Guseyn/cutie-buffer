'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
