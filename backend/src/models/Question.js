const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  description: String,
  correct_answer: String,
  answers: Array,
});

module.exports = mongoose.model('Question', QuestionSchema);