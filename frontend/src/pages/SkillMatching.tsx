import { Target, TrendingUp, AlertTriangle, CheckCircle, Clock, Award, Brain } from 'lucide-react';

export function SkillMatching() {
  const mockMatch = {
    candidateName: 'Alex Johnson',
    jobTitle: 'Senior Full Stack Developer',
    directMatch: 85,
    gapAnalysis: {
      missingSkills: ['Kubernetes', 'GraphQL'],
      weakSkills: ['System Design'],
      criticalGaps: ['Kubernetes'],
      trainableGaps: ['GraphQL', 'System Design'],
      learningCurveEstimate: 3
    },
    matchScore: {
      overall: 87,
      requiredSkillsMatch: 90,
      optionalSkillsMatch: 75,
      depthMatch: 85,
      recencyWeight: 92
    },
    provenSkills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Python'],
    unverifiedSkills: ['Machine Learning', 'System Design'],
    recommendations: [
      'Strong match overall - candidate demonstrates solid fundamentals',
      'Missing Kubernetes is trainable within 2-3 months',
      'Consider for interview based on strong proven skills',
      'Recommend system design assessment during interview'
    ],
    riskFactors: [
      'Limited system design experience for senior role',
      'No hands-on Kubernetes exposure'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Skill Matching Engine</h1>
          <p className="text-gray-600 mt-1">AI-powered candidate-job matching with gap analysis</p>
        </div>

        {/* Match Overview */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-xl text-white mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm opacity-90 mb-1">Candidate Match Score</div>
              <h2 className="text-4xl font-bold">{mockMatch.matchScore.overall}%</h2>
              <p className="text-sm opacity-90 mt-2">{mockMatch.candidateName} → {mockMatch.jobTitle}</p>
            </div>
            <div className="w-32 h-32 relative">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="white"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(mockMatch.matchScore.overall / 100) * 352} 352`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Target className="w-12 h-12" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-xs opacity-90 mb-1">Required Skills</div>
              <div className="text-2xl font-bold">{mockMatch.matchScore.requiredSkillsMatch}%</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-xs opacity-90 mb-1">Optional Skills</div>
              <div className="text-2xl font-bold">{mockMatch.matchScore.optionalSkillsMatch}%</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-xs opacity-90 mb-1">Skill Depth</div>
              <div className="text-2xl font-bold">{mockMatch.matchScore.depthMatch}%</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-xs opacity-90 mb-1">Recency</div>
              <div className="text-2xl font-bold">{mockMatch.matchScore.recencyWeight}%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Proven Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Proven Skills</h2>
            </div>
            <div className="space-y-3">
              {mockMatch.provenSkills.map((skill) => (
                <div key={skill} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-gray-900">{skill}</span>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Unverified Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Needs Verification</h2>
            </div>
            <div className="space-y-3">
              {mockMatch.unverifiedSkills.map((skill) => (
                <div key={skill} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span className="font-medium text-gray-900">{skill}</span>
                  </div>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                    Assess
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gap Analysis */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Gap Analysis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Missing Skills</div>
              <div className="space-y-2">
                {mockMatch.gapAnalysis.missingSkills.map((skill) => (
                  <div key={skill} className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Weak Skills</div>
              <div className="space-y-2">
                {mockMatch.gapAnalysis.weakSkills.map((skill) => (
                  <div key={skill} className="px-3 py-2 bg-yellow-50 text-yellow-700 rounded-lg text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Critical Gaps</div>
              <div className="space-y-2">
                {mockMatch.gapAnalysis.criticalGaps.map((skill) => (
                  <div key={skill} className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Trainable Gaps</div>
              <div className="space-y-2">
                {mockMatch.gapAnalysis.trainableGaps.map((skill) => (
                  <div key={skill} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
            <Clock className="w-5 h-5 text-gray-600" />
            <div>
              <div className="text-sm font-medium text-gray-900">Learning Curve Estimate</div>
              <div className="text-sm text-gray-600">
                {mockMatch.gapAnalysis.learningCurveEstimate} months to close critical gaps
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6" />
              <h2 className="text-lg font-semibold">AI Recommendations</h2>
            </div>
            <div className="space-y-3">
              {mockMatch.recommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Risk Factors</h2>
            </div>
            <div className="space-y-3">
              {mockMatch.riskFactors.map((risk, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{risk}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Hiring Recommendation</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Proceed to Interview</strong> - Strong candidate with minor trainable gaps. 
                Consider for technical interview with focus on system design assessment.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all">
                  Schedule Interview
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Request Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
