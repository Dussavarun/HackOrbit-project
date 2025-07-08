import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import CareerRoadmaps from './components/CareerRoadmaps';
import GitHubAnalysis from './components/GitHubAnalysis';
import MockInterview from './components/MockInterview';
import IndustryInsights from './components/IndustryInsights';
import ProgressTracking from './components/ProgressTracking';
import LiveInterview from './components/LiveInterview';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';


const user = {
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  githubUsername: 'alex-dev',
  selectedRole: 'Web Developer',
  joinDate: '2024-01-15',
  streak: 12,
  totalScore: 1250
};

const App = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} onProfileClick={() => setShowProfile(true)} />
        <main className="pt-24 px-4">
          <Routes>
            <Route path="/" element={<Navigate to="/roadmaps" replace />} />
            <Route path="/roadmaps" element={<CareerRoadmaps />} />
            <Route path="/github" element={<GitHubAnalysis />} />
            <Route path="/mock" element={<MockInterview />} />
            <Route path="/insights" element={<IndustryInsights />} />
            <Route path="/progress" element={<ProgressTracking />} />
            <Route path="/interview" element={<LiveInterview />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Profile open={showProfile} onClose={() => setShowProfile(false)} />
      </div>
    </Router>
  );
};

export default App;