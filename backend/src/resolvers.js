const Question = require('./models/Question');

module.exports = {
  Query: {
    questions: () => Question.find(),
    question: (context, { id }) => Question.findById(id),
  },

  Mutation: {
    createQuestion: (context, { description, correct_answer, answers }) => (
      Question.create({ description, correct_answer, answers})
    ),
    
    updateQuestion: async (context, { id, description, correct_answer, answers}) => {
      await Question.updateOne(
        { _id: id },
        { $set: { description, correct_answer, answers } }
      );
      return Question.findById(id);
    },

    deleteQuestion: (context, { id }) => Question.findByIdAndDelete(id),
  }
}