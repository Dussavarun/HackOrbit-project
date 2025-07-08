import React, { useState } from 'react';
import { TrendingUp, Target, BookOpen, Brain, Award, Calendar, ArrowUp, ArrowDown } from 'lucide-react';
import { progressData } from '../data/mockData';

const ProgressTracking = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('6weeks');

  const latestData = progressData[progressData.length - 1];
  const previousData = progressData[progressData.length - 2];

  const getChangeIndicator = (current, previous) => {
    const change = current - previous;
    const percentage = ((change / previous) * 100).toFixed(1);

    if (change > 0) {
      return (
        <div className="flex items-center text-green-600">
          <ArrowUp className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">+{percentage}%</span>
        </div>
      );
    } else if (change < 0) {
      return (
        <div className="flex items-center text-red-600">
          <ArrowDown className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">{percentage}%</span>
        </div>
      );
    } else {
      return <span className="text-sm text-gray-500">No change</span>;
    }
  };

  const getProgressColor = (value) => {
    if (value >= 80) return 'bg-green-500';
    if (value >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const achievements = [
    {
      title: '5-Day Streak',
      description: 'Completed mock interviews for 5 consecutive days',
      icon: Award,
      color: 'text-yellow-600 bg-yellow-100',
      achieved: true
    },
    {
      title: 'GitHub Goal Achiever',
      description: 'Reached 80% alignment with career goal',
      icon: Target,
      color: 'text-blue-600 bg-blue-100',
      achieved: true
    },
    {
      title: 'Learning Milestone',
      description: 'Completed 4 weeks of roadmap',
      icon: BookOpen,
      color: 'text-green-600 bg-green-100',
      achieved: true
    },
    {
      title: 'Interview Master',
      description: 'Scored 90% or higher in mock interview',
      icon: Brain,
      color: 'text-purple-600 bg-purple-100',
      achieved: false
    }
  ];

  return (
    
    <div className="flex justify-center items-center min-h-[calc(100vh-6rem)] px-2 py-8">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Progress Tracking</h1>
          <p className="text-gray-600">Monitor your learning journey and track improvements over time</p>
        </div>

        {/* Timeframe Selector */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 mb-8 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-sm font-medium text-gray-700">Timeframe:</span>
            <div className="flex space-x-2">
              {[
                { value: '1week', label: '1 Week' },
                { value: '1month', label: '1 Month' },
                { value: '6weeks', label: '6 Weeks' },
                { value: '3months', label: '3 Months' }
              ].map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setSelectedTimeframe(value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeframe === value
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mock Interview Score</p>
                  <p className="text-2xl font-bold text-gray-900">{latestData.mockInterviewScore}%</p>
                </div>
              </div>
              {getChangeIndicator(latestData.mockInterviewScore, previousData.mockInterviewScore)}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(latestData.mockInterviewScore)}`}
                style={{ width: `${latestData.mockInterviewScore}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">GitHub Alignment</p>
                  <p className="text-2xl font-bold text-gray-900">{latestData.githubAlignment}%</p>
                </div>
              </div>
              {getChangeIndicator(latestData.githubAlignment, previousData.githubAlignment)}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(latestData.githubAlignment)}`}
                style={{ width: `${latestData.githubAlignment}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Roadmap Progress</p>
                  <p className="text-2xl font-bold text-gray-900">{latestData.roadmapProgress}%</p>
                </div>
              </div>
              {getChangeIndicator(latestData.roadmapProgress, previousData.roadmapProgress)}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(latestData.roadmapProgress)}`}
                style={{ width: `${latestData.roadmapProgress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Chart */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
              Progress Over Time
            </h2>

            <div className="space-y-6">
              {progressData.map((data, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{data.week}</span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Mock Interview</span>
                      <span className="text-xs font-medium text-gray-900">{data.mockInterviewScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${data.mockInterviewScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">GitHub Alignment</span>
                      <span className="text-xs font-medium text-gray-900">{data.githubAlignment}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${data.githubAlignment}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Roadmap Progress</span>
                      <span className="text-xs font-medium text-gray-900">{data.roadmapProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${data.roadmapProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-500" />
              Achievements
            </h2>

            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    achievement.achieved
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${achievement.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                          {achievement.achieved && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProgressTracking;