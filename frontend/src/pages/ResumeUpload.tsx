import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, Loader, CheckCircle, Brain, Code } from 'lucide-react';

interface ParsedSkill {
  name: string;
  proficiency: 'Basic' | 'Intermediate' | 'Advanced';
  source: string;
}

interface ParsedProject {
  name: string;
  description: string;
  technologies: string[];
  complexity: 'Low' | 'Medium' | 'High';
}

interface ParsedData {
  name: string;
  email: string;
  phone: string;
  skills: ParsedSkill[];
  projects: ParsedProject[];
  experience: string;
  education: string;
}

export function ResumeUpload() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);

  // Mock AI Resume Parser
  const parseResume = async (_file: File): Promise<ParsedData> => {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock parsed data - In real app, this would call an AI API
    const mockData: ParsedData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234-567-8900',
      skills: [
        { name: 'JavaScript', proficiency: 'Advanced', source: 'Project: E-commerce Platform' },
        { name: 'React', proficiency: 'Advanced', source: 'Project: E-commerce Platform, Dashboard App' },
        { name: 'Node.js', proficiency: 'Intermediate', source: 'Project: REST API Development' },
        { name: 'TypeScript', proficiency: 'Intermediate', source: 'Project: E-commerce Platform' },
        { name: 'Python', proficiency: 'Basic', source: 'Education: CS Fundamentals' },
        { name: 'MongoDB', proficiency: 'Intermediate', source: 'Project: User Management System' },
        { name: 'Git', proficiency: 'Advanced', source: 'Multiple Projects' },
        { name: 'Docker', proficiency: 'Basic', source: 'Internship: DevOps Tasks' },
        { name: 'AWS', proficiency: 'Basic', source: 'Certification: AWS Cloud Practitioner' },
        { name: 'REST API', proficiency: 'Advanced', source: 'Project: REST API Development' },
      ],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Full-stack e-commerce application with payment integration',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
          complexity: 'High'
        },
        {
          name: 'Task Management Dashboard',
          description: 'Real-time collaborative task management tool',
          technologies: ['React', 'Firebase', 'Material-UI'],
          complexity: 'Medium'
        },
        {
          name: 'Weather Forecast App',
          description: 'Mobile-responsive weather application',
          technologies: ['JavaScript', 'OpenWeather API', 'CSS'],
          complexity: 'Low'
        }
      ],
      experience: '1 year (6 months internship + 6 months personal projects)',
      education: 'B.Tech in Computer Science - XYZ University (2023)'
    };

    return mockData;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/pdf' || droppedFile.name.endsWith('.pdf'))) {
      setFile(droppedFile);
      await processResume(droppedFile);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      await processResume(selectedFile);
    }
  };

  const processResume = async (file: File) => {
    setIsProcessing(true);
    try {
      const data = await parseResume(file);
      setParsedData(data);
      // Store in localStorage for exam generation
      localStorage.setItem('parsedResumeData', JSON.stringify(data));
    } catch (error) {
      console.error('Error processing resume:', error);
      alert('Error processing resume. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const generateExam = () => {
    navigate('/take-exam');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Resume Analysis</h1>
          <p className="text-gray-600">Upload your resume and let our AI extract your skills and generate a personalized assessment</p>
        </div>

        {/* Upload Section */}
        {!parsedData && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-4 border-dashed rounded-xl p-12 text-center transition-all ${
                isDragging 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              {isProcessing ? (
                <div className="flex flex-col items-center">
                  <Loader className="w-16 h-16 text-blue-500 animate-spin mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI is analyzing your resume...</h3>
                  <p className="text-gray-600">Extracting skills, projects, and experience</p>
                </div>
              ) : (
                <>
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Drop your resume here</h3>
                  <p className="text-gray-600 mb-4">or click to browse</p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileInput}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
                  >
                    Select PDF File
                  </label>
                  {file && <p className="mt-4 text-sm text-gray-600">Selected: {file.name}</p>}
                </>
              )}
            </div>
          </div>
        )}

        {/* Parsed Data Display */}
        {parsedData && (
          <div className="space-y-6">
            {/* Success Message */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-800 mb-1">Resume Analyzed Successfully!</h3>
                <p className="text-green-700">We've extracted {parsedData.skills.length} skills and {parsedData.projects.length} projects from your resume.</p>
              </div>
            </div>

            {/* Candidate Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Candidate Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold">{parsedData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold">{parsedData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold">{parsedData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-semibold">{parsedData.experience}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Education</p>
                  <p className="font-semibold">{parsedData.education}</p>
                </div>
              </div>
            </div>

            {/* Extracted Skills */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-purple-600" />
                Extracted Skills ({parsedData.skills.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {parsedData.skills.map((skill, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        skill.proficiency === 'Advanced' ? 'bg-green-100 text-green-700' :
                        skill.proficiency === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {skill.proficiency}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Source: {skill.source}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracted Projects */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-indigo-600" />
                Analyzed Projects ({parsedData.projects.length})
              </h2>
              <div className="space-y-4">
                {parsedData.projects.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.complexity === 'High' ? 'bg-red-100 text-red-700' :
                        project.complexity === 'Medium' ? 'bg-orange-100 text-orange-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {project.complexity} Complexity
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Generate Exam Button */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">Ready for Your Personalized Assessment?</h2>
              <p className="mb-6 text-blue-100">We'll generate an adaptive exam based on your skills and experience level</p>
              <button
                onClick={generateExam}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Generate & Take Exam
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeUpload;
