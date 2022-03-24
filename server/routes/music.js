"use strict";

const express = require("express");

const { musicModel } = require("../../collection");

const router = express.Router();

//get all
router.get('/music', async (req, res, next) => {
  let allRecords = await musicModel.findAll();
  res.status(200).send(allRecords);
})

//get one record
router.get('/music/:id', async (req, res, next) => {
  let paramsId = req.params.id;
  //find the correct method for this pls thx
  let musicRecords = await musicModel.findOne({
    where:{
      id: paramsId
    }
  });
  res.status(200).send(musicRecords);
})

//create
router.post('/music', async (req, res, next) => {
  let newSong = req.body;
  let response = await musicModel.create(newSong);
  res.status(200).send(response);
})

//update
router.put('/music/:id', async (req, res, next) => {
  let musicId = parseInt(req.params.id);
  let updatedMusicObj = req.body;
  let music = await musicModel.findOne({
    where:{
      id: musicId
    }
  })
  let response = await music.update(updatedMusicObj);
  res.status(200).send(response);
})

//delete
router.delete('/music/:id', async (req, res, next) => {
  let item = req.params.id;
  let response = await musicModel.destroy({
    where: {
      id: item
    },
  });
  res.status(200).json(response);
})


module.exports = router;