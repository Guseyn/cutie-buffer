'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsEncoding
} = require('./../index');

new Assertion(
  new IsEncoding(
    'utf8'
  )
).call();
