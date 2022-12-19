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
    process.exit()
})