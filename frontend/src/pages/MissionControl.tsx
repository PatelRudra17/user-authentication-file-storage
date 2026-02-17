import { Shield, Target, Users, TrendingUp, AlertCircle, CheckCircle, Eye, Scale } from 'lucide-react';

export function MissionControl() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mission Control</h1>
          <p className="text-gray-600 mt-1">Platform Philosophy & Core Principles</p>
        </div>

        {/* Core Philosophy */}
        <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl p-8 shadow-xl text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg opacity-90 mb-6">
            Skill-first hiring that removes resume bias, detects hidden talent, and allows freshers 
            to compete with experienced candidates through ability-based assessment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Target className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">Skill-First</h3>
              <p className="text-sm opacity-90">Ability matters more than pedigree</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Users className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">Equal Opportunity</h3>
              <p className="text-sm opacity-90">Everyone gets a fair chance to prove themselves</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <TrendingUp className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">Growth Focus</h3>
              <p className="text-sm opacity-90">Continuous learning and improvement</p>
            </div>
          </div>
        </div>

        {/* Ethical Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Bias Minimization</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Gender Neutrality</div>
                  <div className="text-sm text-gray-600">No gender-based discrimination in evaluation</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">College Bias Removal</div>
                  <div className="text-sm text-gray-600">Education institution doesn't affect scoring</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Name Anonymization</div>
                  <div className="text-sm text-gray-600">Identity-blind initial screening</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Age & Location Neutrality</div>
                  <div className="text-sm text-gray-600">Only skills and ability matter</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Role Scope Control</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Entry-Level Prioritization</div>
                  <div className="text-sm text-gray-600">Focus on intern, junior, and entry-level roles</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Experience Ceiling Guardrails</div>
                  <div className="text-sm text-gray-600">Prevent unrealistic experience requirements</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Overqualification Detection</div>
                  <div className="text-sm text-gray-600">Flag when job requirements don't match level</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Learning Capacity Estimation</div>
                  <div className="text-sm text-gray-600">Assess ability to learn, not just current knowledge</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency & Oversight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Transparency Framework</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Scoring Transparency</h3>
                <p className="text-sm text-gray-600">
                  Candidates can see exactly how they're scored and why
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Decision Explanation</h3>
                <p className="text-sm text-gray-600">
                  Every hire/reject decision comes with detailed reasoning
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Human Override Support</h3>
                <p className="text-sm text-gray-600">
                  Recruiters can override AI decisions with justification
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Scale className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Audit & Compliance</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Full Audit Trail</h3>
                <p className="text-sm text-gray-600">
                  Every action logged for review and compliance
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Bias Detection</h3>
                <p className="text-sm text-gray-600">
                  AI monitors for and flags potential bias in decisions
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Equal Opportunity Scoring</h3>
                <p className="text-sm text-gray-600">
                  Everyone evaluated by the same objective criteria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Platform Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
              <div className="text-sm text-gray-600">Bias Reduction</div>
              <div className="text-xs text-gray-500 mt-1">vs traditional hiring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
              <div className="text-xs text-gray-500 mt-1">in hiring process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
              <div className="text-sm text-gray-600">Hidden Talent Found</div>
              <div className="text-xs text-gray-500 mt-1">overlooked by resumes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">Candidate Satisfaction</div>
              <div className="text-xs text-gray-500 mt-1">fair evaluation process</div>
            </div>
          </div>
        </div>

        {/* Warnings */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Important Safeguards</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Resume de-weighting: Past credentials matter less than proven ability</li>
                <li>• Performance-first ranking: Actual test results trump self-reported skills</li>
                <li>• Human review triggers: Edge cases always get human oversight</li>
                <li>• Economic background neutrality: Opportunities available to all, regardless of background</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
