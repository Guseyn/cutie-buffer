'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  BufferFromObject
} = require('./../index');

class Foo {
  [Symbol.toPrimitive]() {
    return 'this is a test';
  }
}

new Assertion(
  new Is(
    new BufferFromObject(
      new Foo(), 'utf8'
    ), Buffer
  )
).call();
