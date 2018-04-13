const students = require('./controllers/Students');

module.exports = function (app) {
    app.get('/api/students', students.getStudents);
    app.get('/api/students/:id', students.getOneStudent);
    app.post('/api/students', students.createStudent);
    app.put('/api/students', students.editStudent);
    app.delete('/api/students', students.deleteStudent);
}