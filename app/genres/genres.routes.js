const express = require('express');
const router = express.Router();

const genres = require('./genres.controller');

router.post('/create', genres.insert);
router.post('/create/index', genres.createIndex);
router.get('/get', genres.show);
router.delete('/delete/:id', genres.deleteGenres);

module.exports = router;