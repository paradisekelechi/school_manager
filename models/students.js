const sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const Students = sequelize.define('Students', {
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        department: {
            type: DataTypes.STRING
        }
    });

    return Students
}