var mongoose = require('mongoose');
var model1 =new mongoose.Schema({
  username: { type: String, required: false},
  // email: { type: String, required: false},
	// phone: { type: Number, required: false},
  // gender: { type: String, required: false},
	address: { type: String, required: false},
  password: { type: String, required: false},
  request:{type:String, required:true}
});
module.exports = model1;
