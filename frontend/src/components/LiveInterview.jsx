import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Mic,
  MicOff,
  Play,
  Pause,
  Volume2,
  Code,
  Send,
  MessageCircle,
} from "lucide-react";

const LiveInterview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [code, setCode] = useState("");

  const recognitionRef = useRef(null);
  const synthesisRef = useRef(null);
  const [voice, setVoice] = useState(null);
  const apikey = import.meta.env.VITE_GOOGLE_API_KEY;

  useEffect(() => {
    // Initialize Speech Recognition
    if ("webkitSpeechRecognition" in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          setTranscript((prev) => prev + " " + finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Initialize Speech Synthesis and set voice at index 95 if available
    if ("speechSynthesis" in window) {
      synthesisRef.current = window.speechSynthesis;
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 95) {
        setVoice(voices[95]);
      }
    }
    // Chrome loads voices asynchronously
    const handleVoicesChanged = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 95) {
        setVoice(voices[95]);
      }
    };
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
      window.speechSynthesis.onvoiceschanged = null;
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
      if (voice) utterance.voice = voice;
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

  const startInterview = () => {
    setInterviewStarted(true);
    setTranscript("");
    setTimeout(() => {
      speakText("Are you ready for the interview?");
    }, 1500);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const getGeminiResponse = async (question) => {
  try {
  
    const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`, {
      prompt: question
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    if (data && data.text) {
      speakText(data.text); // Use your existing text-to-speech
    } else {
      speakText("Sorry, I couldn't understand that.");
    }
  } catch (error) {
    console.error("Gemini fetch error:", error);
    speakText("Error contacting AI.");
  }
};


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Live Interview
        </h1>
        <p className="text-gray-600">
          Real-time interview with voice interaction and code evaluation
        </p>
      </div>

      {!interviewStarted ? (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Ready for Your Live Interview?
          </h2>
          <p className="text-gray-600 mb-6">
            This interactive interview will test your technical skills and
            communication abilities. You can respond verbally or write code in
            the provided editor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                What to Expect:
              </h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• 1 question</li>
                <li>• Voice-to-text interaction</li>
                <li>• Real-time code evaluation</li>
                <li>• Immediate feedback</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Features:</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• AI-powered analysis</li>
                <li>• Text-to-speech questions (voice #95)</li>
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
                    Question 1 of 1
                  </h2>
                  <p className="text-sm text-gray-600 capitalize">
                    General Question
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      speakText("Are you ready for the interview?")
                    }
                    disabled={isPlaying}
                    className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Volume2 className="w-5 h-5 text-blue-600" />
                  </button>
                  <button
                    onClick={
                      isPlaying
                        ? stopSpeaking
                        : () => speakText("Are you ready for the interview?")
                    }
                    className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-green-600" />
                    ) : (
                      <Play className="w-5 h-5 text-green-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Are you ready for the interview?
                </h3>
              </div>

              {/* Voice Controls */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-medium text-gray-900 mb-3">
                  Voice Response
                </h4>
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isRecording
                        ? "bg-red-100 text-red-700 hover:bg-red-200"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}
                  >
                    {isRecording ? (
                      <MicOff className="w-5 h-5" />
                    ) : (
                      <Mic className="w-5 h-5" />
                    )}
                    <span>
                      {isRecording ? "Stop Recording" : "Start Recording"}
                    </span>
                  </button>
                  {isRecording && (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">
                        Recording...
                      </span>
                    </div>
                  )}
                </div>

                {transcript && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Your Response:
                    </h5>
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
                  placeholder="Write your code here..."
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={code}
                  onChange={handleCodeChange}
                />
              </div>
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => alert("Code submitted:\n" + code)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Analyze Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtitle/Transcript at bottom */}
      {interviewStarted && transcript && (
        <div
          className="fixed left-0 right-0 bottom-0 w-full flex justify-center pointer-events-none z-50"
          style={{ marginBottom: "32px" }}
        >
          <div className="bg-black bg-opacity-80 text-white px-6 py-3 rounded-lg text-lg max-w-2xl text-center shadow-lg">
            {transcript}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveInterview;
