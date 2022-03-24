'use strict';
const { sequelize, peopleModel, musicModel } = require('./collection');
const { start } = require('./server/server.js');

sequelize.sync()
.then( () => {
  console.log('database is synced and ready to go');
  // peopleModel.create({name: 'tom'});
  // musicModel.create({songName: 'brap brap boop'});
  start(process.env.PORT);
})
.catch(err => {
  console.error(err);
})

