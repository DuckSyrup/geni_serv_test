var express = require('express');
var app = express();

app.get('/*', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.end('Hello, GENI user!\n\n'+JSON.stringify(req.ip,null,3)+'\n\n'+JSON.stringify(req.host,null,3)+'\n\n'+JSON.stringify(req.protocol,null,3));
});

app.listen(3000);
console.log('Listening on 3000');