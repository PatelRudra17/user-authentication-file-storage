import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { mockCandidates } from '@/data/mockData';
import { User, Mail, Phone, MapPin, Upload, Briefcase, GraduationCap, Award as AwardIcon, Code } from 'lucide-react';

export function Profile() {
  const { user } = useAuth();
  const candidate = user ? mockCandidates[user.id] : null;
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'projects' | 'education'>('overview');

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600 mt-1">{user.email}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                  {user.contactInfo.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4" />
                      {user.contactInfo.phone}
                    </div>
                  )}
                  {user.contactInfo.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {user.contactInfo.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {user.role === 'candidate' && candidate && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <AwardIcon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{candidate.league}</div>
                    <div className="text-xs text-gray-600">League</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{candidate.skills.length}</div>
                    <div className="text-xs text-gray-600">Skills</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Briefcase className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{candidate.projects.length}</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{candidate.certifications.length}</div>
                    <div className="text-xs text-gray-600">Certifications</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 px-4 font-medium transition-colors ${activeTab === 'overview'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`pb-3 px-4 font-medium transition-colors ${activeTab === 'skills'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`pb-3 px-4 font-medium transition-colors ${activeTab === 'projects'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`pb-3 px-4 font-medium transition-colors ${activeTab === 'education'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Education
              </button>
            </div>

            {/* Content */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Resume</h2>
                  {candidate.uploadedFiles.length > 0 ? (
                    <div className="space-y-3">
                      {candidate.uploadedFiles.map((file) => (
                        <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-100 rounded-lg">
                              <Upload className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{file.filename}</div>
                              <div className="text-sm text-gray-500">Uploaded {new Date(file.uploadedAt).toLocaleDateString()}</div>
                            </div>
                          </div>
                          <button className="text-sm text-indigo-600 hover:text-indigo-700">Download</button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <button className="w-full py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Click to upload resume</div>
                    </button>
                  )}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h2>
                  <div className="flex flex-wrap gap-2">
                    {candidate.certifications.map((cert, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
                  <button className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    + Add Skill
                  </button>
                </div>
                <div className="space-y-4">
                  {candidate.skills.map((skill, idx) => (
                    <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">{skill.name}</h3>
                          <p className="text-sm text-gray-600">{skill.category}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${skill.proficiency === 'Expert' ? 'bg-purple-100 text-purple-700' :
                            skill.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                              skill.proficiency === 'Intermediate' ? 'bg-green-100 text-green-700' :
                                'bg-gray-100 text-gray-700'
                          }`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{skill.yearsOfExperience} years of experience</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
                  <button className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    + Add Project
                  </button>
                </div>
                <div className="space-y-4">
                  {candidate.projects.map((project) => (
                    <div key={project.id} className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="font-medium">{project.role}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Education</h2>
                  <button className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    + Add Education
                  </button>
                </div>
                <div className="space-y-4">
                  {candidate.education.map((edu, idx) => (
                    <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-600 mt-1">{edu.institution}</p>
                          <p className="text-sm text-gray-500 mt-1">{edu.field}</p>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {user.role === 'recruiter' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="TechCorp Solutions"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Contact Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  readOnly
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
