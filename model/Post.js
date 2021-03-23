const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    year : String,
	month : String,
	state : String,
	early_anc_register : String,
	anc_4_or_more : String
})

let Post = module.exports = mongoose.model('Post', postSchema);
