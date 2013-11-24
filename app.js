var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

server.listen(process.env.PORT || 5000);

app.use(express.bodyParser());
app.use(express.static(__dirname + '/web'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

app.get('/team/', function(req, res){
	res.sendfile(__dirname + '/team.html');
});
