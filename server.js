var express = require('express')
var app = express()

var path = require('path')

var PORT = 3000
app.use('/assets', express.static('assets'))

// viewed at http://localhost:8080
app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);
