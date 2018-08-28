'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  StrictEqualAssertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  IteratorProtocol
} = require('@cuties/iterator');
const {
  AllocatedUnsafeBuffer,
  BufferKeys
} = require('./../index');

new BufferKeys(
  new AllocatedUnsafeBuffer(10)
).as('iterator').after(
  new StrictEqualAssertion(
    as('iterator'),
    new IteratorProtocol(
      as('iterator')
    )
  )
).call();
