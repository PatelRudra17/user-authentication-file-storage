import { useState } from 'react';
import { mockAssessment, mockQuestions, mockExamResult } from '@/data/mockData';
import { FileText, Clock, Award, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

export function Assessments() {
  const [activeTab, setActiveTab] = useState<'available' | 'completed' | 'results'>('available');
  const [takingAssessment, setTakingAssessment] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion((prev: number) => prev + 1);
    } else {
      setTakingAssessment(false);
      setActiveTab('results');
    }
  };

  if (takingAssessment) {
    const question = mockQuestions[currentQuestion];
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {mockQuestions.length}</span>
              <span>Time Remaining: 45:32</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-violet-500 to-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${question.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                {question.difficulty}
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                {question.format.toUpperCase()}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-6">{question.questionText}</h2>

            {question.format === 'mcq' && question.options && (
              <div className="space-y-3">
                {question.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(question.id, option)}
                    className={`w-full text-left p-4 border-2 rounded-lg transition-all ${answers[question.id] === option
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${answers[question.id] === option
                        ? 'border-indigo-500 bg-indigo-500'
                        : 'border-gray-300'
                        }`}>
                        {answers[question.id] === option && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-gray-900">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {question.format === 'coding' && (
              <div>
                <textarea
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswer(question.id, e.target.value)}
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Write your code here..."
                />
              </div>
            )}

            {question.format === 'scenario' && (
              <div>
                <textarea
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswer(question.id, e.target.value)}
                  className="w-full h-48 p-4 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Describe your approach..."
                />
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion((prev: number) => prev - 1)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all"
              >
                {currentQuestion === mockQuestions.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Assessments</h1>
          <p className="text-gray-600 mt-1">Take skill assessments to improve your league ranking</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('available')}
            className={`pb-3 px-4 font-medium transition-colors ${activeTab === 'available'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-3 px-4 font-medium transition-colors ${activeTab === 'completed'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`pb-3 px-4 font-medium transition-colors ${activeTab === 'results'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Results & Analytics
          </button>
        </div>

        {/* Available Assessments */}
        {activeTab === 'available' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Full Stack Developer</h3>
                  <p className="text-sm text-gray-600">Adaptive difficulty assessment</p>
                </div>
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Duration: 60 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span>15 questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>Can improve league ranking</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-xs font-medium text-gray-700 mb-2">Topics Covered:</div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'System Design', 'Algorithms'].map((topic) => (
                    <span key={topic} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setTakingAssessment(true)}
                className="w-full px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all"
              >
                Start Assessment
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Python Backend</h3>
                  <p className="text-sm text-gray-600">Specialized backend assessment</p>
                </div>
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Duration: 45 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span>12 questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>Skill verification</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-xs font-medium text-gray-700 mb-2">Topics Covered:</div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'PostgreSQL', 'Docker'].map((topic) => (
                    <span key={topic} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all">
                Start Assessment
              </button>
            </div>
          </div>
        )}

        {/* Completed Assessments */}
        {activeTab === 'completed' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">Full Stack Developer Evaluation</h3>
                    <p className="text-sm text-gray-600 mt-1">Completed on {new Date(mockAssessment.completedAt!).toLocaleDateString()}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {mockAssessment.score}%
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>Time: 90 minutes</span>
                  <span>•</span>
                  <span>Questions: {mockAssessment.questions.length}</span>
                  <span>•</span>
                  <span>Difficulty: {mockAssessment.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results & Analytics */}
        {activeTab === 'results' && (
          <div className="space-y-6">
            {/* Overall Performance */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Overall Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">{mockExamResult.score}%</div>
                  <div className="text-sm text-gray-600">Overall Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">{mockExamResult.consistency}%</div>
                  <div className="text-sm text-gray-600">Consistency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{mockExamResult.abilityScore}</div>
                  <div className="text-sm text-gray-600">Ability Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">{mockExamResult.difficultyReached}</div>
                  <div className="text-sm text-gray-600">Peak Difficulty</div>
                </div>
              </div>
            </div>

            {/* Skill Performance */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Skill-wise Performance</h2>
              <div className="space-y-4">
                {mockExamResult.skillPerformance.map((skill) => (
                  <div key={skill.skill}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium text-gray-900">{skill.skill}</span>
                        <span className="text-sm text-gray-500 ml-2">({skill.questionsAttempted} questions)</span>
                      </div>
                      <span className="font-semibold text-gray-900">{skill.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-violet-500 to-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recommendations
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Great performance on React questions. Consider taking advanced React patterns course.</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">System Design could use improvement. Practice with real-world architecture scenarios.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Your consistency score shows reliable knowledge. Keep practicing to maintain this level.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
