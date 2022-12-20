require('./config/database')

const Movie = require('./models/movie')
const Performer = require('./models/performer')

const data = require('./data')

// avoid duplicates by resetting the database



const p1 = Movie.deleteMany({})
const p2 = Performer.deleteMany({})

Promise.all([p1,p2])
.then(function(results) {
    console.log('deleted movies and performers: ', results)
    return Performer.create(data.performers)
})
.then(function(results) {
    console.log('created performers: ', results)
    return Movie.create(data.movies)
})
.then(function(results) {
    console.log('created movies ', results)
    return Promise.all([
        // find performer
        Performer.findOne({name: 'Mark Hamill'}),
        // find a movie
        Movie.findOne({title: 'Star Wars - A New Hope'})

    ])
})
.then(function(results) {
    console.log('fonud a performer and a movie: ', results)
    const mark = results[0]
    const starWars = results[1]

    starWars.cast.push(mark)

    return starWars.save()


    process.exit()
})
.then(function(results) {
    console.log('mark is now a cast member of star wars', results)
    process.exit()
})