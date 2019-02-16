'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  AllocatedUnsafeBuffer,
  BufferAsJSON
} = require('./../index')

new Assertion(
  new IsObject(
    new BufferAsJSON(
      new AllocatedUnsafeBuffer(10)
    )
  )
).call()
