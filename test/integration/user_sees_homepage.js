require('../helper')

function Response(test_function) {
  var self = this
  self._data = ""
  self._headers = {}
  self.writeHead = function(status, headers) {
    self._headers = headers
    self._headers['status'] = status.toString()
  }
  self.write = function(data) {
    if (data) {
      self._data += data
    }
  }
  self.end = function(data, encoding) {
    self.write(data)
    test_function(self._headers, self._data)
  }
}

Request = function(method, url) {
  this.method = method
  this.url = url
}

// Test: user views front page
router.dispatch(new Request("GET", "/"), new Response(function(headers, data) {
  assert.contains("200", headers['status'])
  assert.contains("Hello, world!", data)
}));
