var express =require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/personlist',function ( req , res ){
	console.log("Get request from personlist");


	person1 = {
		name : 'Bin',
		email : 'bin@gmail.com',
		age : '26'
	};

	person2 = {
		name : 'David',
		email : 'David@gmail.com',
		age : '26'
	};

	person3 = {
		name : 'Sam',
		email : 'Sam@gmail.com',
		age : '26'
	};

	var personlist = [person1,person2,person3];
	res.json(personlist);
});

app.listen(3000);
console.log('Server running on port 3000');