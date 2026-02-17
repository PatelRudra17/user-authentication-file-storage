import { useState } from 'react';
import { FileText, AlertTriangle, CheckCircle, Sparkles, Target, Users, Code, TrendingUp } from 'lucide-react';

export function JDIntelligence() {
  const [jdText, setJdText] = useState('');
  const [parsing, setParsing] = useState(false);
  const [parsed, setParsed] = useState(false);

  const handleParse = () => {
    setParsing(true);
    setTimeout(() => {
      setParsing(false);
      setParsed(true);
    }, 2000);
  };

  const mockParsedData = {
    roleTitle: 'Full Stack Developer',
    seniority: 'Entry',
    department: 'Engineering',
    industry: 'Technology',
    workType: 'Hybrid',
    experienceRange: { min: 0, max: 2 },
    mandatorySkills: ['React', 'Node.js', 'JavaScript', 'Git'],
    optionalSkills: ['TypeScript', 'Docker', 'AWS'],
    skillDepth: {
      'React': 'Intermediate',
      'Node.js': 'Beginner',
      'JavaScript': 'Intermediate',
      'Git': 'Beginner'
    },
    qualityIssues: [
      'Experience requirement (5+ years) conflicts with Entry-level position',
      'Too many mandatory skills (12) for entry-level role',
      'Advanced skill depth expected for junior position'
    ],
    recommendations: [
      'Reduce mandatory skills from 12 to 4-6 for entry-level',
      'Adjust experience requirement to 0-2 years',
      'Move advanced skills to "nice-to-have" category',
      'Add learning opportunities to attract talent'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">JD Intelligence Engine</h1>
          <p className="text-gray-600 mt-1">AI-powered job description parsing and quality validation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-900">Job Description Input</h2>
            </div>
            
            <textarea
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              placeholder="Paste your job description here..."
              className="w-full h-96 p-4 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            />

            <button
              onClick={handleParse}
              disabled={!jdText || parsing}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {parsing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Parsing JD...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Parse with AI
                </>
              )}
            </button>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {parsed && (
              <>
                {/* Basic Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Extracted Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Role Title</div>
                      <div className="font-medium text-gray-900">{mockParsedData.roleTitle}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Seniority</div>
                      <div className="font-medium text-gray-900">{mockParsedData.seniority}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Department</div>
                      <div className="font-medium text-gray-900">{mockParsedData.department}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Work Type</div>
                      <div className="font-medium text-gray-900">{mockParsedData.workType}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Experience Range</div>
                      <div className="font-medium text-gray-900">
                        {mockParsedData.experienceRange.min}-{mockParsedData.experienceRange.max} years
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Industry</div>
                      <div className="font-medium text-gray-900">{mockParsedData.industry}</div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-4 h-4 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Skills Structure</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Mandatory Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {mockParsedData.mandatorySkills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Optional Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {mockParsedData.optionalSkills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skill Depth */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-4 h-4 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Expected Skill Depth</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(mockParsedData.skillDepth).map(([skill, depth]) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-gray-900">{skill}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          depth === 'Advanced' ? 'bg-purple-100 text-purple-700' :
                          depth === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {depth}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality Issues */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <h3 className="font-semibold text-gray-900">Quality Issues Detected</h3>
                  </div>
                  <ul className="space-y-2">
                    {mockParsedData.qualityIssues.map((issue, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-yellow-600">⚠</span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendations */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900">AI Recommendations</h3>
                  </div>
                  <ul className="space-y-2">
                    {mockParsedData.recommendations.map((rec, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all">
                    Accept & Post Job
                  </button>
                  <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Edit JD
                  </button>
                </div>
              </>
            )}

            {!parsed && (
              <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No JD Parsed Yet</h3>
                <p className="text-gray-600">
                  Paste a job description and click "Parse with AI" to analyze it
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Skill Detection</h3>
            </div>
            <p className="text-sm text-gray-600">
              AI identifies core technical skills, soft skills, tools, and frameworks from JD text
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Entry-Level Focus</h3>
            </div>
            <p className="text-sm text-gray-600">
              Detects unrealistic requirements and suggests adjustments for junior roles
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Quality Validation</h3>
            </div>
            <p className="text-sm text-gray-600">
              Flags contradictions, overloading, and mismatches between level and requirements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
