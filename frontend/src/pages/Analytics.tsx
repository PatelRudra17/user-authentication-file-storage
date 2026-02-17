import { TrendingUp, Users, Target, Award, BarChart3, Activity, CheckCircle, Clock } from 'lucide-react';

export function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights and performance metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+12%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">2,847</div>
            <div className="text-sm text-gray-600">Total Candidates</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+8%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,234</div>
            <div className="text-sm text-gray-600">Assessments Completed</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+15%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">487</div>
            <div className="text-sm text-gray-600">Hidden Talents Found</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+22%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
            <div className="text-sm text-gray-600">Match Accuracy</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* League Distribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-900">League Distribution</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Diamond</span>
                  <span className="text-sm font-semibold text-gray-900">142 (5%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full" style={{ width: '5%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Platinum</span>
                  <span className="text-sm font-semibold text-gray-900">427 (15%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full" style={{ width: '15%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Gold</span>
                  <span className="text-sm font-semibold text-gray-900">569 (20%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full" style={{ width: '20%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Silver</span>
                  <span className="text-sm font-semibold text-gray-900">854 (30%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-gray-400 to-gray-600 h-2 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bronze</span>
                  <span className="text-sm font-semibold text-gray-900">855 (30%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-800 h-2 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Skill Verification Stats */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-900">Skill Verification Stats</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-600 mb-2">Resume vs Reality Match</div>
                <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }} />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Exaggeration Detected</div>
                <div className="text-3xl font-bold text-orange-600 mb-2">23%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '23%' }} />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Hidden Skills Found</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">34%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '34%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Bias Reduction */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Bias Reduction Impact</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Gender Neutrality</span>
                  <span className="text-sm font-semibold text-green-600">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '98%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">College Bias Removed</span>
                  <span className="text-sm font-semibold text-green-600">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '94%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Age Neutrality</span>
                  <span className="text-sm font-semibold text-green-600">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '96%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Performance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Assessment Performance</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">92%</div>
                <div className="text-xs text-gray-600">Completion Rate</div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">65 min</div>
                  <div className="text-xs text-gray-600">Avg Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">8.4/10</div>
                  <div className="text-xs text-gray-600">Difficulty</div>
                </div>
              </div>
            </div>
          </div>

          {/* Anti-Cheating Stats */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Anti-Cheating Effectiveness</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Trust Score</span>
                  <span className="text-sm font-semibold text-green-600">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '96%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Anomalies Detected</span>
                  <span className="text-sm font-semibold text-orange-600">4%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '4%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Human Review Rate</span>
                  <span className="text-sm font-semibold text-blue-600">7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '7%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Metrics */}
        <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Growth & Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm opacity-90 mb-2">Skill Growth Velocity</div>
              <div className="text-3xl font-bold mb-1">+24%</div>
              <div className="text-xs opacity-75">Month over month</div>
            </div>

            <div>
              <div className="text-sm opacity-90 mb-2">League Promotions</div>
              <div className="text-3xl font-bold mb-1">387</div>
              <div className="text-xs opacity-75">This month</div>
            </div>

            <div>
              <div className="text-sm opacity-90 mb-2">Successful Placements</div>
              <div className="text-3xl font-bold mb-1">156</div>
              <div className="text-xs opacity-75">Last 30 days</div>
            </div>

            <div>
              <div className="text-sm opacity-90 mb-2">Platform Satisfaction</div>
              <div className="text-3xl font-bold mb-1">4.8/5</div>
              <div className="text-xs opacity-75">Average rating</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>

          <div className="space-y-3">
            {[
              { action: 'New candidate registered', user: 'John Doe', time: '2 minutes ago', type: 'success' },
              { action: 'Assessment completed', user: 'Jane Smith', time: '15 minutes ago', type: 'success' },
              { action: 'League promotion', user: 'Mike Johnson', time: '1 hour ago', type: 'info' },
              { action: 'Job posted', user: 'TechCorp', time: '2 hours ago', type: 'info' },
              { action: 'Candidate matched', user: 'Sarah Williams', time: '3 hours ago', type: 'success' }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                    <div className="text-xs text-gray-600">{activity.user}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
