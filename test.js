import test from 'mvt'
import picoMs from './index.js'

const ms = 3600000

test('seconds string parses as expected', (assert) => {
  assert.is(picoMs('3600s'), ms)
  assert.is(picoMs('3600 sec'), ms)
  assert.is(picoMs('3600 seconds'), ms)
})

test('minutes string parses as expected', (assert) => {
  assert.is(picoMs('60m'), ms)
  assert.is(picoMs('60 mins'), ms)
  assert.is(picoMs('60 minutes'), ms)
})

test('hours string parses as expected', (assert) => {
  assert.is(picoMs('1h'), ms)
  assert.is(picoMs('1hr'), ms)
  assert.is(picoMs('1 hour'), ms)
})

test('days string parses as expected', (assert) => {
  const daysMs = 432000000
  assert.is(picoMs(`${1 / 24} days`), ms)
  assert.is(picoMs('5d'), daysMs)
  assert.is(picoMs('5 days'), daysMs)
})

test('raw string or number returns as ms number', (assert) => {
  assert.is(picoMs(3600000), ms)
  assert.is(picoMs('3600000'), ms)
})
