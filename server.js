var http = require('./lib/http')
var router = require('./lib/router')
var fs = require('fs')

http.serve(router.dispatch)

