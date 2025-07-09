import React, { useState, useEffect } from "react";
import {
  Github,
  Star,
  GitFork,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Search,
} from "lucide-react";
import {
  fetchGitHubProfile,
  analyzeGitHubUser,
  fetchGitHubRepos,
  fetchRepoLanguages,
  buildCompactProfileSummary,
} from "../../../backend/controllers/githubController";

const GitHubAnalysis = () => {
  const [username, setUsername] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Web Developer");

  useEffect(() => {
    const storedUsername = localStorage.getItem("github_username");
    const storedRole = localStorage.getItem("target_role");

    if (storedUsername) setUsername(storedUsername);
    if (storedRole) setSelectedRole(storedRole);
  }, []);

  const handleAnalyze = async () => {
    if (!username.trim()) return;
  const ressss =  await buildCompactProfileSummary(username)
    console.log(ressss)

    localStorage.setItem("github_username", username);
    localStorage.setItem("target_role", selectedRole);

    setLoading(true);
    const result = await analyzeGitHubUser(username);
    if (result) {
      const reposWithLanguages = await Promise.all(
        result.recentRepos.map(async (repo) => {
          const languages = await fetchRepoLanguages(username, repo.name);
          return {
            name: repo.name,
            description: repo.description || "No description provided",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            lastUpdated: new Date(repo.updated_at).toLocaleDateString(),
            languages: Object.keys(languages),
            relevanceScore: Math.random(), // Placeholder, you can compute based on role later
          };
        })
      );

      const recommendations = [
        "Contribute to more starred repos",
        "Add detailed READMEs and documentation",
        "Focus on trending tech stacks",
      ];

      setAnalysis({
        username,
        overallAlignment: Math.random(), // Placeholder, later match with selectedRole
        totalRepos: result.publicRepos,
        topLanguages: result.topLanguages,
        repositories: reposWithLanguages,
        recommendations,
      });
    }
    setLoading(false);
  };

  const getAlignmentColor = (score) => {
    if (score >= 0.8) return "text-green-600 bg-green-100";
    if (score >= 0.6) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getAlignmentText = (score) => {
    if (score >= 0.8) return "Excellent";
    if (score >= 0.6) return "Good";
    return "Needs Improvement";
  };


  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          GitHub Profile Analysis
        </h1>
        <p className="text-gray-600">
          Analyze your GitHub profile alignment with your career goals
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GitHub Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Web Developer">Web Developer</option>
              <option value="AI/ML Engineer">AI/ML Engineer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleAnalyze}
              disabled={loading || !username.trim()}
              className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-colors"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Analyze Profile</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {analysis && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center space-x-3 mb-4">
                  <Github className="w-8 h-8 text-gray-700" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      @{analysis.username}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      GitHub Profile Analysis
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {Math.round(analysis.overallAlignment * 100)}%
                  </div>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getAlignmentColor(
                      analysis.overallAlignment
                    )}`}
                  >
                    {analysis.overallAlignment >= 0.8 ? (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    ) : (
                      <AlertCircle className="w-4 h-4 mr-1" />
                    )}
                    {getAlignmentText(analysis.overallAlignment)}
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Alignment with {selectedRole}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      {analysis.totalRepos}
                    </div>
                    <div className="text-sm text-gray-600">
                      Total Repositories
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Top Languages
                  </h3>
                  <div className="space-y-2">
                    {analysis.topLanguages.map((language, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          {language}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Repository Analysis
                </h2>
                <p className="text-gray-600 text-sm">
                  Detailed analysis of your repositories
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {analysis.repositories.map((repo, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {repo.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {repo.description}
                          </p>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getAlignmentColor(
                            repo.relevanceScore
                          )}`}
                        >
                          {Math.round(repo.relevanceScore * 100)}%
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{repo.lastUpdated}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {repo.languages.map((language, langIndex) => (
                          <span
                            key={langIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 mt-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Recommendations
                </h2>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {analysis.recommendations.map((recommendation, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!analysis && (
        <div className="text-center py-12">
          <Github className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No Analysis Yet
          </h3>
          <p className="text-gray-600">
            Enter your GitHub username above to get started with the analysis
          </p>
        </div>
      )}
    </div>
  );
};

export default GitHubAnalysis;