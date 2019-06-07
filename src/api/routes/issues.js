// @ts-check
var express = require('express');
var router = express.Router();
var issuesController = require('../controllers/issuesController');

//GET FROM DB ONLY
router.get('/', issuesController.getAllIssues);
router.put('/:id', issuesController.updateIssue);
router.delete('/:id', issuesController.deleteIssue);

router.get('/:date', issuesController.getIssueByDate);

module.exports = router;