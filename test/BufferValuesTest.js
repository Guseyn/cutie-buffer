'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  StrictEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  IteratorProtocol
} = require('@guseyn/cutie-iterator');
const {
  AllocatedUnsafeBuffer,
  BufferValues
} = require('./../index');

new BufferValues(
  new AllocatedUnsafeBuffer(10)
).as('iterator').after(
  new StrictEqualAssertion(
    as('iterator'),
    new IteratorProtocol(
      as('iterator')
    )
  )
).call();
