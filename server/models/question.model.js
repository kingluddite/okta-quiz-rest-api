/**
 * The data-layer for a Okta questions
 * @module models
 */
import mongoose from 'mongoose';

/**
 * Question schema
 * @constructor Question
 */
const QuestionSchema = new mongoose.Schema({
  description: String,
  alternatives: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model('Question', QuestionSchema);
