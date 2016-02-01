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

app.delete('/deleteperson/:id' , function ( req, res ) {
	var id = req.params.id;
	console.log(id);
	db.personlist.remove({_id:mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.get('/editperson/:id', function (req, res){
	var id = req.params.id;
	console.log(id);
	db.personlist.findOne({_id:mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.put('/updateperson/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	db.personlist.findAndModify({query: {_id :mongojs.ObjectId(id)},
		update: {$set: {name:req.body.name,email :req.body.email,age:req.body.age}}, new : true }, function (err,doc) {
			res.json(doc);
		});
});
app.listen(3000);
console.log('Server running on port 3000');