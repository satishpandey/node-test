const mongoose = require('mongoose');
const schema = mongoose.Schema;

const genresSchema = new schema({
    name: String,
    description: String,
},
    {
        timestamps: true
    });

    module.exports = genresSchema;

