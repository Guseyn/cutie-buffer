'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsEncoding
} = require('./../index');

new Assertion(
  new IsEncoding(
    'utf8'
  )
).call();
