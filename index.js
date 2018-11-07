var express = require('express')
var app = new express()


app.post("/submit", function(request, response){
	response.send([]);
});
app.get("/scores.json", function(request, response){
	var username = request.query.username;
	response.send([]);
});

app.listen(8000); 

app.listen(process.env.port || 8000);
