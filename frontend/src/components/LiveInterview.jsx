import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Play, Pause, Volume2, Code, Send, MessageCircle, CheckCircle } from 'lucide-react';

const LiveInterview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interviewStarted, setInterviewStarted] = useState(false);
  
  const recognitionRef = useRef(null);
  const synthesisRef = useRef(null);

  const questions = [
    {
      question: "Tell me about yourself and your programming experience.",
      type: "behavioral",
      expectedAnswer: "Professional background, technical skills, and career goals"
    },
    {
      question: "Can you write a function to reverse a string in JavaScript?",
      type: "coding",
      expectedAnswer: "function reverseString(str) { return str.split('').reverse().join(''); }"
    },
    {
      question: "What is the difference between let, const, and var in JavaScript?",
      type: "technical",
      expectedAnswer: "Scope, hoisting, and mutability differences"
    },
    {
      question: "How would you optimize a web application for performance?",
      type: "technical",
      expectedAnswer: "Code splitting, lazy loading, caching, minification"
    }
  ];

  useEffect(() => {
    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          setTranscript(prev => prev + ' ' + finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
    }

    // Initialize Speech Synthesis
    if ('speechSynthesis' in window) {
      synthesisRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, []);

  const startRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const speakText = (text) => {
    if (synthesisRef.current) {
      const utterance = new window.SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      
      synthesisRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthesisRef.current) {
      synthesisRef.current.cancel();
      setIsPlaying(false);
    }
  };

  const analyzeCode = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      const currentQ = questions[currentQuestion];
      if (currentQ.type === 'coding') {
        if (userCode.includes('reverse') || userCode.includes('split')) {
          setFeedback('✅ Great! Your solution correctly reverses the string. The approach using split, reverse, and join is clean and readable.');
        } else {
          setFeedback('❌ The solution doesn\'t appear to reverse the string correctly. Try using array methods like split(), reverse(), and join().');
        }
      } else {
        setFeedback('Good answer! Your explanation covers the key concepts.');
      }
      setIsAnalyzing(false);
    }, 2000);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setUserCode('');
      setFeedback('');
      setTranscript('');
      
      // Auto-speak the next question
      setTimeout(() => {
        speakText(questions[currentQuestion + 1].question);
      }, 500);
    }
  };

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestion(0);
    setUserCode('');
    setFeedback('');
    setTranscript('');
    
    // Welcome message
    speakText("Welcome to your live interview session. I'll ask you a series of questions. You can respond verbally or write code in the editor. Let's begin with the first question.");
    
    // Start with first question
    setTimeout(() => {
      speakText(questions[0].question);
    }, 3000);
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Interview</h1>
        <p className="text-gray-600">Real-time interview with voice interaction and code evaluation</p>
      </div>

      {!interviewStarted ? (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready for Your Live Interview?</h2>
          <p className="text-gray-600 mb-6">
            This interactive interview will test your technical skills and communication abilities. 
            You can respond verbally or write code in the provided editor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">What to Expect:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• 4 technical questions</li>
                <li>• Voice-to-text interaction</li>
                <li>• Real-time code evaluation</li>
                <li>• Immediate feedback</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Features:</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• AI-powered analysis</li>
                <li>• Text-to-speech questions</li>
                <li>• Code editor integration</li>
                <li>• Performance scoring</li>
              </ul>
            </div>
          </div>
          <button
            onClick={startInterview}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
          >
            <Play className="w-5 h-5" />
            <span>Start Interview</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Question Panel */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Question {currentQuestion + 1} of {questions.length}
                  </h2>
                  <p className="text-sm text-gray-600 capitalize">{currentQ.type} Question</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => speakText(currentQ.question)}
                    disabled={isPlaying}
                    className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Volume2 className="w-5 h-5 text-blue-600" />
                  </button>
                  <button
                    onClick={isPlaying ? stopSpeaking : () => speakText(currentQ.question)}
                    className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 text-green-600" /> : <Play className="w-5 h-5 text-green-600" />}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{currentQ.question}</h3>
                {currentQ.type === 'coding' && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      💡 <strong>Tip:</strong> Write your code in the editor on the right, then click "Analyze Code" for feedback.
                    </p>
                  </div>
                )}
              </div>

              {/* Voice Controls */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-medium text-gray-900 mb-3">Voice Response</h4>
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isRecording 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
                  </button>
                  {isRecording && (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Recording...</span>
                    </div>
                  )}
                </div>
                
                {transcript && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Your Response:</h5>
                    <p className="text-gray-700">{transcript}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Code Editor & Feedback */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-500" />
                Code Editor
              </h2>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  placeholder="Write your code here..."
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={analyzeCode}
                  disabled={isAnalyzing || !userCode.trim()}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Analyze Code</span>
                    </>
                  )}
                </button>
                
                {feedback && currentQuestion < questions.length - 1 && (
                  <button
                    onClick={nextQuestion}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Next Question</span>
                  </button>
                )}
              </div>
              
              {feedback && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">AI Feedback:</h4>
                  <p className="text-gray-700">{feedback}</p>
                </div>
              )}
              
              {currentQuestion === questions.length - 1 && feedback && (
                <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Interview Complete!</h4>
                  <p className="text-green-700">You've successfully completed all questions. Great job!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveInterview;