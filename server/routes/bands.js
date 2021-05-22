const router = require('express').Router();
let Band = require('../models/band.model');

router.route('/').get((req, res) => {
  Band.find()
    .then(bands => res.json(bands))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newBand = new Band({
    username,
    description,
    duration,
    date,
  });

  newBand.save()
  .then(() => res.json('Band added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Band.findById(req.params.id)
    .then(band => res.json(band))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Band.findByIdAndDelete(req.params.id)
    .then(() => res.json('Band deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Band.findById(req.params.id)
    .then(band => {
      band.username = req.body.username;
      band.description = req.body.description;
      band.duration = Number(req.body.duration);
      band.date = Date.parse(req.body.date);

      band.save()
        .then(() => res.json('Band profile updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;