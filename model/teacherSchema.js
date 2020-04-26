const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({

    name: String,
    age: Number,
})

const Teacher = mongoose.model('teacher', teacherSchema);

module.exports = Teacher;