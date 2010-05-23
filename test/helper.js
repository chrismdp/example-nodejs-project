router = require('../lib/router')
sys = require("sys")
assert = require('assert')
assert.contains = function(expected, actual) {
  actual = actual || ""
  if(actual.indexOf(expected) == -1) {
    sys.debug("Expected:\n\n<"+actual+">\n\nto contain <"+expected+">")
  }
}
