router = require('../lib/router')
util = require('util')
assert = require('assert')
assert.contains = function(expected, actual) {
  actual = actual || ""
  if(actual.indexOf(expected) == -1) {
    util.debug("Expected:\n\n<"+actual+">\n\nto contain <"+expected+">")
  }
}
