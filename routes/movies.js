var express = require('express');
const movies = require('../controllers/movies');
var router = express.Router();
const moviesCtrl = require('../controllers/movies');
const movie = require('../models/movie');

// GET /movies - show all movied
router.get('/', moviesCtrl.index)

// GET /movies/new - new movie form
router.get('/new', moviesCtrl.new)

// GET /movies/id - show details of a single movie
router.get('/:id', moviesCtrl.show)

// POST /movies - add new movie
router.post('/', moviesCtrl.create)

module.exports = router;
