const express = require('express');

const router = express.Router()

router.get('/', (req, res, next) => {
  console.log('Get Places Routes')
  res.json({ message: 'Its Places Routes!' })
})

module.exports = router;
