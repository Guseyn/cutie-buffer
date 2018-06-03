'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedUnsafeBuffer,
  CopiedBuffer,
  AreBuffersEqual
} = require('./../index');

new AllocatedUnsafeBuffer(10)
  .as('buf')
  .after(
    new Assertion(
      new AreBuffersEqual(
        as('buf'),
        new CopiedBuffer(as('buf'), 
        new AllocatedUnsafeBuffer(10))
      )
    )
  ).call();
