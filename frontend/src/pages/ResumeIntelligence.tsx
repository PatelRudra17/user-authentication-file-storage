import { useState } from 'react';
import { Upload, Brain, AlertCircle, CheckCircle, TrendingUp, Code, Briefcase, Award } from 'lucide-react';

export function ResumeIntelligence() {
  const [uploaded, setUploaded] = useState(false);
  const [parsing, setParsing] = useState(false);

  const handleUpload = () => {
    setParsing(true);
    setTimeout(() => {
      setParsing(false);
      setUploaded(true);
    }, 3000);
  };

  const mockParsedResume = {
    skills: [
      { name: 'React', proficiency: 'Advanced', evidenceBacked: true, suspicionScore: 5 },
      { name: 'Node.js', proficiency: 'Intermediate', evidenceBacked: true, suspicionScore: 10 },
      { name: 'Python', proficiency: 'Advanced', evidenceBacked: true, suspicionScore: 8 },
      { name: 'Machine Learning', proficiency: 'Expert', evidenceBacked: false, suspicionScore: 85 },
      { name: 'System Design', proficiency: 'Advanced', evidenceBacked: false, suspicionScore: 70 }
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        complexity: 85,
        role: 'Full Stack Developer',
        techStack: ['React', 'Node.js', 'MongoDB'],
        ownership: 90,
        innovation: 75
      },
      {
        name: 'AI Chatbot',
        complexity: 75,
        role: 'Backend Developer',
        techStack: ['Python', 'NLP', 'FastAPI'],
        ownership: 80,
        innovation: 85
      }
    ],
    experience: {
      duration: 3,
      internships: 2,
      freelance: 5,
      gaps: 0
    },
    hiddenSkills: ['TypeScript', 'Docker', 'Testing'],
    transferableSkills: ['Problem Solving', 'Team Leadership', 'Communication']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Intelligence Engine</h1>
          <p className="text-gray-600 mt-1">AI-powered resume parsing, skill extraction & proficiency inference</p>
        </div>

        {!uploaded && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-12 shadow-sm border-2 border-dashed border-gray-300">
              <div className="text-center">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Resume</h3>
                <p className="text-gray-600 mb-6">
                  PDF, DOC, or DOCX format (Max 5MB)
                </p>
                <button
                  onClick={handleUpload}
                  disabled={parsing}
                  className="px-8 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all disabled:opacity-50"
                >
                  {parsing ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Parsing Resume...
                    </span>
                  ) : (
                    'Select File'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {uploaded && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Skills Extraction */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Extracted Skills</h2>
                </div>

                <div className="space-y-3">
                  {mockParsedResume.skills.map((skill) => (
                    <div key={skill.name} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-900">{skill.name}</h3>
                            {skill.evidenceBacked ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-orange-500" />
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            {skill.evidenceBacked ? 'Evidence-backed' : 'Needs verification'}
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          skill.proficiency === 'Expert' ? 'bg-purple-100 text-purple-700' :
                          skill.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                          skill.proficiency === 'Intermediate' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {skill.proficiency}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-600">Exaggeration Risk</span>
                            <span className={`font-medium ${
                              skill.suspicionScore > 70 ? 'text-red-600' :
                              skill.suspicionScore > 30 ? 'text-orange-600' :
                              'text-green-600'
                            }`}>{skill.suspicionScore}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${
                                skill.suspicionScore > 70 ? 'bg-red-500' :
                                skill.suspicionScore > 30 ? 'bg-orange-500' :
                                'bg-green-500'
                              }`}
                              style={{ width: `${skill.suspicionScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Analysis */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Project Analysis</h2>
                </div>

                <div className="space-y-4">
                  {mockParsedResume.projects.map((project) => (
                    <div key={project.name} className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">{project.name}</h3>
                      
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Complexity</div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                              style={{ width: `${project.complexity}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Ownership</div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                              style={{ width: `${project.ownership}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Innovation</div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                              style={{ width: `${project.innovation}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Role</div>
                          <div className="text-sm font-medium text-gray-900">{project.role}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-600 mb-2">Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Experience Summary */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Experience Summary</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Total Duration</div>
                    <div className="text-2xl font-bold text-gray-900">{mockParsedResume.experience.duration} years</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Internships</div>
                      <div className="text-lg font-semibold text-gray-900">{mockParsedResume.experience.internships}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Freelance</div>
                      <div className="text-lg font-semibold text-gray-900">{mockParsedResume.experience.freelance}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Career Gaps</div>
                      <div className="text-lg font-semibold text-gray-900">{mockParsedResume.experience.gaps} months</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hidden Skills */}
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5" />
                  <h3 className="font-semibold">Hidden Skills Detected</h3>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  AI identified skills not explicitly mentioned but inferred from projects
                </p>
                <div className="flex flex-wrap gap-2">
                  {mockParsedResume.hiddenSkills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Transferable Skills */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Transferable Skills</h3>
                </div>
                <div className="space-y-2">
                  {mockParsedResume.transferableSkills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-600 hover:to-indigo-700 transition-all">
                Generate Assessment
              </button>
              <button className="w-full px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Download Analysis
              </button>
            </div>
          </div>
        )}

        {/* Info Section */}
        {uploaded && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Analysis Features</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Skill Proficiency Inference:</strong> AI estimates skill levels based on project complexity and experience</li>
                  <li>• <strong>Exaggeration Detection:</strong> Flags skills with weak evidence or suspicious claims</li>
                  <li>• <strong>Hidden Talent Discovery:</strong> Identifies valuable skills not explicitly mentioned</li>
                  <li>• <strong>Project Complexity Scoring:</strong> Evaluates technical sophistication of each project</li>
                  <li>• <strong>Evidence-Based Validation:</strong> Cross-references claims with actual project work</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
