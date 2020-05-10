import Question from '../models/question.model';
// const Question = require('../models/question.model'); // include our model

// simple version, without validation or sanitation
// exports.test = function(req, res) {
//   res.send('Greetings from the Test controller!');
// };

/**
 * Show all questions
 * @param {object} req request
 * @param {object} res response
 */
export const questionAll = async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

/**
 * Create a question
 * @param {object} req request
 * @param {object} res response
 */
export const questionCreate = async (req, res) => {
  try {
    const { description } = req.body;
    const { alternatives } = req.body;

    const question = await Question.create({
      description,
      alternatives,
    });

    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

/**
 * Show a question detail
 * @param {object} req request
 * @param {object} res response
 */
export const questionDetails = async (req, res) => {
  try {
    const _id = req.params.id;

    const question = await Question.findOne({ _id });
    if (!question) {
      return res.status(404).json({});
    } else {
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

/**
 * Update a question
 * @param {object} req request
 * @param {object} res response
 */
export const questionUpdate = async (req, res) => {
  try {
    const _id = req.params.id;
    const { description, alternatives } = req.body;

    let question = await Question.findOne({ _id });

    if (!question) {
      question = await Question.create({
        description,
        alternatives,
      });
      return res.status(201).json(question);
    } else {
      question.description = description;
      question.alternatives = alternatives;
      await question.save();
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

/**
 * Delete a questio
 * @param {object} req request
 * @param {object} res response
 */
export const questionDelete = async (req, res) => {
  try {
    const _id = req.params.id;

    const question = await Question.deleteOne({ _id });

    if (question.deletedCount === 0) {
      return res.status(404).json();
    } else {
      return res.status(204).json();
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
