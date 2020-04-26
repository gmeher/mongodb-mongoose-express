const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number
})


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;