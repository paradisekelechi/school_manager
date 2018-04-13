const models = require('../models');

const Students = models.Students;

module.exports = {
    createStudent(req, res) {
        const { firstname, lastname, department } = req.body;
        return Students.create({ firstname, lastname, department })
            .then(function () {
                res.status(200).send({
                    message: 'Student created successfully',
                    success: true
                });
            })
            .catch(function (error) {
                console.log(error);
                res.status(400).send({
                    message: 'Error has occurred',
                    success: false
                });
            });
    },
    getStudents(req, res) {
        return Students.find()
            .then(function (students) {
                res.status(200).send({
                    message: 'Students gotten successfully',
                    students
                });
            })
            .catch(function (error) {
                res.status(400).send({
                    message: 'Error has occurred',
                    success: false
                });
            });
    },
    getOneStudent(req, res) {
        return Students.findOne({ where: { id: req.params.id } })
            .then(function (student) {
                res.status(200).send({
                    message: 'Students gotten successfully',
                    student
                });
            })
            .catch(function (error) {
                res.status(400).send({
                    message: 'Error has occurred',
                    success: false
                });
            });
    },
    editStudent(req, res) {
        const { id } = req.params;
        const { firstname, lastname, department } = req.body;

        return Students.update({ firstname, lastname, department }, { where: { id } })
            .then(function () {
                res.status(200).send({
                    message: 'Student edited successfully',
                    success: false
                });
            })
            .catch(function (error) {
                res.status(400).send({
                    message: 'Error has occurred',
                    success: false
                });
            });
    },
    deleteStudent(req, res) {
        return Students.delete({ where: { id: req.params.id } })
            .then(function () {
                res.status(200).send({
                    message: 'Student deleted successfully',
                    success: false
                });
            })
            .catch(function (error) {
                res.status(400).send({
                    message: 'Error has occurred',
                    success: false
                });
            });
    }
}