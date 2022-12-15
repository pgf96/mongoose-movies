const mongoose = require('mongoose')
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
        }
    },
    mpaaRating: String,
    cast: [String],
    nowShowing: {type: Boolean, default: false}
}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema)