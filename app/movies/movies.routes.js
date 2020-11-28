const express = require('express');
const router = express.Router();


const movies = require('./movies.controller');


router.post('/create', movies.insert);
router.post('/create/index', movies.createIndex);
router.get('/get', movies.show);
router.delete('/delete/:id', movies.deleteMovies);


module.exports = router;