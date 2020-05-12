"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _questionController = require("../controllers/question.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

// **note** all routes start with `/questions/`
// test to check that all or our files are communicating correctly
// router.get('/test', questionController.test);
// show all questions
// /questions/all
router.get('/all', _questionController.questionAll); // create a question route
// /questions/create

router.post('/create', _questionController.questionCreate); // read a question route
// /questions/SOME_ID

router.get('/:id', _questionController.questionDetails); // update a question
// /questions/SOME_ID/update

router.put('/:id/update', _questionController.questionUpdate); // delete a question
// /questions/SOME_ID/delete

router["delete"]('/:id/delete', _questionController.questionDelete);
var _default = router;
exports["default"] = _default;