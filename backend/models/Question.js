const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    type: { type: String, enum: ['mcq', 'coding'], default: 'mcq' },
    correctAnswer: { type: Number, required: true },
});

module.exports = mongoose.model('Question', questionSchema);
