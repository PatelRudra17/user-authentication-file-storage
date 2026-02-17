import { mockCandidates, mockSalaryInsight } from '@/data/mockData';
import { useAuth } from '../context/AuthContext';
import { DollarSign, TrendingUp, Award, Zap, BarChart3 } from 'lucide-react';

export function Salary() {
  const { user } = useAuth();
  const candidate = user ? mockCandidates[user.id] : null;
  const salaryInsight = mockSalaryInsight;

  if (!candidate) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-600">Loading...</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Salary Insights</h1>
          <p className="text-gray-600 mt-1">AI-powered salary estimation based on your skills and league</p>
        </div>

        {/* Salary Range */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-xl text-white mb-8">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8" />
            <div>
              <div className="text-sm font-medium opacity-90">Estimated Annual Salary</div>
              <h2 className="text-4xl font-bold mt-1">
                ${salaryInsight.recommendedSalary.min.toLocaleString()} - ${salaryInsight.recommendedSalary.max.toLocaleString()}
              </h2>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Your Position vs Market Average</span>
              <span className="text-lg font-bold">{salaryInsight.marketComparison}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all"
                style={{ width: `${salaryInsight.marketComparison}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
            <div>
              <div className="text-sm opacity-90 mb-1">League</div>
              <div className="text-xl font-bold">{salaryInsight.league}</div>
            </div>
            <div>
              <div className="text-sm opacity-90 mb-1">Experience</div>
              <div className="text-xl font-bold">{candidate.experience} years</div>
            </div>
            <div>
              <div className="text-sm opacity-90 mb-1">Ability Score</div>
              <div className="text-xl font-bold">{candidate.abilityScore}</div>
            </div>
          </div>
        </div>

        {/* Salary Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Skill Premiums */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Zap className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Skill Premiums</h2>
            </div>
            <div className="space-y-4">
              {salaryInsight.skillPremiums.map((skill: { skill: string; premium: number }) => (
                <div key={skill.skill}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{skill.skill}</span>
                    <span className="text-green-600 font-semibold">+${skill.premium.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${(skill.premium / 20000) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Skill Premium</span>
                <span className="font-bold text-gray-900">
                  +${salaryInsight.skillPremiums.reduce((sum: number, s: { premium: number }) => sum + s.premium, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Growth Potential */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Growth Potential</h2>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-600 mb-2">If you reach Diamond League:</div>
                <div className="text-2xl font-bold text-green-600">
                  ${(salaryInsight.recommendedSalary.max * 1.2).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 mt-1">+20% potential increase</div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600 mb-2">With 2 more years experience:</div>
                <div className="text-2xl font-bold text-blue-600">
                  ${(salaryInsight.recommendedSalary.max * 1.35).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 mt-1">+35% potential increase</div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600 mb-2">Adding 5 premium skills:</div>
                <div className="text-2xl font-bold text-purple-600">
                  ${(salaryInsight.recommendedSalary.max * 1.15).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 mt-1">+15% potential increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Market Insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Industry Average</div>
              <div className="text-2xl font-bold text-gray-900">$115,000</div>
              <div className="text-xs text-gray-500 mt-1">For your experience level</div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Top 10% Earners</div>
              <div className="text-2xl font-bold text-gray-900">$180,000</div>
              <div className="text-xs text-gray-500 mt-1">In similar roles</div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Your Percentile</div>
              <div className="text-2xl font-bold text-gray-900">85th</div>
              <div className="text-xs text-gray-500 mt-1">Among all candidates</div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6" />
            <h2 className="text-lg font-semibold">How to Increase Your Salary Range</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Improve League Ranking
              </h3>
              <p className="text-sm opacity-90">Move up to Diamond League for a 15-20% salary boost</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Learn Premium Skills
              </h3>
              <p className="text-sm opacity-90">Focus on high-demand skills like Kubernetes, AWS, System Design</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Get Certifications
              </h3>
              <p className="text-sm opacity-90">Professional certifications can add 5-10% to your value</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Build Complex Projects
              </h3>
              <p className="text-sm opacity-90">Showcase advanced projects to demonstrate expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
