const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const PORT = process.env.PORT || 3000;

 
app.get('/architecture', function(req, res) {
    console.log("Architecture")
});

console.log(PORT)
app.listen(PORT);
