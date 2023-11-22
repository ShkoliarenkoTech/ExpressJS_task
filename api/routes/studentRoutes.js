// const mongoose = require('mongoose')
const Students = require('../controllers/studentContoller')

module.exports = app => {
    app.route('/student')
    .get(Students.list_of_students)
    .post(Students.create_a_student)
}