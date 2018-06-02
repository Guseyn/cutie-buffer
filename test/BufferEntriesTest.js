'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  AllocatedUnsafeBuffer,
  BufferEntries
} = require('./../index');

// TODO: we need cutie-iterator
/*new Assertion(
  new Is(
    new BufferEntries(
      new AllocatedUnsafeBuffer(10)
    )
  )
).call();*/
