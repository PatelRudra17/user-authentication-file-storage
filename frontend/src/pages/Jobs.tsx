import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { mockJobs } from '@/data/mockData';
import { Briefcase, DollarSign, Clock, Search, Filter } from 'lucide-react';

export function Jobs() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || job.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const calculateMatch = () => {
    // Simple mock calculation
    return Math.floor(Math.random() * 20) + 80;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {user?.role === 'candidate' ? 'Job Opportunities' : 'Your Job Postings'}
          </h1>
          <p className="text-gray-600 mt-1">
            {user?.role === 'candidate'
              ? 'Find jobs that match your skills and experience'
              : 'Manage and track your active job postings'}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Levels</option>
                <option value="Entry">Entry Level</option>
                <option value="Mid">Mid Level</option>
                <option value="Senior">Senior Level</option>
                <option value="Lead">Lead Level</option>
              </select>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => {
            const matchScore = calculateMatch();
            return (
              <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-gray-600">{job.companyName}</p>
                  </div>
                  {user?.role === 'candidate' && (
                    <div className="ml-4">
                      <div className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                        {matchScore}% Match
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

                {/* Job Details */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    {job.level}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {job.experienceRange.min}-{job.experienceRange.max} years
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                    </div>
                  )}
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-700 mb-2">Required Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {job.requiredSkills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {user?.role === 'candidate' ? (
                    <>
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all">
                        Apply Now
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all">
                        View Candidates
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Edit
                      </button>
                    </>
                  )}
                </div>

                {user?.role === 'recruiter' && (
                  <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-600">
                    <span className="font-medium">8</span> applications • <span className="font-medium">3</span> matches
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
