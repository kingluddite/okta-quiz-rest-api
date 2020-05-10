"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionDelete = exports.questionUpdate = exports.questionDetails = exports.questionCreate = exports.questionAll = void 0;

var _question = _interopRequireDefault(require("../models/question.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// const Question = require('../models/question.model'); // include our model
// simple version, without validation or sanitation
// exports.test = function(req, res) {
//   res.send('Greetings from the Test controller!');
// };
// show all questions
var questionAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var questions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _question["default"].find();

          case 3:
            questions = _context.sent;
            return _context.abrupt("return", res.status(200).json(questions));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function questionAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // create a question


exports.questionAll = questionAll;

var questionCreate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var description, alternatives, question;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            description = req.body.description;
            alternatives = req.body.alternatives;
            _context2.next = 5;
            return _question["default"].create({
              description: description,
              alternatives: alternatives
            });

          case 5:
            question = _context2.sent;
            return _context2.abrupt("return", res.status(201).json(question));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              error: _context2.t0
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function questionCreate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // show a question detail


exports.questionCreate = questionCreate;

var questionDetails = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _id, question;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _id = req.params.id;
            _context3.next = 4;
            return _question["default"].findOne({
              _id: _id
            });

          case 4:
            question = _context3.sent;

            if (question) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({}));

          case 9:
            return _context3.abrupt("return", res.status(200).json(question));

          case 10:
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              error: _context3.t0
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function questionDetails(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // update a question


exports.questionDetails = questionDetails;

var questionUpdate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _id, _req$body, description, alternatives, question;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _id = req.params.id;
            _req$body = req.body, description = _req$body.description, alternatives = _req$body.alternatives;
            _context4.next = 5;
            return _question["default"].findOne({
              _id: _id
            });

          case 5:
            question = _context4.sent;

            if (question) {
              _context4.next = 13;
              break;
            }

            _context4.next = 9;
            return _question["default"].create({
              description: description,
              alternatives: alternatives
            });

          case 9:
            question = _context4.sent;
            return _context4.abrupt("return", res.status(201).json(question));

          case 13:
            question.description = description;
            question.alternatives = alternatives;
            _context4.next = 17;
            return question.save();

          case 17:
            return _context4.abrupt("return", res.status(200).json(question));

          case 18:
            _context4.next = 23;
            break;

          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              error: _context4.t0
            }));

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 20]]);
  }));

  return function questionUpdate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // delete a question


exports.questionUpdate = questionUpdate;

var questionDelete = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _id, question;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _id = req.params.id;
            _context5.next = 4;
            return _question["default"].deleteOne({
              _id: _id
            });

          case 4:
            question = _context5.sent;

            if (!(question.deletedCount === 0)) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.status(404).json());

          case 9:
            return _context5.abrupt("return", res.status(204).json());

          case 10:
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              error: _context5.t0
            }));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function questionDelete(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.questionDelete = questionDelete;