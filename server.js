var express =require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/personlist',function ( req , res ){
	console.log("Get request from personlist");
});

app.listen(3000);
console.log('Server running on port 3000');