const express = require('express');
const router = express.Router();
const vacancies = require('./vacancies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/vacancies',vacancies);

module.exports = router;
