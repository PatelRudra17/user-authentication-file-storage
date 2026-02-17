import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bell, LogOut, User, Briefcase, FileText, BarChart, Award, DollarSign, Target, Shield, Brain, Upload } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  const candidateLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: BarChart },
    { to: '/resume-upload', label: 'Resume Upload', icon: Upload, highlight: true },
    { to: '/jobs', label: 'Jobs', icon: Briefcase },
    { to: '/assessments', label: 'Assessments', icon: FileText },
    { to: '/league', label: 'League', icon: Award },
    { to: '/salary', label: 'Salary', icon: DollarSign },
  ];

  const recruiterLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: BarChart },
    { to: '/jobs', label: 'My Jobs', icon: Briefcase },
    { to: '/candidates', label: 'Candidates', icon: User },
  ];

  const aiLinks = [
    { to: '/mission-control', label: 'Mission Control', icon: Target },
    { to: '/jd-intelligence', label: 'JD Intelligence', icon: Brain },
    { to: '/resume-intelligence', label: 'Resume AI', icon: FileText },
    { to: '/anti-cheating', label: 'Security Monitor', icon: Shield },
    { to: '/analytics', label: 'Analytics', icon: BarChart },
  ];

  const links = user.role === 'candidate' ? candidateLinks : recruiterLinks;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/dashboard" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TalentLeague</span>
              </div>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-2 items-center">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.to;
                const highlight = 'highlight' in link && link.highlight;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      highlight 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md'
                        : isActive
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                );
              })}
              
              {/* AI Tools Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  AI Tools
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showMore && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {aiLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = location.pathname === link.to;
                      return (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setShowMore(false)}
                          className={`flex items-center px-4 py-2 text-sm hover:bg-gray-50 ${
                            isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'
                          }`}
                        >
                          <Icon className="w-4 h-4 mr-3" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/notifications"
              className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100 relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>
            <Link
              to="/profile"
              className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
