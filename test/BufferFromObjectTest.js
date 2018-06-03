'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
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
