var express =require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('personlist',['personlist']);
app.use(express.static(__dirname + "/public"));

app.get('/personlist',function ( req , res ){
	console.log("Get request from personlist");

 	db.personlist.find(function (err,docs) {
 		console.log(docs);
 		res.json(docs);
 	});
});

app.listen(3000);
console.log('Server running on port 3000');