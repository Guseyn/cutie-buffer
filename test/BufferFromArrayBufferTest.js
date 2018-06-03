'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
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
