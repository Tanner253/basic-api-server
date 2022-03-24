'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const peopleSchema = require('./people.schema.js');
const musicSchema = require('./music.schema.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL || 'postgresql://localhost:5432/api-app'

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized: false,
    },
  },
});

const peopleModel = peopleSchema(sequelize, DataTypes);
const musicModel = musicSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  peopleModel,
  musicModel,
}