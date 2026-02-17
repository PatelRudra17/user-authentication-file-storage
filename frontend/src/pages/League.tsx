import { mockCandidates } from '@/data/mockData';
import { useAuth } from '@/context/AuthContext';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

const leagueInfo = {
  Bronze: { color: 'from-orange-600 to-orange-800', textColor: 'text-orange-600', bgColor: 'bg-orange-100', rank: 1, percentile: '0-40%' },
  Silver: { color: 'from-gray-400 to-gray-600', textColor: 'text-gray-600', bgColor: 'bg-gray-100', rank: 2, percentile: '40-60%' },
  Gold: { color: 'from-yellow-400 to-yellow-600', textColor: 'text-yellow-600', bgColor: 'bg-yellow-100', rank: 3, percentile: '60-80%' },
  Platinum: { color: 'from-cyan-400 to-blue-600', textColor: 'text-blue-600', bgColor: 'bg-blue-100', rank: 4, percentile: '80-95%' },
  Diamond: { color: 'from-purple-400 to-pink-600', textColor: 'text-purple-600', bgColor: 'bg-purple-100', rank: 5, percentile: '95-100%' }
};

export function League() {
  const { user } = useAuth();
  const candidate = user ? mockCandidates[user.id] : null;

  if (!candidate) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-600">Loading...</p>
    </div>;
  }

  const currentLeague = leagueInfo[candidate.league];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">League Ranking</h1>
          <p className="text-gray-600 mt-1">Track your position among all candidates</p>
        </div>

        {/* Current League */}
        <div className={`bg-gradient-to-br ${currentLeague.color} rounded-2xl p-8 shadow-xl text-white mb-8`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm font-medium opacity-90 mb-2">Current League</div>
              <h2 className="text-4xl font-bold">{candidate.league} League</h2>
              <p className="mt-2 opacity-90">Percentile: {currentLeague.percentile}</p>
            </div>
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Award className="w-12 h-12" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
            <div>
              <div className="text-2xl font-bold">{candidate.abilityScore}</div>
              <div className="text-sm opacity-90">Ability Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{candidate.leagueScore}</div>
              <div className="text-sm opacity-90">League Points</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Top 15%</div>
              <div className="text-sm opacity-90">Global Rank</div>
            </div>
          </div>
        </div>

        {/* League Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Growth This Month</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">+15 pts</div>
            <p className="text-sm text-gray-600">Keep it up to reach Diamond!</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Candidates in League</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2,347</div>
            <p className="text-sm text-gray-600">You're in top 350</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Next Milestone</h3>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">900 pts</div>
            <p className="text-sm text-gray-600">To reach Diamond League</p>
          </div>
        </div>

        {/* All Leagues */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">All Leagues</h2>
          <div className="space-y-4">
            {Object.entries(leagueInfo).reverse().map(([league, info]) => {
              const isCurrent = league === candidate.league;
              return (
                <div
                  key={league}
                  className={`p-4 rounded-lg border-2 transition-all ${isCurrent ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center text-white`}>
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          {league} League
                          {isCurrent && (
                            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600">Percentile: {info.percentile}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {league === 'Diamond' && '900+ points'}
                        {league === 'Platinum' && '700-899 points'}
                        {league === 'Gold' && '500-699 points'}
                        {league === 'Silver' && '300-499 points'}
                        {league === 'Bronze' && '0-299 points'}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How to Improve */}
        <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white mt-6">
          <h2 className="text-lg font-semibold mb-4">How to Improve Your League Ranking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2">Take More Assessments</h3>
              <p className="text-sm opacity-90">Complete skill assessments to increase your ability score</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2">Improve Consistency</h3>
              <p className="text-sm opacity-90">Maintain high performance across all questions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2">Reach Higher Difficulty</h3>
              <p className="text-sm opacity-90">Successfully answer harder questions in adaptive tests</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2">Complete Projects</h3>
              <p className="text-sm opacity-90">Add complex projects to your portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
