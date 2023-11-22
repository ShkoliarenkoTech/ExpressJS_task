const mongoose = require('mongoose')
const Student = require('../models/studentModel')

exports.list_of_students = async function(req, res) {
    const students = await Student.find({});
    res.json(students)
}
exports.create_a_student = function(req, res) {
        Student.create(req.body)
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
    }