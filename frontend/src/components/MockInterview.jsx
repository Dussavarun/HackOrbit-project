import React, { useState, useEffect } from 'react';
import { Clock, Brain, CheckCircle, XCircle, Play, RotateCcw, Trophy, Target } from 'lucide-react';
import { mockQuestions } from '../data/mockData';

const MockInterview = () => {
  const [currentSession, setCurrentSession] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [sessionStarted, setSessionStarted] = useState(false);
  const [dailyStreak, setDailyStreak] = useState(5);
  const [bestScore, setBestScore] = useState(85);

  useEffect(() => {
    let interval;
    if (sessionStarted && timeLeft > 0 && !showResults) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showResults) {
      handleFinishSession();
    }
    return () => clearInterval(interval);
  }, [sessionStarted, timeLeft, showResults]);

  const startNewSession = () => {
    const session = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      role: 'Web Developer',
      questions: mockQuestions.slice(0, 5),
      userAnswers: [],
      score: 0,
      timeSpent: 0
    };
    setCurrentSession(session);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResults(false);
    setTimeLeft(300);
    setSessionStarted(true);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (currentSession && selectedAnswer !== null) {
      const updatedAnswers = [...currentSession.userAnswers, selectedAnswer];
      const updatedSession = {
        ...currentSession,
        userAnswers: updatedAnswers
      };
      setCurrentSession(updatedSession);
      
      if (currentQuestionIndex < currentSession.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        handleFinishSession();
      }
    }
  };

  const handleFinishSession = () => {
    if (currentSession) {
      const correctAnswers = currentSession.questions.filter((q, index) => 
        currentSession.userAnswers[index] === q.correctAnswer
      ).length;
      
      const score = Math.round((correctAnswers / currentSession.questions.length) * 100);
      const timeSpent = 300 - timeLeft;
      
      const finalSession = {
        ...currentSession,
        score,
        timeSpent
      };
      
      setCurrentSession(finalSession);
      setShowResults(true);
      setSessionStarted(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mock Interview</h1>
        <p className="text-gray-600">Practice daily with role-specific questions to improve your skills</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Daily Streak</p>
              <p className="text-2xl font-bold text-gray-900">{dailyStreak}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Trophy className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Best Score</p>
              <p className="text-2xl font-bold text-gray-900">{bestScore}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Questions Today</p>
              <p className="text-2xl font-bold text-gray-900">{currentSession ? currentSession.questions.length : 0}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {!sessionStarted && !showResults && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready for Your Daily Challenge?</h2>
            <p className="text-gray-600 mb-6">Take a 5-minute mock interview to sharpen your skills</p>
            <button
              onClick={startNewSession}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
            >
              <Play className="w-5 h-5" />
              <span>Start Mock Interview</span>
            </button>
          </div>
        )}

        {sessionStarted && currentSession && !showResults && (
          <div>
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Question {currentQuestionIndex + 1} of {currentSession.questions.length}
                  </h2>
                  <p className="text-gray-600">Role: {currentSession.role}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-lg font-mono text-gray-700">{formatTime(timeLeft)}</span>
                  </div>
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / currentSession.questions.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentSession.questions[currentQuestionIndex].difficulty)}`}>
                    {currentSession.questions[currentQuestionIndex].difficulty}
                  </span>
                  <span className="text-sm text-gray-500">{currentSession.questions[currentQuestionIndex].topic}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {currentSession.questions[currentQuestionIndex].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentSession.questions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                      }`}>
                        {selectedAnswer === index && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-gray-900">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-between">
                <button
                  onClick={handleFinishSession}
                  className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Finish Early
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {currentQuestionIndex === currentSession.questions.length - 1 ? 'Finish' : 'Next Question'}
                </button>
              </div>
            </div>
          </div>
        )}

        {showResults && currentSession && (
          <div className="p-8">
            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${getScoreColor(currentSession.score)}`}>
                <span className="text-2xl font-bold">{currentSession.score}%</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview Complete!</h2>
              <p className="text-gray-600">You answered {currentSession.userAnswers.filter((answer, index) => answer === currentSession.questions[index].correctAnswer).length} out of {currentSession.questions.length} questions correctly</p>
            </div>

            {/* Results Breakdown */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-gray-900">Review Your Answers</h3>
              {currentSession.questions.map((question, index) => {
                const userAnswer = currentSession.userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-2">{question.question}</p>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Your answer:</span> {question.options[userAnswer]}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswer]}
                            </p>
                          )}
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Explanation:</span> {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setCurrentSession(null);
                  setShowResults(false);
                  setSessionStarted(false);
                }}
                className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </button>
              <button
                onClick={startNewSession}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Take Another Interview</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockInterview;