import { CareerRoadmap, GitHubAnalysis, MockQuestion, IndustryInsight, ProgressData } from '../types';

export const careerRoadmaps: CareerRoadmap[] = [
  {
    role: 'Web Developer',
    description: 'Master full-stack web development from frontend to backend',
    duration: '16 weeks',
    difficulty: 'Beginner',
    weeks: [
      {
        week: 1,
        title: 'HTML & CSS Fundamentals',
        description: 'Learn the building blocks of web development',
        skills: ['HTML5 Semantic Elements', 'CSS3 Styling', 'Flexbox', 'Grid Layout'],
        resources: ['MDN Web Docs', 'CSS Tricks', 'freeCodeCamp'],
        milestone: 'Build a responsive landing page',
        completed: true
      },
      {
        week: 2,
        title: 'JavaScript Basics',
        description: 'Understanding JavaScript fundamentals',
        skills: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'Events'],
        resources: ['JavaScript.info', 'Eloquent JavaScript', 'MDN JavaScript Guide'],
        milestone: 'Create an interactive calculator',
        completed: true
      },
      {
        week: 3,
        title: 'Advanced JavaScript',
        description: 'ES6+ features and asynchronous programming',
        skills: ['Arrow Functions', 'Promises', 'Async/Await', 'Modules'],
        resources: ['ES6 Features', 'Async JavaScript Course', 'You Don\'t Know JS'],
        milestone: 'Build a weather app with API integration',
        completed: false
      },
      {
        week: 4,
        title: 'React Fundamentals',
        description: 'Introduction to React library',
        skills: ['Components', 'Props', 'State', 'Event Handling'],
        resources: ['React Documentation', 'React Tutorial', 'Scrimba React Course'],
        milestone: 'Create a todo list application',
        completed: false
      }
    ]
  },
  {
    role: 'AI/ML Engineer',
    description: 'Build intelligent systems and machine learning models',
    duration: '20 weeks',
    difficulty: 'Intermediate',
    weeks: [
      {
        week: 1,
        title: 'Python Programming',
        description: 'Master Python for data science and ML',
        skills: ['Python Syntax', 'Data Structures', 'NumPy', 'Pandas'],
        resources: ['Python.org', 'NumPy Documentation', 'Pandas Tutorial'],
        milestone: 'Complete data manipulation exercises',
        completed: true
      },
      {
        week: 2,
        title: 'Statistics & Mathematics',
        description: 'Foundation for machine learning',
        skills: ['Descriptive Statistics', 'Probability', 'Linear Algebra', 'Calculus'],
        resources: ['Khan Academy', 'StatQuest', '3Blue1Brown'],
        milestone: 'Statistical analysis project',
        completed: false
      }
    ]
  }
];

export const mockGitHubAnalysis: GitHubAnalysis = {
  username: 'john-doe',
  totalRepos: 24,
  overallAlignment: 0.75,
  topLanguages: ['JavaScript', 'Python', 'TypeScript', 'CSS'],
  repositories: [
    {
      name: 'react-todo-app',
      description: 'A modern todo application built with React and TypeScript',
      languages: ['JavaScript', 'TypeScript', 'CSS'],
      stars: 45,
      forks: 12,
      lastUpdated: '2024-01-15',
      readmeContent: 'Modern todo app with React hooks and TypeScript',
      relevanceScore: 0.95
    },
    {
      name: 'python-data-analysis',
      description: 'Data analysis project using pandas and matplotlib',
      languages: ['Python', 'Jupyter Notebook'],
      stars: 23,
      forks: 8,
      lastUpdated: '2024-01-10',
      readmeContent: 'Comprehensive data analysis of sales data',
      relevanceScore: 0.65
    }
  ],
  recommendations: [
    'Focus more on backend technologies like Node.js or Django',
    'Add more complex projects showcasing full-stack development',
    'Include testing frameworks in your projects',
    'Document your projects better with detailed README files'
  ]
};

export const mockQuestions: MockQuestion[] = [
  {
    id: '1',
    question: 'Which of the following is the correct way to declare a React functional component?',
    options: [
      'function Component() { return <div>Hello</div>; }',
      'const Component = () => { return <div>Hello</div>; }',
      'class Component extends React.Component { render() { return <div>Hello</div>; } }',
      'Both A and B'
    ],
    correctAnswer: 3,
    explanation: 'Both function declarations and arrow functions are valid ways to create functional components in React.',
    difficulty: 'Easy',
    topic: 'React Basics'
  },
  {
    id: '2',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    correctAnswer: 1,
    explanation: 'Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.',
    difficulty: 'Medium',
    topic: 'Algorithms'
  }
];

export const industryInsights: IndustryInsight[] = [
  {
    role: 'Web Developer',
    demandTrend: 'High',
    salaryTrend: 'Rising',
    averageSalary: 75000,
    jobOpenings: 15420,
    requiredSkills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    salaryData: [
      { experience: 0, salary: 45000, role: 'Web Developer', location: 'India' },
      { experience: 1, salary: 55000, role: 'Web Developer', location: 'India' },
      { experience: 2, salary: 65000, role: 'Web Developer', location: 'India' },
      { experience: 3, salary: 75000, role: 'Web Developer', location: 'India' },
      { experience: 4, salary: 85000, role: 'Web Developer', location: 'India' },
      { experience: 5, salary: 95000, role: 'Web Developer', location: 'India' }
    ]
  },
  {
    role: 'AI/ML Engineer',
    demandTrend: 'High',
    salaryTrend: 'Rising',
    averageSalary: 95000,
    jobOpenings: 8340,
    requiredSkills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLOps'],
    salaryData: [
      { experience: 0, salary: 65000, role: 'AI/ML Engineer', location: 'India' },
      { experience: 1, salary: 75000, role: 'AI/ML Engineer', location: 'India' },
      { experience: 2, salary: 85000, role: 'AI/ML Engineer', location: 'India' },
      { experience: 3, salary: 95000, role: 'AI/ML Engineer', location: 'India' },
      { experience: 4, salary: 110000, role: 'AI/ML Engineer', location: 'India' },
      { experience: 5, salary: 125000, role: 'AI/ML Engineer', location: 'India' }
    ]
  }
];

export const progressData: ProgressData[] = [
  { week: 'Week 1', mockInterviewScore: 65, githubAlignment: 45, roadmapProgress: 25 },
  { week: 'Week 2', mockInterviewScore: 72, githubAlignment: 55, roadmapProgress: 50 },
  { week: 'Week 3', mockInterviewScore: 78, githubAlignment: 65, roadmapProgress: 62 },
  { week: 'Week 4', mockInterviewScore: 85, githubAlignment: 75, roadmapProgress: 75 },
  { week: 'Week 5', mockInterviewScore: 88, githubAlignment: 80, roadmapProgress: 87 },
  { week: 'Week 6', mockInterviewScore: 92, githubAlignment: 85, roadmapProgress: 100 }
];