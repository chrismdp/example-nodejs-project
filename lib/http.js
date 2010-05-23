var http = require('http')

exports.serve = function(handleRequest) {
  http.createServer(function (request, response) {
    handleRequest(request, response)
  }).listen(parseInt(process.env.PORT) || 8001)
}

