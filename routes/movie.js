const express = require('express')
const Movie = require('../model/movieSchema');

const router = express.Router();


router.get('/', async (req, res) => {

    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const [startIndex] = getPaginatedIndex(page, limit);

    try {

        const total_items = await Movie.find({ title: { $regex: '^friends' } }).countDocuments().exec();
        const total_pages = Math.ceil(total_items / limit);
        const movies = await Movie.find({ title: { $regex: '^friends' } }).limit(limit).skip(startIndex);
        const page_meta = {
            current_page: page,
            limit: limit,
            total_pages: total_pages,
            total_items: total_items,
            next_page: total_pages <= page ? null : page + 1,
            prev_page: page > 1 ? page - 1 : null
        }
        res.json({ result: movies, meta: page_meta });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})


router.post('/', async (req, res) => {

    const movie = {
        title: req.body.title,
        year: parseInt(req.body.year)
    }

    try {
        const new_movie = new Movie(movie);
        const saved_movie = await new_movie.save();
        res.status(201).json(saved_movie);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



module.exports = router;


const getPaginatedIndex = (page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return [startIndex, endIndex]

}