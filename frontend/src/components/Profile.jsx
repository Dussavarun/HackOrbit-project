import React from 'react';
import { User, Star, Flame, GitBranch, Mic, CheckCircle } from 'lucide-react';
import useAuthStore from '../../store/userAuthstore';

const Profile = ({ open, onClose }) => {
  const { user } = useAuthStore();

  if (!open || !user) return null;

  const {
    username,
    email,
    bio,
    streak = 5, // placeholder or backend-provided
    mockScore = 85,
    liveInterviews = 3,
    githubAlignment = 78,
    profileRating = 90,
    githubUsername = 'your-github', // maybe pull this from user.bio or user.github
    joinDate = '2024-01-15', // hardcoded or backend-provided
  } = user;

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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-2 shadow-lg">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{username}</h2>
          <p className="text-base text-gray-600">{email}</p>
          <p className="text-xs text-gray-400 mt-1">Joined {new Date(joinDate).toLocaleDateString()}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <StatBox Icon={Flame} color="text-orange-500" bg="bg-blue-50" value={streak} label="Day Streak" />
          <StatBox Icon={Star} color="text-green-500" bg="bg-green-50" value={`${mockScore}%`} label="Avg. Mock Score" />
          <StatBox Icon={Mic} color="text-purple-500" bg="bg-purple-50" value={liveInterviews} label="Live Interviews" />
          <StatBox Icon={GitBranch} color="text-blue-600" bg="bg-blue-100" value={`${githubAlignment}%`} label="GitHub Alignment" />
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

        {/* GitHub */}
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

// Small stat box component
const StatBox = ({ Icon, value, label, color = '', bg = '' }) => (
  <div className={`flex flex-col items-center ${bg} rounded-xl p-4`}>
    <Icon className={`w-7 h-7 ${color} mb-1`} />
    <span className="text-xl font-bold text-gray-900">{value}</span>
    <span className="text-xs text-gray-600">{label}</span>
  </div>
);

export default Profile;
