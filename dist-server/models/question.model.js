"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The data-layer for a Okta questions
 * @module models
 */

/**
 * Question schema
 * @constructor Question
 */
var QuestionSchema = new _mongoose["default"].Schema({
  description: String,
  alternatives: [{
    text: {
      type: String,
      required: true
    },
    isCorrect: {
      type: Boolean,
      required: true,
      "default": false
    }
  }]
});
module.exports = _mongoose["default"].model('Question', QuestionSchema);