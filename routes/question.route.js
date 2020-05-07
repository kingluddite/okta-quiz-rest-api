const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question.controller');

// **note** all routes start with `/questions/`

// test to check that all or our files are communicating correctly
// router.get('/test', questionController.test);

// show all questions
// /questions/all
router.get('/all', questionController.questionAll);

// create a question route
// /questions/create
router.post('/create', questionController.questionCreate);

// read a question route
// /questions/SOME_ID
router.get('/:id', questionController.questionDetails);

// update a question
// /questions/SOME_ID/update
router.put('/:id/update', questionController.questionUpdate);

// delete a question
// /questions/SOME_ID/delete
router.delete('/:id/delete', questionController.questionDelete);

module.exports = router;
