import { useAuth } from '@/context/AuthContext';
import { mockCandidates, mockNotifications, mockJobs, mockExamResult } from '@/data/mockData';
import { Award, TrendingUp, Briefcase, CheckCircle, Clock, Target, Upload, Brain } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  if (user.role === 'candidate') {
    const candidate = mockCandidates[user.id] || mockCandidates['user-1'] || {
      league: 'Unranked',
      abilityScore: 0,
      skills: [],
      projects: []
    };


    const recentNotifications = mockNotifications.slice(0, 3);
    const matchedJobs = mockJobs.slice(0, 3);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
            <p className="text-gray-600 mt-1">Here's your performance overview</p>
          </div>

          {/* Resume Upload CTA */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Upload className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Upload Your Resume & Get AI Assessment</h2>
                </div>
                <p className="text-blue-100 mb-4">
                  Let our AI analyze your resume, extract your skills, and generate a personalized adaptive exam
                </p>
                <button
                  onClick={() => navigate('/resume-upload')}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Start AI Resume Analysis
                </button>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">3 Steps</div>
                  <div className="text-sm text-blue-100 space-y-1">
                    <div>1. Upload Resume</div>
                    <div>2. AI Extracts Skills</div>
                    <div>3. Take Adaptive Exam</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-2xl font-bold text-purple-600">{candidate.league}</span>
              </div>
              <div className="text-sm text-gray-600">League</div>
              <div className="text-xs text-gray-500 mt-1">Top 15% Globally</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-blue-600">{candidate.abilityScore}</span>
              </div>
              <div className="text-sm text-gray-600">Ability Score</div>
              <div className="text-xs text-green-600 mt-1">+50 this month</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-2xl font-bold text-green-600">{matchedJobs.length}</span>
              </div>
              <div className="text-sm text-gray-600">Job Matches</div>
              <div className="text-xs text-gray-500 mt-1">Based on your skills</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-2xl font-bold text-orange-600">{candidate.skills.length}</span>
              </div>
              <div className="text-sm text-gray-600">Skills Verified</div>
              <div className="text-xs text-gray-500 mt-1">Across {candidate.projects.length} projects</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Latest Assessment */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Latest Assessment Results</h2>
                  <Link to="/assessments" className="text-sm text-indigo-600 hover:text-indigo-700">
                    View all
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Full Stack Developer Evaluation</div>
                      <div className="text-sm text-gray-500">Completed on {new Date(mockExamResult.completedAt).toLocaleDateString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{mockExamResult.score}%</div>
                      <div className="text-xs text-gray-500">Overall Score</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {mockExamResult.skillPerformance.map((skill) => (
                      <div key={skill.skill} className="text-center">
                        <div className="text-lg font-semibold text-gray-900">{skill.score}%</div>
                        <div className="text-xs text-gray-500">{skill.skill}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Matched Jobs */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Recommended Jobs</h2>
                  <Link to="/jobs" className="text-sm text-indigo-600 hover:text-indigo-700">
                    View all
                  </Link>
                </div>
                <div className="space-y-4">
                  {matchedJobs.map((job) => (
                    <div key={job.id} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">{job.title}</h3>
                          <p className="text-sm text-gray-600">{job.companyName}</p>
                        </div>
                        <span className="text-sm font-medium text-green-600">95% Match</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.requiredSkills.slice(0, 3).map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                          {job.salary ? `$${job.salary.min.toLocaleString()} - $${job.salary.max.toLocaleString()}` : 'Salary not specified'}
                        </span>
                        <Link to={`/jobs/${job.id}`} className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
                  <Link to="/notifications" className="text-sm text-indigo-600 hover:text-indigo-700">
                    View all
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentNotifications.map((notif) => (
                    <div key={notif.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                      <div className="p-1.5 bg-indigo-100 rounded-lg mt-0.5">
                        {notif.type === 'assessment' && <Clock className="w-4 h-4 text-indigo-600" />}
                        {notif.type === 'league_update' && <Award className="w-4 h-4 text-indigo-600" />}
                        {notif.type === 'job_match' && <Briefcase className="w-4 h-4 text-indigo-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{notif.content}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(notif.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link to="/assessments" className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Take Assessment</span>
                  </Link>
                  <Link to="/profile" className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Update Profile</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Recruiter Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 mt-1">Manage your job postings and candidates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">{mockJobs.length}</span>
            </div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">24</span>
            </div>
            <div className="text-sm text-gray-600">Applications</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-purple-600">12</span>
            </div>
            <div className="text-sm text-gray-600">Matched Candidates</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Your Job Postings</h2>
            <Link to="/jobs" className="text-sm text-indigo-600 hover:text-indigo-700">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {mockJobs.slice(0, 3).map((job) => (
              <div key={job.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{job.description.substring(0, 100)}...</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                </div>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500">
                  <span>8 applicants</span>
                  <span>•</span>
                  <span>3 matches</span>
                  <span>•</span>
                  <span>Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
