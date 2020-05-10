import express from 'express';
const router = express.Router();

import {
  questionAll,
  questionCreate,
  questionDetails,
  questionUpdate,
  questionDelete,
} from '../controllers/question.controller.js';

// **note** all routes start with `/questions/`

// test to check that all or our files are communicating correctly
// router.get('/test', questionController.test);

// show all questions
// /questions/all
router.get('/all', questionAll);

// create a question route
// /questions/create
router.post('/create', questionCreate);

// read a question route
// /questions/SOME_ID
router.get('/:id', questionDetails);

// update a question
// /questions/SOME_ID/update
router.put('/:id/update', questionUpdate);

// delete a question
// /questions/SOME_ID/delete
router.delete('/:id/delete', questionDelete);

export default router;
