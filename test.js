'use strict'

// setup
import test from 'ava'
import picoMs from './index'
const ms = 3600000

test('that isht is correct', (assert) => {
  assert.is(ms, picoMs('3600s'))
  assert.is(ms, picoMs('3600 sec'))
  assert.is(ms, picoMs('3600 seconds'))
  assert.is(ms, picoMs('60m'))
  assert.is(ms, picoMs('60 mins'))
  assert.is(ms, picoMs('60 minutes'))
  assert.is(ms, picoMs('1h'))
  assert.is(ms, picoMs('1hr'))
  assert.is(ms, picoMs('1 hour'))
  assert.is(ms, picoMs(3600000))
  assert.is(ms, picoMs('3600000'))
})
