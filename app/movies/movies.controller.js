var movies = require('./movies.dao');

exports.createIndex = function (req, res, next) {

    var name = req.body.name;

    movies.createIndex(name, function (err, moviesData) {
        if (err) {
            res.json({
                error: err
            });
        }
        else {
            res.json({
                message: "Index created"
            });
        }
    });
}

exports.insert = function (req, res, next) {

    var moviesData = req.body;
    movies.insert(moviesData, function (err, moviesData) {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: " movies data insertion Suceesfully "
        });
    });

}

exports.show = function (req, res, next) {
    movies.show({}, function (err, data) {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            moviesData: data
        });
    });
}

exports.deleteMovies = function (req, res, next) {

    movies.deleteData({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            message: 'delete sucessfully'
        });
    });
}

