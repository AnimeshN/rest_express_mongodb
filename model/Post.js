const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    year : String,
	month : String,
	state : String,
	early_anc_register : String,
	anc_4_or_more : String
})

module.exports = mongoose.model('pw', postSchema);
