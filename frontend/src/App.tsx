import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { ResumeUpload } from './pages/ResumeUpload';
import { TakeExam } from './pages/TakeExam';
import { ExamResults } from './pages/ExamResults';
import { Jobs } from './pages/Jobs';
import { Assessments } from './pages/Assessments';
import { League } from './pages/League';
import { Salary } from './pages/Salary';
import { Profile } from './pages/Profile';
import { Notifications } from './pages/Notifications';
import { Candidates } from './pages/Candidates';
import { MissionControl } from './pages/MissionControl';
import { JDIntelligence } from './pages/JDIntelligence';
import { ResumeIntelligence } from './pages/ResumeIntelligence';
import { AntiCheatingMonitor } from './pages/AntiCheatingMonitor';
import { Analytics } from './pages/Analytics';
import { SkillMatching } from './pages/SkillMatching';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />

        {/* Main Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/resume-upload" element={<ProtectedRoute><ResumeUpload /></ProtectedRoute>} />
        <Route path="/take-exam" element={<ProtectedRoute><TakeExam /></ProtectedRoute>} />
        <Route path="/exam-results" element={<ProtectedRoute><ExamResults /></ProtectedRoute>} />

        {/* Standard Routes */}
        <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
        <Route path="/assessments" element={<ProtectedRoute><Assessments /></ProtectedRoute>} />
        <Route path="/league" element={<ProtectedRoute><League /></ProtectedRoute>} />
        <Route path="/salary" element={<ProtectedRoute><Salary /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path="/candidates" element={<ProtectedRoute><Candidates /></ProtectedRoute>} />

        {/* Advanced Features */}
        <Route path="/mission-control" element={<ProtectedRoute><MissionControl /></ProtectedRoute>} />
        <Route path="/jd-intelligence" element={<ProtectedRoute><JDIntelligence /></ProtectedRoute>} />
        <Route path="/resume-intelligence" element={<ProtectedRoute><ResumeIntelligence /></ProtectedRoute>} />
        <Route path="/anti-cheating" element={<ProtectedRoute><AntiCheatingMonitor /></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
        <Route path="/skill-matching" element={<ProtectedRoute><SkillMatching /></ProtectedRoute>} />

        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/signup"} />} />
      </Routes>
    </>
  );
}

export function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}
