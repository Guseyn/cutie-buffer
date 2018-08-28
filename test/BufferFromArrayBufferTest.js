'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  BufferFromArrayBuffer
} = require('./../index');

new Assertion(
  new Is(
    new BufferFromArrayBuffer(
      new ArrayBuffer(10)
    ), Buffer
  )
).call();
