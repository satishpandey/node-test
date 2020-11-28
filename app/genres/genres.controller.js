const genres = require('./genres.dao');

exports.createIndex = function (req, res, next) {

    let name = req.body.name;

    genres.createIndex(name, function (err, moviesData) {
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

    var genresData = req.body;
    genres.insert(genresData, function (err, genresData) {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: " genres data insertion Suceesfully "
        });
    });

}

exports.show = function (req, res, next) {
    genres.show({}, function (err, data) {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            genres: data
        });
    });
}

exports.deleteGenres = function (req, res, next) {

    genres.deleteData({ _id: req.params.id }, function (err, data) {
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

