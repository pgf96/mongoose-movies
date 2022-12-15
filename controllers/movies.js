const Movie = require('../models/movie')

module.exports = {
    index,
    show,
    new: newMovie,
    create
}

function index(req, res) {
    Movie.find({}, function(err, movies) {
        res.render('movies/index', { title: 'All movies', movies })
    })
}

function show(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
      res.render('movies/show', { title: 'Movie Detail', movie })
    });
  }

function newMovie(req, res) {
    res.render('movies/new', { title: 'Add Movie' })
}

function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing
    // remove any whitespace at start and end of cast
    req.body.cast = req.body.cast.trim()
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/)
    for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
    }
    const movie = new Movie(req.body)
    movie.save(function(err) {
        // one way to handle errors
        if (err) return res.render('movies/new')
        console.log(movie)
        res.redirect('/movies')
    })
}