var http = require('./http')
var fs = require('fs')
var sys = require("sys")

var haml = require('../vendor/haml/lib/haml')
var sass = require('../vendor/sass/lib/sass')

exports.dispatch = function (request, response) {
  if (request.url == '/') {
    response.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile("./views/index.html.haml", "utf8", function(error, data) {
      if (error) {
        var msg = "ERROR: "+sys.inspect(error);
        sys.debug(msg)
        response.write("<pre>"+msg+"</pre>", "utf8")
      } else {
        response.write(haml.render(data), "utf8")
      }
      response.end()
    })
    return
  }
}
