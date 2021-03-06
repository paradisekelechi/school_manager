const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../utils/config.json');

const databaseConfiguration = config[process.env.NODE_ENV || 'development'];
const basename = path.basename(module.filename);
const db = {};
let sequelize;

if (databaseConfiguration.use_env_variable) {
    sequelize = new Sequelize(databaseConfiguration.use_env_variable);
} else {
    sequelize = new Sequelize(databaseConfiguration.database, databaseConfiguration.username, databaseConfiguration.password, databaseConfiguration);
}

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        let model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// sequelize.sync({ force: true });

module.exports = db;