/*  author:Yiqi Zhang 
   website name: Yiqi Zhang 
   Description:Assignment1 build simple personal profile website online.
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET ABOUT page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

router.get('/contact', function(req, res, next) {
   res.render('contact'); 
});

router.get('/project', function(req, res, next) {
   res.render('project'); 
});

router.get('/server', function(req, res, next) {
   res.render('server'); 
});



module.exports = router;
