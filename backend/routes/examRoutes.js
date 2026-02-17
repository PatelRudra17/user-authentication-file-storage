const express = require('express');
const router = express.Router();
const { getQuestions, submitResult, seedQuestions } = require('../controllers/examController');

// Routes
router.get('/questions', getQuestions);
router.post('/submit', submitResult);
router.post('/seed', seedQuestions);

module.exports = router;
