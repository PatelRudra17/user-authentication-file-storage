const Question = require('../models/Question');
const Result = require('../models/Result');

// @desc    Get all questions
// @route   GET /api/exams/questions
// @access  Public
const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Submit exam result
// @route   POST /api/exams/submit
// @access  Public
const submitResult = async (req, res) => {
    const result = new Result({
        candidateName: req.body.candidateName,
        score: req.body.score,
        totalQuestions: req.body.totalQuestions,
        answers: req.body.answers,
        violations: req.body.violations,
    });

    try {
        const newResult = await result.save();
        res.status(201).json(newResult);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Seed sample questions
// @route   POST /api/exams/seed
// @access  Public
const seedQuestions = async (req, res) => {
    const sampleQuestions = [
        {
            question: 'What is React primarily used for?',
            options: ['Backend development', 'Building user interfaces', 'Database management', 'Server configuration'],
            type: 'mcq',
            correctAnswer: 1
        },
        {
            question: 'Which hook is used for side effects in React?',
            options: ['useState', 'useEffect', 'useContext', 'useReducer'],
            type: 'mcq',
            correctAnswer: 1
        },
        {
            question: 'What does JSX stand for?',
            options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extension'],
            type: 'mcq',
            correctAnswer: 0
        }
    ];

    try {
        await Question.deleteMany({});
        const createdQuestions = await Question.insertMany(sampleQuestions);
        res.status(201).json(createdQuestions);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getQuestions,
    submitResult,
    seedQuestions
};
