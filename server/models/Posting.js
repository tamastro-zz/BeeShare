'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema
//http://mongoosejs.com/docs/populate.html
var PostingSchema = new Schema({
    userid: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    description: String,
    imgurl: String,
    views: Number,
    download: Number
});

//create model
var Posting = mongoose.model('Posting', PostingSchema);

module.exports = Posting;
