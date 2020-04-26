require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./model/movieSchema');
const cors = require('cors')

const mongoDB = process.env.ATLAS_CONNECTION_STRING;
const server = express();
server.use(cors())
server.use(express.json());

mongoose.connect(mongoDB, { useNewUrlParser: true }, () => {
    console.log('mongoDB connected')
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    if (await Movie.countDocuments().exec() > 10) return

    Promise.all([
        Movie.create({ "title": "friends 1", "year": "1996" }),
        Movie.create({ "title": "friends 2", "year": "1996" }),
        Movie.create({ "title": "friends 3", "year": "1996" }),
        Movie.create({ "title": "friends 4", "year": "1996" }),
        Movie.create({ "title": "friends 5", "year": "1996" }),
        Movie.create({ "title": "friends 6", "year": "1996" }),
        Movie.create({ "title": "friends 7", "year": "1996" }),
        Movie.create({ "title": "friends 8", "year": "1996" }),
        Movie.create({ "title": "friends 9", "year": "1996" }),
        Movie.create({ "title": "friends 10", "year": "1996" }),
        Movie.create({ "title": "friends 11", "year": "1996" }),

    ]).then(() => {
        console.log("successfully documents added")
    })

})
const MovieRoutes = require('./routes/movie');
const TeacherRoutes = require('./routes/teacher');
const ProductRoutes = require('./routes/product');
server.use('/movie', MovieRoutes);
server.use('/teacher', TeacherRoutes);
server.use('/product', ProductRoutes);


server.listen(8000, () => {
    console.log("server is started at 8000")
})