// @flow

// $FlowFixMe
const config = require('eslint-config-datarockets') // eslint-disable-line
const _isPlainObject = require('lodash/isPlainObject')

it('is an object', () => {
  expect(_isPlainObject(config)).toBeTruthy()
})
