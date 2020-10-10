const express = require('express');
const router = express.Router();
const birdsController = require('../controllers/birdsController');


router.get('/', function(req, res, next) {
  res.render('birds/birds')
});

router.get('/create', function(req, res, next) {
    res.render('birds/create');
});

router.get('/confirmation', function(req, res, next) {
    res.render('birds/confirmation');
})

router.post('/create', birdsController.post_create_bird);


module.exports = router;