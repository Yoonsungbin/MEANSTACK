var express =require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('personlist',['personlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); 

app.get('/personlist',function ( req , res ){
	console.log("Get request from personlist");

 	db.personlist.find(function (err,docs) {
 		console.log(docs);
 		res.json(docs);
 	});
});

app.post('/addperson', function (req, res) {
	console.log(req.body);
		db.personlist.insert(req.body, function (err, doc) {
			res.json(doc);
		});
});

app.listen(3000);
console.log('Server running on port 3000');