"use strict";

const express = require("express");

const { peopleModel } = require("../../collection");

const router = express.Router();

//get all
router.get('/people', async (req, res, next) => {
  let allPeopleRecords = await peopleModel.findAll();
  res.status(200).send(allPeopleRecords);
})

//get one record
router.get('/people/:id', async (req, res, next) => {
  let paramsId = req.params.id;
  //find the correct method for this pls thx
  let personRecords = await peopleModel.findOne({
    where:{
      id: paramsId
    }
  });
  res.status(200).send(personRecords);
})

//create
router.post('/people', async (req, res, next) => {
  let newPerson = req.body;
  let response = await peopleModel.create(newPerson);
  res.status(200).send(response);
})

//update
router.put('/people/:id', async (req, res, next) => {
  let personId = parseInt(req.params.id);
  let updatedObj = req.body;
  let person = await peopleModel.findOne({
    where:{
      id: personId
    }
  })
  console.log(person);
  let response = await person.update(updatedObj);
  res.status(200).send(response);
})

//delete
router.delete('/people/:id', async (req, res, next) => {
  let item = req.params.id;
  let response = await peopleModel.destroy({
    where: {
      id: item
    },
  });
  res.status(200).json(response);
})


module.exports = router;