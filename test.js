'use strict'

// setup
import test from 'ava'
import picoMs from './index'
const ms = 3600000

test('seconds string parses as expected', (assert) => {
  assert.is(ms, picoMs('3600s'))
  assert.is(ms, picoMs('3600 sec'))
  assert.is(ms, picoMs('3600 seconds'))
})

test('minutes string parses as expected', (assert) => {
  assert.is(ms, picoMs('60m'))
  assert.is(ms, picoMs('60 mins'))
  assert.is(ms, picoMs('60 minutes'))
})

test('hours string parses as expected', (assert) => {
  assert.is(ms, picoMs('1h'))
  assert.is(ms, picoMs('1hr'))
  assert.is(ms, picoMs('1 hour'))
})

test('days string parses as expected', (assert) => {
  assert.is(ms, picoMs(`${1 / 24} days`))
  let daysMs = 432000000
  assert.is(daysMs, picoMs('5d'))
  assert.is(daysMs, picoMs('5 days'))
})

test('raw string or number returns as ms number', (assert) => {
  assert.is(ms, picoMs(3600000))
  assert.is(ms, picoMs('3600000'))
})
