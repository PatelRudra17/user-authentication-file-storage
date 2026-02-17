import { useState } from 'react';
import { mockCandidates } from '@/data/mockData';
import { Search, Filter, Award, Code, Briefcase, Star } from 'lucide-react';

export function Candidates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeague, setSelectedLeague] = useState<string>('all');

  const candidates = Object.entries(mockCandidates).map(([id, candidate]) => ({
    id,
    ...candidate,
    user: { name: id === 'candidate-1' ? 'Alex Johnson' : 'Unknown', email: `${id}@example.com` }
  }));

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch = candidate.user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLeague = selectedLeague === 'all' || candidate.league === selectedLeague;
    return matchesSearch && matchesLeague;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Candidate Pool</h1>
          <p className="text-gray-600 mt-1">Browse and filter candidates based on skills and league</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedLeague}
                onChange={(e) => setSelectedLeague(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Leagues</option>
                <option value="Diamond">Diamond</option>
                <option value="Platinum">Platinum</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Bronze</option>
              </select>
            </div>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {candidate.user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{candidate.user.name}</h3>
                    <p className="text-sm text-gray-600">{candidate.experience} years experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium text-gray-900">4.8</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-100">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900">{candidate.league}</span>
                  </div>
                  <div className="text-xs text-gray-500">League</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Code className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">{candidate.skills.length}</span>
                  </div>
                  <div className="text-xs text-gray-500">Skills</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Briefcase className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">{candidate.projects.length}</span>
                  </div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs font-medium text-gray-700 mb-2">Top Skills:</div>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.slice(0, 5).map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all">
                  View Profile
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Contact
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                <span className="text-gray-600">Ability Score</span>
                <span className="font-semibold text-gray-900">{candidate.abilityScore}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No candidates found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
