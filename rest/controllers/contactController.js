var entries = require('../models/contactModel');

exports.list = function(req, res) {
 	if(req.query.startwith === undefined)
		res.json(entries);
};

exports.add = function(req, res) {
  	entries.push(req.body);
  	res.status(201).set("Location","/contact/"+req.body.name).json(req.body);
};

exports.find = function(req, res) {
  	res.json({name: req.params.name, phone: 13579});
  	//adding comment
};