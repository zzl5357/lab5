var data = require("../data.json");

exports.addFriend = function(req, res) {    
	
	// Your code goes here
	console.log(req.query.name);
	console.log(req.query.description);
	res.render('index', {
	//"name" : req.query.name
	//"description" : req.query.description
	//"imageURL" : "http://lorempixel.com/400/400/people"
	});
	data.friends.push(newFriend);

 };