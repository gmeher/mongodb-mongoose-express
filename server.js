require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./model/movieSchema');
const cors = require('cors')

const mongoDB = process.env.ATLAS_CONNECTION_STRING;
const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

mongoose.connect(mongoDB, { useNewUrlParser: true }, () => {
    console.log('mongoDB connected')
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const MovieRoutes = require('./routes/movie');
const TeacherRoutes = require('./routes/teacher');
const ProductRoutes = require('./routes/product');
server.use('/movie', MovieRoutes);
server.use('/teacher', TeacherRoutes);
server.use('/product', ProductRoutes);


server.listen(8000, () => {
    console.log("server is started at 8000")
})