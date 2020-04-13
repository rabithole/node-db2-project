const express = require('express');
// const Cars = require('../data/car-dealer.db3');
const db = require('../data/dbConfig.js');

const router = express.Router();

////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
router.post('/', (req, res) => {
  console.log(req.body);

  db('cars').insert(req.body)
  .then(car => {
    res.status(200).json({ success: 'You have succeeded!' })
  })
  .catch(error => {
    res.status(510).json({ error: '510, you have successfully failed!' })
  })
});


router.get('/', (req, res) => {
  console.log(req.body);
  db('cars')
  .then(cars => {
    res.status(200).json(cars);
  })
  .catch(error => {
    res.status(500).json({ error: '500, server error!' })
  })
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

   db('cars').where({ id })
  .then(car => {
    res.status(200).json(car);
  })
  .catch(error => {
    res.status(520).json({ error: '520, a successfull error!' })
  })
});

// router.delete('/:id', validateUserId, (req, res) => {
//   // do your magic!
//   console.log(req.params);
//   const carId = req.params.id;

//   Cars.remove(userId)
//   .then(user => {
//     res.status(200).json({ success: 'The user is gone!' })
//   })
//   .catch(error => {
//     res.status(500).json({ error: '500, server error!' })
//   })
// });

// router.put('/:id', validateUserId, (req, res) => {
//   // do your magic!
//   console.log(req.params, req.body);
//   const userId = req.params.id;
//   const changes = req.body;

//   User.update(userId, changes)
//   .then(user => {
//     res.status(200).json({ success: 'The user has been updated!' })
//   })
//   .catch(error => {
//     res.status(500).json({ error: '500, server error!' })
//   })
// });

module.exports = router;
