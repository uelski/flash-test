var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({ 
	name: {type: String, required: true},
  	address: String
});

mongoose.model('Location', locationSchema);