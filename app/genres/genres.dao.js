const mongoose = require('mongoose');
const genresSchema = require('./genres.model');

genresSchema.statics = {

    insert: function (data, cb) {
        let genresData = new this(data);
        genresData.save(cb);
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

const genresModel = mongoose.model('genres', genresSchema);
module.exports = genresModel;