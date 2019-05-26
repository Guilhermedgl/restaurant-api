const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

const router = express.Router();

router.get('/', (req, res, next) => {
  Restaurant.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json(error));
});

router.post('/restaurant/create', (req, res, next) => {
  const { name, address } = req.body;
  if (name === '' || address === '') return res.status(400).json({ message: 'Invalid input' });
  Restaurant.findOne({ name })
    .then((response) => {
      if (response === null) {
        Restaurant.create({ name, address })
          .then((restaurant) => {
            res.status(200).json({ restaurant, message: 'Created' });
          })
          .catch(error => res.status(400).json(error));
      } else res.status(400).json({ message: 'Restaurant already exists' });
    })
    .catch(error => res.status(400).json({ error }));
});

router.get('/restaurant/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  Restaurant.findOne({ _id: req.params.id })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json(error));
});

router.put('/restaurant/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  Restaurant.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json(error));
});

router.delete('/restaurant/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  Restaurant.findOneAndDelete({ _id: req.params.id })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(200).json(error));
});

module.exports = router;
