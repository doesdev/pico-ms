'use strict'

const { runTests, start, finish, test } = require('mvt')
const picoMs = require('./index')
const ms = 3600000

runTests(async () => {
  start(`Testing my pico-ms`)

  test('seconds string parses as expected', () => {
    test('3600s', ms, picoMs('3600s'))
    test('3600 sec', ms, picoMs('3600 sec'))
    test('3600 seconds', ms, picoMs('3600 seconds'))
    return true
  })

  test('minutes string parses as expected', () => {
    test('60m', ms, picoMs('60m'))
    test('60 mins', ms, picoMs('60 mins'))
    test('60 minutes', ms, picoMs('60 minutes'))
    return true
  })

  test('hours string parses as expected', () => {
    test('1h', ms, picoMs('1h'))
    test('1hr', ms, picoMs('1hr'))
    test('1 hour', ms, picoMs('1 hour'))
    return true
  })

  test('days string parses as expected', () => {
    const daysMs = 432000000
    test(`${1 / 24} days`, ms, picoMs(`${1 / 24} days`))
    test('5d', daysMs, picoMs('5d'))
    test('5 days', daysMs, picoMs('5 days'))
    return true
  })

  test('raw string or number returns as ms number', (assert) => {
    test(`3600000 as integer`, ms, picoMs(3600000))
    test(`3600000`, ms, picoMs('3600000'))
    return true
  })

  finish()
})
