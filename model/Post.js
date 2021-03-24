const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    year : String,
	month : String,
	state : String,
	early_anc_register : Number	,
	anc_4_or_more : Number
})

module.exports = mongoose.model('pw', postSchema);
