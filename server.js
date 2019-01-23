const express = require('express')
let app = express()

const path = require('path')

let PORT = process.env.PORT
app.use('/assets', express.static('assets'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT);
