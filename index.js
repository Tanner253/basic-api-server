'use strict';
const { sequelize, peopleModel, musicModel } = require('./collection');


sequelize.sync()
.then( () => {
  console.log('database is synced and ready to go');
  peopleModel.create({name: 'tom'});
  musicModel.create({songName: 'brap brap boop'})
})
.catch(err => {
  console.error(err);
})