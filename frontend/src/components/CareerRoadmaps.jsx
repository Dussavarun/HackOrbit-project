import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, BookOpen, Star, ArrowRight, Target } from 'lucide-react';
import { careerRoadmaps } from '../data/mockData';

const CareerRoadmaps= () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState(careerRoadmaps[0]);
  const [expandedWeek, setExpandedWeek] = useState(null);

  const completedWeeks = selectedRoadmap.weeks.filter(week => week.completed).length;
  const progressPercentage = (completedWeeks / selectedRoadmap.weeks.length) * 100;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Roadmaps</h1>
        <p className="text-gray-600">Structured learning paths to achieve your career goals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Roadmap Selection */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Path</h2>
              <p className="text-gray-600 text-sm">Select a career roadmap to get started</p>
            </div>
            <div className="p-6 space-y-4">
              {careerRoadmaps.map((roadmap, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedRoadmap(roadmap)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedRoadmap.role === roadmap.role
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{roadmap.role}</h3>
                      <p className="text-sm text-gray-600 mt-1">{roadmap.description}</p>
                      <div className="flex items-center space-x-4 mt-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{roadmap.duration}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(roadmap.difficulty)}`}>
                          {roadmap.difficulty}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 mt-1 transition-transform ${
                      selectedRoadmap.role === roadmap.role ? 'rotate-90 text-blue-500' : 'text-gray-400'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            {/* Progress Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedRoadmap.role}</h2>
                  <p className="text-gray-600">{selectedRoadmap.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">{Math.round(progressPercentage)}%</div>
                  <div className="text-sm text-gray-500">Complete</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>{completedWeeks} of {selectedRoadmap.weeks.length} weeks completed</span>
                <span>{selectedRoadmap.duration} total</span>
              </div>
            </div>

            {/* Weekly Breakdown */}
            <div className="p-6">
              <div className="space-y-4">
                {selectedRoadmap.weeks.map((week, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedWeek(expandedWeek === index ? null : index)}
                      className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {week.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-400" />
                          )}
                          <div>
                            <h3 className="font-semibold text-gray-900">Week {week.week}: {week.title}</h3>
                            <p className="text-sm text-gray-600">{week.description}</p>
                          </div>
                        </div>
                        <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedWeek === index ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </button>
                    
                    {expandedWeek === index && (
                      <div className="px-4 pb-4 border-t border-gray-100">
                        <div className="pt-4 space-y-4">
                          {/* Skills */}
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <Star className="w-4 h-4 mr-2 text-yellow-500" />
                              Skills to Learn
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {week.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Resources */}
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                              Recommended Resources
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {week.resources.map((resource, resourceIndex) => (
                                <span key={resourceIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                  {resource}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Milestone */}
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <Target className="w-4 h-4 mr-2 text-green-500" />
                              Week Milestone
                            </h4>
                            <p className="text-gray-700 bg-green-50 p-3 rounded-lg border border-green-200">
                              {week.milestone}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmaps;