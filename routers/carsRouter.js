const express = require('express');
// const Cars = require('../data/car-dealer.db3');
const Cars = require('../data/dbConfig.js');

const router = express.Router();

////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
router.post('/', (req, res) => {
  console.log(req.body);

  Cars('cars').insert(req.body)
  .then(car => {
    res.status(200).json({ success: `${postText} has been posted to Cars id ${userId}` })
  })
  .catch(error => {
    res.status(510).json({ error: '510, you have successfully failed!' })
  })
});


router.get('/', (req, res) => {
  console.log(req.body);
  Cars('cars')
  .then(cars => {
    res.status(200).json(cars);
  })
  .catch(error => {
    res.status(500).json({ error: '500, server error!' })
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  const userId = req.params.id;

   Cars.getById(userId)
  .then(users => {
    res.status(200).json(users);
  })
  .catch(error => {
    res.status(500).json({ error: '500, server error!' })
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  console.log(req.params.id);
  const userId = req.params.id;

  Cars.getUserPosts(userId)
  .then(userPosts => {
    res.status(200).json(userPosts)
  })
  .catch(error => {
    res.status(500).json({ error: '500, server error!' })
  })
});

// router.delete('/:id', validateUserId, (req, res) => {
//   // do your magic!
//   console.log(req.params);
//   const userId = req.params.id;

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
