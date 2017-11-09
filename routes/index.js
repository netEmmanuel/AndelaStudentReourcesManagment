var express = require('express');
var router = express.Router();

var db = require('../queries');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Resourece Api for Andela ALC 2.0' });
});
  
router.get('/api/studs', db.getAllStudents);
router.get('/api/stud/:id', db.getSingleStudent);
router.post('/api/stud', db.createStudents);
router.put('/api/stud/:id', db.updateStudents);
router.delete('/api/stud/:id', db.delStudents);

module.exports = router;
