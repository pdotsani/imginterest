'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
  url: String,
	ownerId: String,
	owner: String
});

module.exports = mongoose.model('Image', ImageSchema);