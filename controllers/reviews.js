const Movie = require('../models/movie')

module.exports = {
    create
}

function create(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        // We can push subdocs into Mongoose arrays
        movie.reviews.push(req.body)
        // Save any changes made to the movie doc
        movie.save(function(err) {
            res.redirect(`/movies/${movie._id}`)
        })
    })
}