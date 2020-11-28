var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moviesSchema = new Schema({
    name: {type: String, index: true},
    description: String,
    releasingDate: Date,
    Genre: {
        name: String,
        description: String
    },
    duration: Number,
    rating: Number
});

module.exports = moviesSchema;