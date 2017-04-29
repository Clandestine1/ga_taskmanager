var express = require('express');
var router = express.Router();

var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your First API...' });
});

router.get('/api/tasks', db.getAllTasks);
router.get('/api/tasks/:id', db.getOneTask);
router.post('/api/tasks', db.createTask);
router.put('/api/tasks/:id', db.updateTask);
router.delete('/api/tasks/:id', db.deleteTask);

module.exports = router;