const mongoose = require('mongoose');
const moviesSchema = require('./movies.model');

moviesSchema.statics = {

    insert: function (data, cb) {
        var moviesData = new this(data);
        moviesData.save(cb);
    },
    createIndex: function (name,cb) {
        this.index({name:1});
    },
    show: function (query, cb) {
        this.find(query, cb)
    },
    deleteData: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }

}

const moviesModel = mongoose.model('movies', moviesSchema);
module.exports = moviesModel;