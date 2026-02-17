import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, TrendingUp, Target, Award, CheckCircle, XCircle, Brain, BookOpen } from 'lucide-react';

interface ExamResults {
  score: number;
  totalPoints: number;
  correct: number;
  total: number;
  percentage: number;
  answers: Record<number, string>;
  questions: any[];
}

export function ExamResults() {
  const navigate = useNavigate();
  const [results, setResults] = useState<ExamResults | null>(null);
  const [league, setLeague] = useState('');
  const [abilityScore, setAbilityScore] = useState(0);
  const [skillAnalysis, setSkillAnalysis] = useState<any[]>([]);

  useEffect(() => {
    const savedResults = localStorage.getItem('examResults');
    if (savedResults) {
      const data = JSON.parse(savedResults);
      setResults(data);
      calculateLeagueAndAbility(data);
      analyzeSkills(data);
    } else {
      navigate('/resume-upload');
    }
  }, [navigate]);

  const calculateLeagueAndAbility = (data: ExamResults) => {
    const percentage = data.percentage;
    let calculatedLeague = '';
    let score = 0;

    if (percentage >= 90) {
      calculatedLeague = 'Apex (Top 1%)';
      score = 95;
    } else if (percentage >= 80) {
      calculatedLeague = 'Diamond (Top 5%)';
      score = 85;
    } else if (percentage >= 70) {
      calculatedLeague = 'Platinum (Top 15%)';
      score = 75;
    } else if (percentage >= 60) {
      calculatedLeague = 'Gold (Top 30%)';
      score = 65;
    } else if (percentage >= 50) {
      calculatedLeague = 'Silver (Top 50%)';
      score = 55;
    } else {
      calculatedLeague = 'Bronze';
      score = 40;
    }

    setLeague(calculatedLeague);
    setAbilityScore(score);
  };

  const analyzeSkills = (data: ExamResults) => {
    const skillMap: Record<string, { correct: number; total: number; points: number; maxPoints: number }> = {};

    data.questions.forEach(q => {
      if (!skillMap[q.skill]) {
        skillMap[q.skill] = { correct: 0, total: 0, points: 0, maxPoints: 0 };
      }
      skillMap[q.skill].total++;
      skillMap[q.skill].maxPoints += q.points;
      
      if (data.answers[q.id] === q.correctAnswer) {
        skillMap[q.skill].correct++;
        skillMap[q.skill].points += q.points;
      }
    });

    const analysis = Object.entries(skillMap).map(([skill, stats]) => ({
      skill,
      accuracy: (stats.correct / stats.total) * 100,
      score: (stats.points / stats.maxPoints) * 100,
      correct: stats.correct,
      total: stats.total,
      proficiency: stats.correct === stats.total ? 'Expert' :
                   (stats.correct / stats.total) >= 0.7 ? 'Advanced' :
                   (stats.correct / stats.total) >= 0.5 ? 'Intermediate' :
                   'Beginner'
    }));

    setSkillAnalysis(analysis);
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading results...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-2xl p-8 mb-6 text-white">
          <div className="text-center mb-6">
            <Trophy className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Exam Complete!</h1>
            <p className="text-blue-100 text-lg">Here's your comprehensive performance analysis</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="text-blue-100 text-sm mb-1">Score</p>
              <p className="text-3xl font-bold">{results.score}/{results.totalPoints}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="text-blue-100 text-sm mb-1">Accuracy</p>
              <p className="text-3xl font-bold">{results.percentage.toFixed(1)}%</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="text-blue-100 text-sm mb-1">Correct Answers</p>
              <p className="text-3xl font-bold">{results.correct}/{results.total}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="text-blue-100 text-sm mb-1">League</p>
              <p className="text-xl font-bold">{league.split(' ')[0]}</p>
            </div>
          </div>
        </div>

        {/* League & Ability Score */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold">Your League</h2>
            </div>
            <div className="text-center py-6">
              <div className="inline-block p-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{league}</h3>
              <p className="text-gray-600">Based on your performance, you're ranked among the top candidates</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
              <h2 className="text-2xl font-bold">Ability Score</h2>
            </div>
            <div className="text-center py-6">
              <div className="relative inline-block">
                <svg className="w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(abilityScore / 100) * 351.86} 351.86`}
                    strokeLinecap="round"
                    transform="rotate(-90 64 64)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">{abilityScore}</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Equivalent to ~{Math.floor(abilityScore / 20)} years of experience</p>
            </div>
          </div>
        </div>

        {/* Skill-wise Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-6">
            <Target className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Skill-wise Performance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillAnalysis.map((skill, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{skill.skill}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    skill.proficiency === 'Expert' ? 'bg-purple-100 text-purple-700' :
                    skill.proficiency === 'Advanced' ? 'bg-green-100 text-green-700' :
                    skill.proficiency === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {skill.proficiency}
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Accuracy</span>
                      <span className="font-semibold">{skill.accuracy.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.accuracy}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {skill.correct} out of {skill.total} questions correct
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Answers */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-6">
            <Brain className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold">Answer Review</h2>
          </div>
          <div className="space-y-4">
            {results.questions.map((q, index) => {
              const userAnswer = results.answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <div key={q.id} className={`border-2 rounded-lg p-4 ${
                  isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start flex-1">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold mb-2">Q{index + 1}. {q.question}</p>
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-700">
                            <span className="font-medium">Your answer:</span> {userAnswer || 'Not answered'}
                          </p>
                          {!isCorrect && (
                            <p className="text-green-700">
                              <span className="font-medium">Correct answer:</span> {q.correctAnswer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {q.skill}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        q.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
                        q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {q.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Next Steps & Recommendations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-2">Areas to Improve</h3>
              <ul className="text-sm space-y-1 text-blue-100">
                {skillAnalysis
                  .filter(s => s.accuracy < 70)
                  .map((s, i) => (
                    <li key={i}>• {s.skill} ({s.accuracy.toFixed(0)}%)</li>
                  ))}
                {skillAnalysis.filter(s => s.accuracy < 70).length === 0 && (
                  <li>• Keep up the excellent work!</li>
                )}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-2">Strengths</h3>
              <ul className="text-sm space-y-1 text-blue-100">
                {skillAnalysis
                  .filter(s => s.accuracy >= 80)
                  .map((s, i) => (
                    <li key={i}>• {s.skill} ({s.accuracy.toFixed(0)}%)</li>
                  ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-2">Suggested Learning</h3>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Advanced React Patterns</li>
                <li>• System Design Basics</li>
                <li>• Algorithm Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => navigate('/jobs')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
          >
            View Matching Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamResults;
