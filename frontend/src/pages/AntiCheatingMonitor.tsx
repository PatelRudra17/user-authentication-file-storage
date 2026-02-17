import { Shield, Camera, Monitor, AlertTriangle, CheckCircle, Eye, Activity, Lock } from 'lucide-react';

export function AntiCheatingMonitor() {
  const mockMonitoringData = {
    assessmentId: 'assessment-1',
    candidateName: 'Anonymous Candidate #12345',
    status: 'In Progress',
    startTime: '2024-01-15T10:00:00Z',
    identityVerification: true,
    livenessDetection: true,
    deviceFingerprint: 'FP-8A9B-3C4D-5E6F',
    lockdownBrowser: true,
    screenMonitoring: true,
    audioAnomalies: [],
    copyPasteDetections: 0,
    ipDuplicate: false,
    plagiarismScore: 5,
    behavioralAnomalies: [],
    typingDynamics: {
      averageSpeed: 65,
      consistency: 92
    },
    timeAnomalies: false,
    cheatLikelihood: 8,
    humanReviewRequired: false,
    events: [
      { time: '10:00:15', type: 'identity_verified', severity: 'success', message: 'Identity verified via webcam' },
      { time: '10:00:45', type: 'liveness_check', severity: 'success', message: 'Liveness detection passed' },
      { time: '10:05:30', type: 'focus_lost', severity: 'warning', message: 'Tab switched - returned in 3s' },
      { time: '10:12:00', type: 'screen_normal', severity: 'success', message: 'No suspicious screen activity' },
      { time: '10:18:22', type: 'typing_normal', severity: 'success', message: 'Typing pattern consistent' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Anti-Cheating Monitor</h1>
          <p className="text-gray-600 mt-1">Real-time proctoring and anomaly detection</p>
        </div>

        {/* Status Overview */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm opacity-90 mb-1">Assessment Status</div>
              <h2 className="text-2xl font-bold">{mockMonitoringData.status}</h2>
              <p className="text-sm opacity-90 mt-1">{mockMonitoringData.candidateName}</p>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">Trust Score</div>
              <div className="text-3xl font-bold">{100 - mockMonitoringData.cheatLikelihood}%</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-xs opacity-90 mb-1">Identity</div>
              <div className="flex items-center gap-2">
                {mockMonitoringData.identityVerification ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Verified</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">Pending</span>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-xs opacity-90 mb-1">Liveness</div>
              <div className="flex items-center gap-2">
                {mockMonitoringData.livenessDetection ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Active</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">Failed</span>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-xs opacity-90 mb-1">Lockdown</div>
              <div className="flex items-center gap-2">
                {mockMonitoringData.lockdownBrowser ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span className="text-sm font-medium">Enabled</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">Disabled</span>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-xs opacity-90 mb-1">Monitoring</div>
              <div className="flex items-center gap-2">
                {mockMonitoringData.screenMonitoring ? (
                  <>
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">Active</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">Inactive</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Detection Metrics */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Detection Metrics</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Copy/Paste Attempts</span>
                    <span className={`font-bold ${mockMonitoringData.copyPasteDetections > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {mockMonitoringData.copyPasteDetections}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${mockMonitoringData.copyPasteDetections > 0 ? 'bg-red-500' : 'bg-green-500'}`} 
                      style={{ width: `${Math.min(mockMonitoringData.copyPasteDetections * 10, 100)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Plagiarism Score</span>
                    <span className={`font-bold ${mockMonitoringData.plagiarismScore > 30 ? 'text-red-600' : 'text-green-600'}`}>
                      {mockMonitoringData.plagiarismScore}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${mockMonitoringData.plagiarismScore > 30 ? 'bg-red-500' : 'bg-green-500'}`}
                      style={{ width: `${mockMonitoringData.plagiarismScore}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Typing Speed (WPM)</span>
                    <span className="font-bold text-gray-900">{mockMonitoringData.typingDynamics.averageSpeed}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(mockMonitoringData.typingDynamics.averageSpeed, 100)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Typing Consistency</span>
                    <span className="font-bold text-green-600">{mockMonitoringData.typingDynamics.consistency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${mockMonitoringData.typingDynamics.consistency}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Cheat Likelihood</span>
                  <span className={`text-lg font-bold ${
                    mockMonitoringData.cheatLikelihood > 70 ? 'text-red-600' :
                    mockMonitoringData.cheatLikelihood > 30 ? 'text-orange-600' :
                    'text-green-600'
                  }`}>
                    {mockMonitoringData.cheatLikelihood}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className={`h-3 rounded-full ${
                    mockMonitoringData.cheatLikelihood > 70 ? 'bg-red-500' :
                    mockMonitoringData.cheatLikelihood > 30 ? 'bg-orange-500' :
                    'bg-green-500'
                  }`}
                    style={{ width: `${mockMonitoringData.cheatLikelihood}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold text-gray-900">Activity Log</h2>
              </div>

              <div className="space-y-3">
                {mockMonitoringData.events.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className={`p-1.5 rounded-full mt-0.5 ${
                      event.severity === 'success' ? 'bg-green-100' :
                      event.severity === 'warning' ? 'bg-orange-100' :
                      'bg-red-100'
                    }`}>
                      {event.severity === 'success' ? (
                        <CheckCircle className={`w-4 h-4 text-green-600`} />
                      ) : (
                        <AlertTriangle className={`w-4 h-4 ${event.severity === 'warning' ? 'text-orange-600' : 'text-red-600'}`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{event.message}</span>
                        <span className="text-xs text-gray-500">{event.time}</span>
                      </div>
                      <span className="text-xs text-gray-600 capitalize">{event.type.replace('_', ' ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Proctoring Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Active Features</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Webcam Monitoring</div>
                    <div className="text-xs text-gray-600">Continuous face detection</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Monitor className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Screen Recording</div>
                    <div className="text-xs text-gray-600">Full session capture</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Browser Lockdown</div>
                    <div className="text-xs text-gray-600">Tab switching blocked</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Behavioral Analysis</div>
                    <div className="text-xs text-gray-600">Pattern recognition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Device Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-600 mb-1">Fingerprint</div>
                  <div className="font-mono text-xs text-gray-900">{mockMonitoringData.deviceFingerprint}</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">IP Duplicate</div>
                  <div className={mockMonitoringData.ipDuplicate ? 'text-red-600 font-medium' : 'text-green-600 font-medium'}>
                    {mockMonitoringData.ipDuplicate ? 'Detected' : 'None'}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            {mockMonitoringData.humanReviewRequired && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">Review Required</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Anomalies detected. Human review needed before finalizing results.
                </p>
                <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Start Review
                </button>
              </div>
            )}

            {!mockMonitoringData.humanReviewRequired && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Clean Session</h3>
                </div>
                <p className="text-sm text-gray-700">
                  No significant anomalies detected. Assessment appears legitimate.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
