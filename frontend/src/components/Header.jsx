import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  User,
  BookOpen,
  GitBranch,
  Brain,
  TrendingUp,
  Target,
  Mic,
} from "lucide-react";
import useAuthStore from "../../store/userAuthstore";

const navItems = [
  { id: "roadmaps", label: "Roadmaps", icon: BookOpen, path: "/roadmaps" },
  { id: "github", label: "GitHub Analysis", icon: GitBranch, path: "/github" },
  { id: "mock", label: "Mock Interview", icon: Brain, path: "/mock" },
  {
    id: "insights",
    label: "Industry Insights",
    icon: TrendingUp,
    path: "/insights",
  },
  { id: "progress", label: "Progress", icon: Target, path: "/progress" },
  { id: "interview", label: "Live Interview", icon: Mic, path: "/interview" },
];

const Header = ({onProfileClick}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore(); 


  const handleNavClick = (e, path) => {
    if (!isAuthenticated && path !== "/roadmaps") {
      e.preventDefault();
      navigate("/login");
    }
  };

  // const onProfileClick = () => {
  //   navigate("/profile");
  // };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">CareerPath</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              const isDisabled = !isAuthenticated && item.path !== "/roadmaps";
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={
                    isDisabled
                      ? "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-400 bg-gray-100 cursor-not-allowed"
                      : `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-blue-100 text-blue-700 shadow-sm"
                            : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                        }`
                  }
                  onClick={(e) => handleNavClick(e, item.path)}
                  end
                  tabIndex={isDisabled ? -1 : 0}
                  style={isDisabled ? { pointerEvents: "auto" } : {}}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Auth / Profile Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div
                className="hidden sm:flex items-center space-x-2 cursor-pointer"
                onClick={onProfileClick}
              >
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.username || "User"}
                  </p>
                  <p className="text-xs text-gray-500">🔥 Your streak!</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">
                    {user?.username?.slice(0, 2).toUpperCase() || "U"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  className="px-4 py-2 rounded-lg bg-[#6A38C2] text-white font-semibold hover:bg-[#552E9E] transition"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-gray-200 text-[#6A38C2] font-semibold hover:bg-gray-300 transition"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-center overflow-x-auto px-4 py-2 space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            const isDisabled = !isAuthenticated && item.path !== "/roadmaps";
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={
                  isDisabled
                    ? "flex flex-col items-center space-y-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap text-gray-400 bg-gray-100 cursor-not-allowed"
                    : `flex flex-col items-center space-y-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      }`
                }
                onClick={(e) => handleNavClick(e, item.path)}
                end
                tabIndex={isDisabled ? -1 : 0}
                style={isDisabled ? { pointerEvents: "auto" } : {}}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
