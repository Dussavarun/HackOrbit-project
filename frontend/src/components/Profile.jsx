import React from 'react';
import { User, Star, Flame, GitBranch, Mic, CheckCircle } from 'lucide-react';

const mockProfile = {
  name: 'Alex Johnson',
  role: 'Web Developer',
  avatar: '',
  streak: 12,
  mockScore: 87,
  liveInterviews: 8,
  githubAlignment: 82,
  profileRating: 91,
  githubUsername: 'alex-dev',
  joinDate: '2024-01-15',
};

const Profile = ({ open, onClose }) => {
  if (!open) return null;

  const {
    name,
    role,
    streak,
    mockScore,
    liveInterviews,
    githubAlignment,
    profileRating,
    githubUsername,
    joinDate,
  } = mockProfile;

  // Prevent modal click from closing
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-[95vw] max-w-xl aspect-square mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 relative animate-fade-in flex flex-col justify-between"
        onClick={stopPropagation}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-2 shadow-lg">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-base text-gray-600">{role}</p>
          <p className="text-xs text-gray-400 mt-1">Joined {new Date(joinDate).toLocaleDateString()}</p>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col items-center bg-blue-50 rounded-xl p-4">
            <Flame className="w-7 h-7 text-orange-500 mb-1" />
            <span className="text-xl font-bold text-gray-900">{streak}</span>
            <span className="text-xs text-gray-600">Day Streak</span>
          </div>
          <div className="flex flex-col items-center bg-green-50 rounded-xl p-4">
            <Star className="w-7 h-7 text-green-500 mb-1" />
            <span className="text-xl font-bold text-gray-900">{mockScore}%</span>
            <span className="text-xs text-gray-600">Avg. Mock Score</span>
          </div>
          <div className="flex flex-col items-center bg-purple-50 rounded-xl p-4">
            <Mic className="w-7 h-7 text-purple-500 mb-1" />
            <span className="text-xl font-bold text-gray-900">{liveInterviews}</span>
            <span className="text-xs text-gray-600">Live Interviews</span>
          </div>
          <div className="flex flex-col items-center bg-blue-100 rounded-xl p-4">
            <GitBranch className="w-7 h-7 text-blue-600 mb-1" />
            <span className="text-xl font-bold text-gray-900">{githubAlignment}%</span>
            <span className="text-xs text-gray-600">GitHub Alignment</span>
          </div>
        </div>

        {/* Profile Rating */}
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center space-x-2 mb-1">
            <CheckCircle className="w-7 h-7 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">{profileRating}/100</span>
          </div>
          <span className="text-base text-gray-700">Profile Rating</span>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
              style={{ width: `${profileRating}%` }}
            />
          </div>
        </div>

        {/* GitHub Info */}
        <div className="flex flex-col items-center mt-2">
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            <GitBranch className="w-5 h-5 mr-2" />
            @{githubUsername}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;