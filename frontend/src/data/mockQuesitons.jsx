const mcqsWebdev = [
  // ---------- WEEK 1: HTML & CSS Fundamentals ----------
  {
    week: 1,
    topic: "HTML",
    question: "Which tag defines the main content of an HTML document?",
    options: ["<body>", "<main>", "<div>", "<section>"],
    answer: "<main>",
    explanation: "<main> is a semantic HTML5 tag used to wrap the main content. Source: MDN Web Docs."
  },
  {
    week: 1,
    topic: "HTML",
    question: "Which attribute is used to provide alternative text for images?",
    options: ["alt", "src", "title", "desc"],
    answer: "alt",
    explanation: "The 'alt' attribute provides alternative text for accessibility. Source: MDN."
  },
  {
    week: 1,
    topic: "HTML",
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<href>", "<a>", "<nav>"],
    answer: "<a>",
    explanation: "<a> tag with 'href' is used to define hyperlinks. Source: freeCodeCamp."
  },
  {
    week: 1,
    topic: "CSS",
    question: "Which CSS property sets the background color of an element?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color",
    explanation: "'background-color' sets the background color. Source: MDN CSS Reference."
  },
  {
    week: 1,
    topic: "CSS",
    question: "Which unit is relative to the font size of the element?",
    options: ["px", "em", "%", "vh"],
    answer: "em",
    explanation: "'em' is relative to the element’s font-size. Source: CSS Tricks."
  },
  {
    week: 1,
    topic: "Flexbox",
    question: "Which property defines how items are spaced along the main axis in Flexbox?",
    options: ["align-items", "justify-content", "flex-direction", "align-content"],
    answer: "justify-content",
    explanation: "'justify-content' controls main axis spacing. Source: MDN Flexbox Guide."
  },
  {
    week: 1,
    topic: "Flexbox",
    question: "What does 'flex-direction: row-reverse;' do?",
    options: ["Reverses item order horizontally", "Aligns items to bottom", "Stacks items vertically", "Removes flexbox"],
    answer: "Reverses item order horizontally",
    explanation: "'row-reverse' lays out items right-to-left. Source: CSS Tricks Flexbox Cheatsheet."
  },
  {
    week: 1,
    topic: "Grid",
    question: "Which CSS property starts a Grid layout?",
    options: ["display: grid", "grid-template", "grid-start", "layout: grid"],
    answer: "display: grid",
    explanation: "'display: grid' initiates CSS Grid layout. Source: MDN Grid Layout Docs."
  },
  {
    week: 1,
    topic: "Grid",
    question: "What does 'repeat(3, 1fr)' mean in CSS Grid?",
    options: ["3 rows of equal height", "3 columns of equal width", "1 column repeated 3 times", "Grid lines repeated 3 times"],
    answer: "3 columns of equal width",
    explanation: "'repeat(3, 1fr)' defines 3 equal fractional columns. Source: CSS Grid Guide."
  },
  {
    week: 1,
    topic: "HTML",
    question: "Which element is used to define navigation links?",
    options: ["<nav>", "<section>", "<footer>", "<aside>"],
    answer: "<nav>",
    explanation: "The <nav> element is semantic for navigation. Source: MDN."
  },

  // ---------- WEEK 2: JavaScript Basics ----------
  {
    week: 2,
    topic: "JavaScript",
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "const", "var", "static"],
    answer: "const",
    explanation: "'const' declares a variable with constant value. Source: JavaScript.info."
  },
  {
    week: 2,
    topic: "Data Types",
    question: "What is the output of typeof null in JavaScript?",
    options: ["null", "object", "undefined", "boolean"],
    answer: "object",
    explanation: "typeof null returns 'object' due to a historical JS bug. Source: MDN."
  },
  {
    week: 2,
    topic: "Variables",
    question: "Which variable declaration allows reassigning values but is block-scoped?",
    options: ["const", "var", "let", "final"],
    answer: "let",
    explanation: "'let' allows reassignment and is block-scoped. Source: JS Fundamentals (JavaScript.info)."
  },
  {
    week: 2,
    topic: "Functions",
    question: "Which of the following defines a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "let function = myFunc() {}",
      "def myFunc()",
      "new function myFunc()"
    ],
    answer: "function myFunc() {}",
    explanation: "That's the correct syntax for function declaration. Source: freeCodeCamp JS Course."
  },
  {
    week: 2,
    topic: "DOM",
    question: "Which method adds a new HTML element to the DOM?",
    options: ["innerHTML", "createElement", "appendChild", "All of the above"],
    answer: "All of the above",
    explanation: "All are used in creating and inserting DOM nodes. Source: MDN DOM API."
  },
  {
    week: 2,
    topic: "Events",
    question: "Which event is triggered when a user clicks on an element?",
    options: ["hover", "keydown", "click", "focus"],
    answer: "click",
    explanation: "'click' is triggered on mouse click. Source: JavaScript Event Reference."
  },
  {
    week: 2,
    topic: "Operators",
    question: "What is the result of '2' + 2 in JavaScript?",
    options: ["4", "22", "NaN", "undefined"],
    answer: "22",
    explanation: "JS performs string concatenation when one operand is a string. Source: JS Type Coercion (MDN)."
  },
  {
    week: 2,
    topic: "Scope",
    question: "Which variable type is NOT block-scoped?",
    options: ["var", "let", "const", "None of the above"],
    answer: "var",
    explanation: "'var' is function-scoped, not block-scoped. Source: JavaScript.info - Scope."
  },
  {
    week: 2,
    topic: "DOM",
    question: "What does document.getElementById('title') return?",
    options: [
      "An array of elements with ID 'title'",
      "A single element with ID 'title'",
      "A NodeList",
      "An error if not found"
    ],
    answer: "A single element with ID 'title'",
    explanation: "It returns the first matching element or null. Source: MDN DOM Guide."
  },
  {
    week: 2,
    topic: "Functions",
    question: "What is the correct way to call a function named greet?",
    options: ["call greet()", "greet;", "greet()", "function greet"],
    answer: "greet()",
    explanation: "greet() calls the function. Source: freeCodeCamp JavaScript Basics."
  },
  // ---------- WEEK 3: Advanced JavaScript ----------
  {
    week: 3,
    topic: "Arrow Functions",
    question: "What is a key difference between arrow functions and regular functions?",
    options: [
      "Arrow functions cannot return values",
      "Arrow functions have their own 'this'",
      "Arrow functions inherit 'this' from the parent scope",
      "Arrow functions are not valid in ES6"
    ],
    answer: "Arrow functions inherit 'this' from the parent scope",
    explanation: "Arrow functions don't bind their own 'this'; they use lexical scoping. Source: MDN JavaScript Reference."
  },
  {
    week: 3,
    topic: "ES6 Modules",
    question: "Which keyword is used to import a module in ES6?",
    options: ["require", "include", "import", "use"],
    answer: "import",
    explanation: "The ES6 syntax for modules uses 'import' and 'export'. Source: JavaScript.info - Modules."
  },
  {
    week: 3,
    topic: "Promises",
    question: "What is the default state of a Promise when it's created?",
    options: ["pending", "fulfilled", "rejected", "executed"],
    answer: "pending",
    explanation: "A Promise starts in a pending state before it settles. Source: MDN Promise Guide."
  },
  {
    week: 3,
    topic: "Async/Await",
    question: "Which keyword is required before calling await?",
    options: ["then", "new", "async", "promise"],
    answer: "async",
    explanation: "'await' can only be used inside an 'async' function. Source: MDN Async Functions."
  },
  {
    week: 3,
    topic: "Promises",
    question: "What does .then() return?",
    options: ["undefined", "a value", "a new Promise", "a function"],
    answer: "a new Promise",
    explanation: ".then() always returns a new Promise, enabling chaining. Source: JavaScript.info - Promises."
  },
  {
    week: 3,
    topic: "Modules",
    question: "Which statement is used to export a single function from a file?",
    options: [
      "export default functionName;",
      "exports functionName;",
      "require functionName;",
      "module.exports = functionName;"
    ],
    answer: "export default functionName;",
    explanation: "ES6 uses 'export default' for single module exports. Source: MDN Modules."
  },
  {
    week: 3,
    topic: "Async/Await",
    question: "What does async function always return?",
    options: ["String", "Boolean", "Promise", "Object"],
    answer: "Promise",
    explanation: "An async function always returns a Promise, even if you return a value. Source: JavaScript.info - Async."
  },

  // ---------- WEEK 4: React Fundamentals ----------
  {
    week: 4,
    topic: "React Components",
    question: "Which of the following is a valid functional component in React?",
    options: [
      "function App() { return <h1>Hello</h1>; }",
      "<App>function() {}<App>",
      "React.createComponent(App)",
      "component App() {}"
    ],
    answer: "function App() { return <h1>Hello</h1>; }",
    explanation: "Functional components are simple JS functions returning JSX. Source: React Docs."
  },
  {
    week: 4,
    topic: "JSX",
    question: "What does JSX stand for?",
    options: ["Java Syntax Extension", "JavaScript XML", "JSON Syntax Exchange", "JSX isn't an acronym"],
    answer: "JavaScript XML",
    explanation: "JSX allows writing HTML-like code in JavaScript. Source: React Docs - JSX."
  },
  {
    week: 4,
    topic: "Props",
    question: "Props in React are:",
    options: ["Mutable", "Used for styling only", "Read-only", "Accessible globally"],
    answer: "Read-only",
    explanation: "Props are immutable and used to pass data to components. Source: React Docs."
  },
  {
    week: 4,
    topic: "State",
    question: "Which hook is used to declare state in functional components?",
    options: ["useState", "useEffect", "useReducer", "useHook"],
    answer: "useState",
    explanation: "useState is the primary hook for managing state. Source: React Hooks API Reference."
  },
  {
    week: 4,
    topic: "Event Handling",
    question: "How do you handle a button click in React?",
    options: [
      "onClick='handleClick()'",
      "click='handleClick'",
      "onClick={handleClick}",
      "onclick=handleClick"
    ],
    answer: "onClick={handleClick}",
    explanation: "React uses camelCase and JSX syntax for events. Source: React Docs - Events."
  },
  {
    week: 4,
    topic: "Rendering",
    question: "Which method is used to render a React component to the DOM?",
    options: ["ReactDOM.render()", "renderReact()", "App.render()", "componentRender()"],
    answer: "ReactDOM.render()",
    explanation: "ReactDOM.render() is used to mount components. Source: ReactDOM Docs."
  },
  {
    week: 4,
    topic: "JSX",
    question: "Which syntax is correct for rendering a variable in JSX?",
    options: ["{{title}}", "{title}", "[title]", "<title>"],
    answer: "{title}",
    explanation: "JSX uses {} to embed JS expressions. Source: React JSX Guide."
  },

  // ---------- WEEK 5: React Advanced ----------
  {
    week: 5,
    topic: "Hooks",
    question: "Which hook runs side effects in React?",
    options: ["useState", "useEffect", "useReducer", "useMemo"],
    answer: "useEffect",
    explanation: "useEffect handles side effects like data fetching. Source: React Docs - useEffect."
  },
  {
    week: 5,
    topic: "Context API",
    question: "What is Context API mainly used for?",
    options: ["Styling", "Data sharing across components", "Routing", "Animations"],
    answer: "Data sharing across components",
    explanation: "Context allows passing data without prop drilling. Source: React Docs - Context."
  },
  {
    week: 5,
    topic: "Hooks",
    question: "What does useEffect return?",
    options: ["A function", "JSX", "Nothing", "A cleanup function (optional)"],
    answer: "A cleanup function (optional)",
    explanation: "useEffect can optionally return a cleanup function. Source: React Docs - useEffect."
  },
  {
    week: 5,
    topic: "Custom Hooks",
    question: "What is a custom hook in React?",
    options: [
      "A hook from a library",
      "A reusable function using hooks",
      "A styled component",
      "A lifecycle method"
    ],
    answer: "A reusable function using hooks",
    explanation: "Custom hooks are functions using built-in hooks for reuse. Source: React Docs - Custom Hooks."
  },
  {
    week: 5,
    topic: "React DevTools",
    question: "Which browser extension helps debug React components?",
    options: ["Redux Logger", "React DevTools", "Chrome Inspector", "JSX Linter"],
    answer: "React DevTools",
    explanation: "React DevTools shows component tree, props, and state. Source: React DevTools GitHub."
  },
  {
    week: 5,
    topic: "Performance",
    question: "Which hook is used to memoize values?",
    options: ["useState", "useRef", "useMemo", "useEffect"],
    answer: "useMemo",
    explanation: "useMemo caches computed values to avoid recalculations. Source: React Docs - useMemo."
  },
  {
    week: 5,
    topic: "Hooks",
    question: "When does useEffect run by default?",
    options: [
      "Only after unmounting",
      "On every re-render",
      "Only once after mount",
      "Before component renders"
    ],
    answer: "On every re-render",
    explanation: "useEffect runs after every render unless a dependency array is provided. Source: React Docs."
  },
  {
    week: 6,
    topic: "React Router",
    question: "Which package is commonly used for routing in React?",
    options: ["react-dom-router", "react-router-dom", "react-navigation", "react-router"],
    answer: "react-router-dom",
    explanation: "react-router-dom is the standard library for routing in web-based React apps. Source: React Router Docs"
  },
  {
    week: 6,
    topic: "Routing",
    question: "Which hook is used to navigate programmatically in React Router v6?",
    options: ["useLocation", "useRoute", "useNavigate", "useHistory"],
    answer: "useNavigate",
    explanation: "useNavigate replaces useHistory in React Router v6. Source: React Router Docs"
  },
  {
    week: 6,
    topic: "Routes",
    question: "What is the correct syntax to define a route in React Router v6?",
    options: [
      "<Route path='/about' component={About} />",
      "<Route exact path='/about' component={About} />",
      "<Route path='/about' element={<About />} />",
      "<Router path='/about' render={About} />"
    ],
    answer: "<Route path='/about' element={<About />} />",
    explanation: "React Router v6 uses the 'element' prop instead of 'component'. Source: React Router Docs"
  },
  {
    week: 6,
    topic: "Nested Routes",
    question: "How do you render a nested route inside a component?",
    options: ["<Nested />", "<RouteOutlet />", "<Outlet />", "<Child />"],
    answer: "<Outlet />",
    explanation: "<Outlet /> is used as a placeholder for nested routes in React Router. Source: React Router Docs"
  },
  {
    week: 6,
    topic: "Dynamic Routing",
    question: "How do you define a dynamic route parameter in React Router?",
    options: ["/user/:id", "/user/*", "/user?$id", "/user[id]"],
    answer: "/user/:id",
    explanation: "Colon syntax is used to define dynamic route segments. Source: React Router Docs"
  },
  {
    week: 6,
    topic: "Navigation",
    question: "Which hook gives access to the current URL in React Router v6?",
    options: ["usePath", "useLocation", "useURL", "useRoute"],
    answer: "useLocation",
    explanation: "useLocation returns info about the current route's location object. Source: React Router Docs"
  },
  {
    week: 6,
    topic: "Routing Patterns",
    question: "What is code splitting in routing used for?",
    options: [
      "Reducing component nesting",
      "Loading routes as needed",
      "Optimizing route speed",
      "Caching route content"
    ],
    answer: "Loading routes as needed",
    explanation: "Code splitting helps load route components only when required. Source: Web Dev Simplified"
  },

  // ---------- WEEK 7: State Management ----------
  {
    week: 7,
    topic: "Redux",
    question: "In Redux, what is a reducer?",
    options: [
      "Function to dispatch actions",
      "Function to update state",
      "Component for UI updates",
      "Redux middleware"
    ],
    answer: "Function to update state",
    explanation: "A reducer takes the previous state and an action, and returns the next state. Source: Redux Docs"
  },
  {
    week: 7,
    topic: "Redux Toolkit",
    question: "Which function from Redux Toolkit helps create reducers easily?",
    options: ["createSlice", "createReducer", "useReducer", "makeReducer"],
    answer: "createSlice",
    explanation: "createSlice automatically generates reducer and actions. Source: Redux Toolkit Docs"
  },
  {
    week: 7,
    topic: "Context API",
    question: "When should you use Context API instead of Redux?",
    options: [
      "For routing",
      "For form handling",
      "For small to medium state needs",
      "For database operations"
    ],
    answer: "For small to medium state needs",
    explanation: "Context is good for sharing global state across a few components. Source: React Docs"
  },
  {
    week: 7,
    topic: "Redux Basics",
    question: "Which hook connects a component to the Redux store?",
    options: ["useSelector", "useContext", "useState", "useStore"],
    answer: "useSelector",
    explanation: "useSelector is used to read values from the Redux store. Source: Redux Docs"
  },
  {
    week: 7,
    topic: "Redux Middleware",
    question: "What is the role of middleware in Redux?",
    options: [
      "Modify actions before reducers",
      "Connect reducers to components",
      "Style Redux components",
      "Replace useState"
    ],
    answer: "Modify actions before reducers",
    explanation: "Middleware like redux-thunk can intercept and modify actions. Source: Redux Docs"
  },
  {
    week: 7,
    topic: "Redux Toolkit",
    question: "Which hook dispatches actions in Redux Toolkit?",
    options: ["useState", "useDispatch", "useAction", "dispatchHook"],
    answer: "useDispatch",
    explanation: "useDispatch allows you to trigger actions to modify state. Source: Redux Toolkit Docs"
  },
  {
    week: 7,
    topic: "Redux vs Context",
    question: "Which of the following is TRUE about Redux vs Context API?",
    options: [
      "Context is better for large apps",
      "Redux has built-in async support",
      "Redux uses global immutable state",
      "Context uses middleware by default"
    ],
    answer: "Redux uses global immutable state",
    explanation: "Redux state is immutable and centralized, unlike Context. Source: Redux vs Context comparison – Academind"
  },

  // ---------- WEEK 8: Backend with Node.js ----------
  {
    week: 8,
    topic: "Node.js",
    question: "Which module is used to build servers in Node.js?",
    options: ["fs", "http", "url", "path"],
    answer: "http",
    explanation: "The built-in 'http' module is used to create HTTP servers. Source: Node.js Docs"
  },
  {
    week: 8,
    topic: "Express",
    question: "What does Express.js simplify in Node?",
    options: [
      "Filesystem operations",
      "Building RESTful APIs",
      "Database querying",
      "Running scripts"
    ],
    answer: "Building RESTful APIs",
    explanation: "Express provides a clean syntax for building APIs. Source: Express.js Docs"
  },
  {
    week: 8,
    topic: "Express Routing",
    question: "What method handles GET requests in Express?",
    options: ["app.get()", "app.route()", "app.getRoute()", "get.route()"],
    answer: "app.get()",
    explanation: "app.get() is used to define routes for GET requests. Source: Express.js Routing Docs"
  },
  {
    week: 8,
    topic: "Middleware",
    question: "What is middleware in Express?",
    options: [
      "UI component",
      "Database connector",
      "Function that runs between request and response",
      "Client-side validator"
    ],
    answer: "Function that runs between request and response",
    explanation: "Middleware functions can log, validate, or modify requests. Source: Express Docs - Middleware"
  },
  {
    week: 8,
    topic: "REST APIs",
    question: "Which HTTP method is used to update data?",
    options: ["GET", "PUT", "DELETE", "OPTIONS"],
    answer: "PUT",
    explanation: "PUT is used to fully update an existing resource. Source: MDN Web Docs - HTTP Methods"
  },
  {
    week: 8,
    topic: "Express Setup",
    question: "Which command installs Express in a Node.js project?",
    options: ["npm add express", "npm install express", "node install express", "express init"],
    answer: "npm install express",
    explanation: "Express is installed via npm using this command. Source: Express.js Docs"
  },
  {
    week: 8,
    topic: "Handling Requests",
    question: "How do you parse JSON request bodies in Express?",
    options: [
      "req.getBody()",
      "express.body()",
      "app.use(express.json())",
      "app.readJSON()"
    ],
    answer: "app.use(express.json())",
    explanation: "express.json() middleware is used to parse JSON data. Source: Express Docs - Request handling"
  },
  {
    week: 9,
    topic: "MongoDB",
    question: "Which data format is primarily used in MongoDB?",
    options: ["XML", "YAML", "JSON", "CSV"],
    answer: "JSON",
    explanation: "MongoDB stores data in BSON, which is a binary-encoded format of JSON. Source: MongoDB Docs"
  },
  {
    week: 9,
    topic: "MongoDB CRUD",
    question: "Which command is used to insert a document into a MongoDB collection?",
    options: ["insert()", "create()", "add()", "insertOne()"],
    answer: "insertOne()",
    explanation: "`insertOne()` is used to add a single document to a collection. Source: MongoDB CRUD Docs"
  },
  {
    week: 9,
    topic: "Mongoose",
    question: "What is a Mongoose schema?",
    options: [
      "A query language",
      "A database",
      "Blueprint for a document",
      "A route definition"
    ],
    answer: "Blueprint for a document",
    explanation: "A schema defines the structure of documents in a collection. Source: Mongoose Docs"
  },
  {
    week: 9,
    topic: "MongoDB CRUD",
    question: "Which method retrieves all documents from a MongoDB collection?",
    options: ["findOne()", "select()", "queryAll()", "find()"],
    answer: "find()",
    explanation: "`find()` returns all matching documents. Source: MongoDB University"
  },
  {
    week: 9,
    topic: "Mongoose Models",
    question: "Which function creates a model from a schema in Mongoose?",
    options: ["mongoose.model()", "mongoose.schema()", "model.create()", "schema.build()"],
    answer: "mongoose.model()",
    explanation: "`mongoose.model()` compiles a model from a schema. Source: Mongoose Docs"
  },
  {
    week: 9,
    topic: "Database Relationships",
    question: "What is population in Mongoose used for?",
    options: [
      "Aggregating data",
      "Referencing documents",
      "Sorting collections",
      "Schema validation"
    ],
    answer: "Referencing documents",
    explanation: "`populate()` allows referencing documents in other collections. Source: Mongoose Docs"
  },
  {
    week: 9,
    topic: "MongoDB",
    question: "Which of the following is a NoSQL database?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
    answer: "MongoDB",
    explanation: "MongoDB is a popular NoSQL database that uses a document-oriented approach. Source: MongoDB Docs"
  },

  // ---------- WEEK 10: Authentication & Authorization ----------
  {
    week: 10,
    topic: "JWT",
    question: "What does JWT stand for?",
    options: ["Java Web Token", "JSON Web Token", "JavaScript Web Tool", "Joined Web Token"],
    answer: "JSON Web Token",
    explanation: "JWT is an open standard for secure token-based authentication. Source: JWT.io"
  },
  {
    week: 10,
    topic: "Cookies & Sessions",
    question: "Where are session cookies typically stored?",
    options: ["LocalStorage", "Server memory", "Client's browser", "MongoDB"],
    answer: "Client's browser",
    explanation: "Cookies are stored in the browser and sent with each request. Source: Auth0 Blog"
  },
  {
    week: 10,
    topic: "JWT",
    question: "Which part of a JWT contains the signature?",
    options: ["Header", "Payload", "Footer", "Third segment"],
    answer: "Third segment",
    explanation: "A JWT has three parts: header, payload, and signature. Source: JWT.io Docs"
  },
  {
    week: 10,
    topic: "Hashing",
    question: "Which library is commonly used for hashing passwords in Node.js?",
    options: ["jsonwebtoken", "bcrypt", "hashlib", "cryptoJS"],
    answer: "bcrypt",
    explanation: "bcrypt is widely used for password hashing and salting. Source: bcrypt NPM Docs"
  },
  {
    week: 10,
    topic: "Authorization",
    question: "What is the main difference between authentication and authorization?",
    options: [
      "Auth = check identity, Authz = grant access",
      "Auth = access level, Authz = identity",
      "No difference",
      "Auth = frontend, Authz = backend"
    ],
    answer: "Auth = check identity, Authz = grant access",
    explanation: "Authentication verifies identity; Authorization grants access rights. Source: Auth0 Blog"
  },
  {
    week: 10,
    topic: "Protected Routes",
    question: "What is the purpose of protected routes in a web app?",
    options: [
      "To display ads",
      "To restrict access to authorized users only",
      "To redirect all traffic",
      "To cache the pages"
    ],
    answer: "To restrict access to authorized users only",
    explanation: "Protected routes require users to be authenticated before access. Source: React Router & Auth0 Docs"
  },
  {
    week: 10,
    topic: "JWT",
    question: "Where should JWT tokens be stored in the client-side app for security?",
    options: ["LocalStorage", "IndexedDB", "Cookies (HttpOnly)", "JavaScript variable"],
    answer: "Cookies (HttpOnly)",
    explanation: "HttpOnly cookies prevent access via JavaScript and mitigate XSS. Source: JWT.io Security Best Practices"
  }

];
const aiMlMcqs = [
  // ---------------- WEEK 1: Python Programming ----------------
  {
    week: 1,
    topic: "Python Basics",
    question: "What is the output of: `print(type([]))`?",
    options: ["<class 'list'>", "<class 'dict'>", "<class 'set'>", "<class 'tuple'>"],
    answer: "<class 'list'>",
    explanation: "`[]` represents an empty list in Python. Source: Python.org"
  },
  {
    week: 1,
    topic: "Data Structures",
    question: "Which data structure in Python is immutable?",
    options: ["List", "Set", "Tuple", "Dictionary"],
    answer: "Tuple",
    explanation: "Tuples cannot be changed once created. Source: Python.org"
  },
  {
    week: 1,
    topic: "NumPy",
    question: "What is the primary purpose of NumPy?",
    options: ["Web development", "Symbolic computation", "Numerical computing", "GUI development"],
    answer: "Numerical computing",
    explanation: "NumPy is used for high-performance numerical computations. Source: NumPy Docs"
  },
  {
    week: 1,
    topic: "Pandas",
    question: "Which Pandas object is used to store tabular data?",
    options: ["DataFrame", "Array", "Series", "Dict"],
    answer: "DataFrame",
    explanation: "DataFrame is a 2D labeled data structure in Pandas. Source: Pandas Docs"
  },
  {
    week: 1,
    topic: "Python Syntax",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "define", "def", "lambda"],
    answer: "def",
    explanation: "`def` is used to define a function. Source: Python.org"
  },
  {
    week: 1,
    topic: "Data Structures",
    question: "Which operation removes the last item from a list?",
    options: [".pop()", ".remove()", ".delete()", ".clear()"],
    answer: ".pop()",
    explanation: "`.pop()` removes and returns the last item. Source: Python Docs"
  },
  {
    week: 1,
    topic: "NumPy",
    question: "What does `np.array([1,2,3])` do?",
    options: [
      "Creates a list",
      "Creates a dictionary",
      "Creates a NumPy array",
      "Creates a Pandas series"
    ],
    answer: "Creates a NumPy array",
    explanation: "NumPy's array() function converts a list into an ndarray. Source: NumPy Docs"
  },
  {
    week: 1,
    topic: "Pandas",
    question: "What does `df.head()` return in Pandas?",
    options: [
      "Last 5 rows of DataFrame",
      "First 5 rows of DataFrame",
      "Column names",
      "Summary statistics"
    ],
    answer: "First 5 rows of DataFrame",
    explanation: "`head()` shows the first 5 rows by default. Source: Pandas Docs"
  },
  {
    week: 1,
    topic: "Python Basics",
    question: "Which of these is not a valid Python data type?",
    options: ["int", "float", "char", "bool"],
    answer: "char",
    explanation: "Python does not have a `char` type; characters are strings. Source: Python.org"
  },
  {
    week: 1,
    topic: "Data Structures",
    question: "Which method is used to add an item to a set?",
    options: [".add()", ".append()", ".insert()", ".extend()"],
    answer: ".add()",
    explanation: "`add()` is used for sets, not lists. Source: Python.org"
  },

  // ---------------- WEEK 2: Statistics & Mathematics ----------------
  {
    week: 2,
    topic: "Statistics",
    question: "What is the mean of the numbers 2, 4, 6, 8, 10?",
    options: ["6", "5", "7", "8"],
    answer: "6",
    explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6. Source: Khan Academy"
  },
  {
    week: 2,
    topic: "Probability",
    question: "What is the probability of getting heads in a fair coin toss?",
    options: ["0.25", "0.5", "1", "0.75"],
    answer: "0.5",
    explanation: "A fair coin has two equally likely outcomes: heads or tails. Source: StatQuest"
  },
  {
    week: 2,
    topic: "Linear Algebra",
    question: "What is the dot product of [1, 2] and [3, 4]?",
    options: ["7", "11", "10", "14"],
    answer: "11",
    explanation: "1×3 + 2×4 = 3 + 8 = 11. Source: Khan Academy - Linear Algebra"
  },
  {
    week: 2,
    topic: "Calculus",
    question: "What is the derivative of x²?",
    options: ["x", "2x", "x^2", "1"],
    answer: "2x",
    explanation: "d/dx(x²) = 2x. Source: Khan Academy - Derivatives"
  },
  {
    week: 2,
    topic: "Descriptive Statistics",
    question: "Which measure represents the middle value in a dataset?",
    options: ["Mean", "Mode", "Range", "Median"],
    answer: "Median",
    explanation: "Median is the central value in an ordered dataset. Source: StatQuest"
  },
  {
    week: 2,
    topic: "Probability",
    question: "If two events A and B are independent, what is P(A ∩ B)?",
    options: ["P(A) + P(B)", "P(A) - P(B)", "P(A) × P(B)", "P(A)/P(B)"],
    answer: "P(A) × P(B)",
    explanation: "For independent events, joint probability is the product. Source: StatQuest"
  },
  {
    week: 2,
    topic: "Linear Algebra",
    question: "A 3x2 matrix has how many rows and columns?",
    options: ["3 rows, 2 columns", "2 rows, 3 columns", "3 columns, 2 rows", "6 rows"],
    answer: "3 rows, 2 columns",
    explanation: "Matrix dimensions are written as rows × columns. Source: 3Blue1Brown"
  },
  {
    week: 2,
    topic: "Descriptive Statistics",
    question: "Which is NOT a measure of central tendency?",
    options: ["Mean", "Mode", "Median", "Standard Deviation"],
    answer: "Standard Deviation",
    explanation: "Standard deviation measures spread, not central tendency. Source: Khan Academy"
  },
  {
    week: 2,
    topic: "Calculus",
    question: "The area under a curve is calculated using:",
    options: ["Derivative", "Gradient", "Integral", "Tangent"],
    answer: "Integral",
    explanation: "Integrals are used to find area under curves. Source: Khan Academy"
  },
  {
    week: 2,
    topic: "Probability",
    question: "What is the range of any probability value?",
    options: ["-1 to 1", "0 to ∞", "0 to 1", "Any real number"],
    answer: "0 to 1",
    explanation: "Probability values range from 0 (impossible) to 1 (certain). Source: StatQuest"
  },
  {
    week: 3,
    topic: "Matplotlib",
    question: "Which function is used to display a plot in Matplotlib?",
    options: ["show()", "display()", "plot()", "render()"],
    answer: "show()",
    explanation: "`plt.show()` displays the plot window. Source: Matplotlib Docs"
  },
  {
    week: 3,
    topic: "Matplotlib",
    question: "Which argument changes the line style in Matplotlib?",
    options: ["linewidth", "linestyle", "marker", "style"],
    answer: "linestyle",
    explanation: "`linestyle='--'` creates dashed lines. Source: Matplotlib Docs"
  },
  {
    week: 3,
    topic: "Seaborn",
    question: "Which Seaborn function creates box plots?",
    options: ["sns.boxplot()", "sns.histplot()", "sns.scatterplot()", "sns.lineplot()"],
    answer: "sns.boxplot()",
    explanation: "Box plots visualize distribution and outliers. Source: Seaborn Docs"
  },
  {
    week: 3,
    topic: "Seaborn",
    question: "Which parameter in Seaborn heatmap displays correlation values?",
    options: ["show=True", "annot=True", "label=True", "value=True"],
    answer: "annot=True",
    explanation: "`annot=True` shows numbers on the heatmap. Source: Seaborn Docs"
  },
  {
    week: 3,
    topic: "Plotly",
    question: "Plotly is mainly used for:",
    options: ["Static plots", "3D modeling", "Interactive plots", "Mathematical analysis"],
    answer: "Interactive plots",
    explanation: "Plotly allows zooming, hovering, and saving interactively. Source: Plotly Express"
  },
  {
    week: 3,
    topic: "Matplotlib",
    question: "What does `plt.xlabel('X')` do?",
    options: ["Labels x-axis", "Changes x limits", "Sets title", "Draws x-line"],
    answer: "Labels x-axis",
    explanation: "Adds 'X' label to x-axis. Source: Matplotlib Docs"
  },
  {
    week: 3,
    topic: "Seaborn",
    question: "Which Seaborn function is used for distribution plots?",
    options: ["sns.histplot()", "sns.scatterplot()", "sns.barplot()", "sns.kdeplot()"],
    answer: "sns.histplot()",
    explanation: "Used to plot histograms. Source: Seaborn Docs"
  },
  {
    week: 3,
    topic: "Correlation",
    question: "Correlation heatmaps help in:",
    options: [
      "Detecting outliers",
      "Training models",
      "Visualizing variable relationships",
      "Data splitting"
    ],
    answer: "Visualizing variable relationships",
    explanation: "Heatmaps show correlation between numerical features. Source: StatQuest"
  },
  {
    week: 3,
    topic: "Plotly",
    question: "Which of the following is NOT a Plotly chart?",
    options: ["Treemap", "Scatter", "Boxplot", "Histogram2DContour"],
    answer: "Histogram2DContour",
    explanation: "It's a real chart, trick option—Plotly supports all. Source: Plotly Docs"
  },
  {
    week: 3,
    topic: "General",
    question: "Which library uses `fig = px.bar()` syntax?",
    options: ["Matplotlib", "Seaborn", "Plotly", "Pandas"],
    answer: "Plotly",
    explanation: "Plotly Express uses `px` interface. Source: Plotly Express Docs"
  },

  // -------------------- WEEK 4: Supervised Learning Basics --------------------
  {
    week: 4,
    topic: "Linear Regression",
    question: "Which of the following is a regression algorithm?",
    options: ["Linear Regression", "Logistic Regression", "K-Means", "Naive Bayes"],
    answer: "Linear Regression",
    explanation: "Used for predicting continuous values. Source: scikit-learn"
  },
  {
    week: 4,
    topic: "Linear Regression",
    question: "What does the slope in a regression line represent?",
    options: ["Intercept", "Change in X", "Change in Y per unit X", "Error"],
    answer: "Change in Y per unit X",
    explanation: "Slope shows how much Y changes with X. Source: StatQuest"
  },
  {
    week: 4,
    topic: "Logistic Regression",
    question: "Logistic regression outputs:",
    options: ["Integer", "Probability", "Class name", "Slope"],
    answer: "Probability",
    explanation: "It estimates the probability of a class. Source: scikit-learn Docs"
  },
  {
    week: 4,
    topic: "Model Evaluation",
    question: "Which metric is NOT used for classification?",
    options: ["Accuracy", "Precision", "Recall", "RMSE"],
    answer: "RMSE",
    explanation: "RMSE is for regression tasks. Source: scikit-learn Metrics"
  },
  {
    week: 4,
    topic: "Linear Regression",
    question: "What is the loss function used in linear regression?",
    options: ["Binary cross-entropy", "Mean squared error", "Hinge loss", "Log loss"],
    answer: "Mean squared error",
    explanation: "MSE measures squared differences. Source: StatQuest"
  },
  {
    week: 4,
    topic: "Logistic Regression",
    question: "Which function is used in logistic regression?",
    options: ["Linear", "Sigmoid", "ReLU", "Softmax"],
    answer: "Sigmoid",
    explanation: "Sigmoid converts scores to probability. Source: Andrew Ng ML Course"
  },
  {
    week: 4,
    topic: "Model Evaluation",
    question: "Which metric is most useful when dealing with imbalanced data?",
    options: ["Accuracy", "Recall", "Precision", "F1-Score"],
    answer: "F1-Score",
    explanation: "F1 balances precision and recall. Source: scikit-learn"
  },
  {
    week: 4,
    topic: "Model Training",
    question: "Which method splits data into training and test sets?",
    options: ["train_test_split()", "split_data()", "data_split()", "make_split()"],
    answer: "train_test_split()",
    explanation: "Used from `sklearn.model_selection`. Source: scikit-learn"
  },
  {
    week: 4,
    topic: "Regression",
    question: "Which of the following causes underfitting?",
    options: ["High complexity", "Too much training", "Too simple model", "Large dataset"],
    answer: "Too simple model",
    explanation: "Simple models can't capture patterns. Source: StatQuest"
  },
  {
    week: 4,
    topic: "Logistic Regression",
    question: "Logistic regression is best suited for:",
    options: ["Continuous output", "Clustering", "Binary classification", "Regression only"],
    answer: "Binary classification",
    explanation: "It's used for 0/1 outcome problems. Source: scikit-learn"
  },

  // -------------------- WEEK 5: Model Improvement & Evaluation --------------------
  {
    week: 5,
    topic: "Cross-validation",
    question: "What does k in k-fold cross-validation represent?",
    options: ["Number of rows", "Number of columns", "Number of folds", "Number of features"],
    answer: "Number of folds",
    explanation: "Dataset is divided into k parts for validation. Source: scikit-learn Docs"
  },
  {
    week: 5,
    topic: "Grid Search",
    question: "Grid search is used for:",
    options: ["Data cleaning", "Model tuning", "Visualization", "Regularization"],
    answer: "Model tuning",
    explanation: "It finds the best hyperparameters. Source: scikit-learn GridSearchCV"
  },
  {
    week: 5,
    topic: "Confusion Matrix",
    question: "Which value in a confusion matrix represents false negatives?",
    options: ["Top-left", "Top-right", "Bottom-left", "Bottom-right"],
    answer: "Bottom-left",
    explanation: "FN = predicted negative, actual positive. Source: StatQuest"
  },
  {
    week: 5,
    topic: "ROC Curve",
    question: "The ROC curve plots:",
    options: [
      "True Positive Rate vs False Positive Rate",
      "Accuracy vs Recall",
      "Precision vs Recall",
      "F1 Score vs Recall"
    ],
    answer: "True Positive Rate vs False Positive Rate",
    explanation: "Used to assess classifier performance. Source: scikit-learn"
  },
  {
    week: 5,
    topic: "Model Evaluation",
    question: "AUC stands for:",
    options: ["Average under computation", "Area under confusion", "Area under curve", "Accuracy under crossval"],
    answer: "Area under curve",
    explanation: "Measures ROC curve area. Source: scikit-learn Docs"
  },
  {
    week: 5,
    topic: "Confusion Matrix",
    question: "High false positives can lead to:",
    options: [
      "Missed positives",
      "Unnecessary actions",
      "More accuracy",
      "No effect"
    ],
    answer: "Unnecessary actions",
    explanation: "False alarms increase unnecessary interventions. Source: StatQuest"
  },
  {
    week: 5,
    topic: "Grid Search",
    question: "Which method performs exhaustive search over parameters?",
    options: ["Random Search", "Bayesian Tuning", "Grid Search", "AutoML"],
    answer: "Grid Search",
    explanation: "Tries every combination of parameters. Source: scikit-learn"
  },
  {
    week: 5,
    topic: "Cross-validation",
    question: "Why is cross-validation important?",
    options: [
      "Increases dataset size",
      "Prevents overfitting",
      "Decreases memory usage",
      "Speeds up training"
    ],
    answer: "Prevents overfitting",
    explanation: "It tests model on different data splits. Source: Andrew Ng ML Course"
  },
  {
    week: 5,
    topic: "ROC Curve",
    question: "A perfect classifier has AUC of:",
    options: ["0", "0.5", "1.0", "0.75"],
    answer: "1.0",
    explanation: "Perfect separation gives AUC = 1. Source: scikit-learn"
  },
  {
    week: 5,
    topic: "Evaluation Metrics",
    question: "Which metric is best for imbalanced classification?",
    options: ["Accuracy", "F1-Score", "Recall", "RMSE"],
    answer: "F1-Score",
    explanation: "Balances false positives and false negatives. Source: scikit-learn"
  },
  //week6
  {
  week: 6,
  topic: "K-Means",
  question: "Which metric does K-Means minimize?",
  options: ["Inter-cluster distance", "Euclidean distance", "Centroid variance", "Within-cluster sum of squares"],
  answer: "Within-cluster sum of squares",
  explanation: "K-Means minimizes the sum of squared distances within each cluster. Source: scikit-learn"
},
{
  week: 6,
  topic: "K-Means",
  question: "K in K-Means refers to:",
  options: ["# of features", "# of clusters", "Iterations", "Distance metric"],
  answer: "# of clusters",
  explanation: "K specifies how many clusters to divide the data into. Source: StatQuest"
},
{
  week: 6,
  topic: "Hierarchical Clustering",
  question: "What is a dendrogram used for?",
  options: ["Predicting labels", "Reducing dimensions", "Showing cluster hierarchy", "Plotting distributions"],
  answer: "Showing cluster hierarchy",
  explanation: "Dendrogram is a tree diagram representing clusters. Source: Khan Academy"
},
{
  week: 6,
  topic: "Hierarchical Clustering",
  question: "Which linkage is used in hierarchical clustering?",
  options: ["Average", "Single", "Complete", "All of the above"],
  answer: "All of the above",
  explanation: "All are linkage strategies for clustering. Source: scikit-learn docs"
},
{
  week: 6,
  topic: "PCA",
  question: "PCA stands for:",
  options: ["Partial Component Analysis", "Principal Component Analysis", "Projected Clustering Algorithm", "Principal Clustering Algorithm"],
  answer: "Principal Component Analysis",
  explanation: "PCA is a dimensionality reduction technique. Source: 3Blue1Brown"
},
{
  week: 6,
  topic: "PCA",
  question: "PCA reduces dimensions by:",
  options: ["Deleting low-variance features", "Linear projection", "Clustering", "Removing nulls"],
  answer: "Linear projection",
  explanation: "PCA projects data to lower dimensions linearly. Source: StatQuest"
},
{
  week: 6,
  topic: "t-SNE",
  question: "t-SNE is mainly used for:",
  options: ["Clustering", "Dimensionality reduction for visualization", "Prediction", "Classification"],
  answer: "Dimensionality reduction for visualization",
  explanation: "t-SNE is a nonlinear visualizer for high-dimensional data. Source: YouTube - StatQuest"
},
{
  week: 6,
  topic: "t-SNE",
  question: "t-SNE stands for:",
  options: ["Tree-Structured Nearest Encoder", "T-distributed Stochastic Neighbor Embedding", "Tensor Similarity Network Embedding", "Temporal Signal Noise Encoder"],
  answer: "T-distributed Stochastic Neighbor Embedding",
  explanation: "t-SNE models similarity between points in lower dimensions. Source: sklearn"
},
{
  week: 6,
  topic: "Unsupervised Learning",
  question: "Unsupervised learning differs from supervised because it:",
  options: ["Uses labeled data", "Doesn't use any data", "Uses unlabeled data", "Predicts outputs"],
  answer: "Uses unlabeled data",
  explanation: "It finds patterns without known outputs. Source: DeepLearning.ai"
},
{
  week: 6,
  topic: "Clustering",
  question: "Which method requires predefined number of clusters?",
  options: ["DBSCAN", "K-Means", "Agglomerative", "Mean Shift"],
  answer: "K-Means",
  explanation: "K-Means requires you to specify k. Source: scikit-learn docs"
},
//week 7
{
  week: 7,
  topic: "Text Preprocessing",
  question: "Which step is usually performed first in NLP?",
  options: ["POS tagging", "Tokenization", "TF-IDF", "Embedding"],
  answer: "Tokenization",
  explanation: "Tokenization splits text into words/tokens. Source: NLTK Book"
},
{
  week: 7,
  topic: "Text Cleaning",
  question: "Removing stopwords helps to:",
  options: ["Improve accuracy", "Remove noise", "Normalize text", "All of the above"],
  answer: "All of the above",
  explanation: "Stopwords (like 'the', 'is') carry less meaning. Source: spaCy Docs"
},
{
  week: 7,
  topic: "TF-IDF",
  question: "TF-IDF combines:",
  options: ["Frequency and order", "Term frequency and inverse document frequency", "Length and context", "Bag of Words and Embeddings"],
  answer: "Term frequency and inverse document frequency",
  explanation: "It down-weights frequent terms and boosts rare ones. Source: scikit-learn"
},
{
  week: 7,
  topic: "Word Embeddings",
  question: "Word2Vec is a type of:",
  options: ["Tokenizer", "Preprocessing", "Word Embedding", "POS Tagger"],
  answer: "Word Embedding",
  explanation: "Word2Vec represents words as dense vectors. Source: Google Research"
},
{
  week: 7,
  topic: "Word Embeddings",
  question: "What is a key benefit of embeddings?",
  options: ["Faster tokenization", "Better visualization", "Captures semantic meaning", "Creates bag-of-words"],
  answer: "Captures semantic meaning",
  explanation: "Word embeddings encode similarity and context. Source: DeepLearning.ai NLP"
},
{
  week: 7,
  topic: "Text Classification",
  question: "Which is a common task in NLP?",
  options: ["Sentiment Analysis", "Sorting Arrays", "Image Classification", "Regression"],
  answer: "Sentiment Analysis",
  explanation: "Classifies text as positive/negative/etc. Source: Kaggle NLP Datasets"
},
{
  week: 7,
  topic: "NLP Libraries",
  question: "spaCy is used for:",
  options: ["Web scraping", "Visualizations", "NLP tasks like parsing and tagging", "Deep learning"],
  answer: "NLP tasks like parsing and tagging",
  explanation: "spaCy provides NLP pipeline tools. Source: spaCy Docs"
},
{
  week: 7,
  topic: "Tokenization",
  question: "Which library uses `word_tokenize()`?",
  options: ["scikit-learn", "spaCy", "NLTK", "TensorFlow"],
  answer: "NLTK",
  explanation: "`word_tokenize()` is from NLTK for breaking text. Source: NLTK Book"
},
{
  week: 7,
  topic: "TF-IDF",
  question: "A high TF-IDF score means:",
  options: ["Word is rare in a document", "Word is frequent in corpus", "Word is common across documents", "Document is too long"],
  answer: "Word is rare in a document",
  explanation: "TF-IDF boosts rare yet meaningful terms. Source: sklearn docs"
},
{
  week: 7,
  topic: "NLP Applications",
  question: "Which is NOT an NLP application?",
  options: ["Spam detection", "Translation", "Face detection", "Chatbots"],
  answer: "Face detection",
  explanation: "Face detection is from computer vision, not NLP. Source: DeepLearning.ai"
},
//week 8
{
  week: 8,
  topic: "Neurons",
  question: "A perceptron is:",
  options: ["Data type", "Activation function", "Single-layer neural model", "Loss function"],
  answer: "Single-layer neural model",
  explanation: "Perceptrons are the foundation of neural nets. Source: 3Blue1Brown"
},
{
  week: 8,
  topic: "Activation Functions",
  question: "Which activation is used most in hidden layers?",
  options: ["Sigmoid", "Softmax", "ReLU", "Linear"],
  answer: "ReLU",
  explanation: "ReLU helps avoid vanishing gradients. Source: DeepLearning.ai"
},
{
  week: 8,
  topic: "Backpropagation",
  question: "Backpropagation computes:",
  options: ["Forward loss", "Gradient of loss", "Neuron count", "Batch size"],
  answer: "Gradient of loss",
  explanation: "It helps update weights using gradients. Source: StatQuest"
},
{
  week: 8,
  topic: "Loss Functions",
  question: "Binary classification uses which loss?",
  options: ["MSE", "Categorical Crossentropy", "Binary Crossentropy", "Hinge Loss"],
  answer: "Binary Crossentropy",
  explanation: "Binary tasks use cross-entropy for two classes. Source: TensorFlow Docs"
},
{
  week: 8,
  topic: "Neural Nets",
  question: "What does an epoch mean?",
  options: ["One batch", "One forward pass", "One full pass over dataset", "Single weight update"],
  answer: "One full pass over dataset",
  explanation: "Epoch = training over entire dataset once. Source: DeepLearning.ai"
},
{
  week: 8,
  topic: "Keras",
  question: "Which library is used to build deep networks easily?",
  options: ["NumPy", "scikit-learn", "Keras", "OpenCV"],
  answer: "Keras",
  explanation: "Keras simplifies neural net creation. Source: TensorFlow Docs"
},
{
  week: 8,
  topic: "TensorFlow",
  question: "TensorFlow is primarily used for:",
  options: ["Web apps", "Image editing", "Deep learning", "Visualization"],
  answer: "Deep learning",
  explanation: "TensorFlow is a popular ML framework. Source: TensorFlow Docs"
},
{
  week: 8,
  topic: "Activation Functions",
  question: "Sigmoid outputs values between:",
  options: ["0 and 1", "-1 and 1", "-∞ and ∞", "0 and ∞"],
  answer: "0 and 1",
  explanation: "Sigmoid squashes output between 0 and 1. Source: StatQuest"
},
{
  week: 8,
  topic: "Neural Networks",
  question: "Too many layers can cause:",
  options: ["Overfitting", "Underfitting", "Better accuracy", "Faster training"],
  answer: "Overfitting",
  explanation: "Deep models may memorize training data. Source: DeepLearning.ai"
},
{
  week: 8,
  topic: "MNIST",
  question: "MNIST is a dataset for:",
  options: ["Sentiment", "Time series", "Digit classification", "Object detection"],
  answer: "Digit classification",
  explanation: "MNIST contains images of handwritten digits. Source: Yann LeCun"
},
//week 9
{
  week: 9,
  topic: "Image Basics",
  question: "In computer vision, an image is usually represented as:",
  options: ["Text array", "1D list", "2D matrix or 3D array", "Dictionary"],
  answer: "2D matrix or 3D array",
  explanation: "Grayscale images use 2D arrays, RGB uses 3D. Source: OpenCV docs"
},
{
  week: 9,
  topic: "Convolution",
  question: "What does a convolution operation do?",
  options: ["Subtracts layers", "Compresses image", "Extracts features", "Classifies image"],
  answer: "Extracts features",
  explanation: "It uses filters to capture patterns like edges. Source: CS231n"
},
{
  week: 9,
  topic: "Filters",
  question: "What is a kernel in image processing?",
  options: ["Label", "Image size", "Filter matrix", "Color map"],
  answer: "Filter matrix",
  explanation: "Kernel is a small matrix used to extract features. Source: OpenCV"
},
{
  week: 9,
  topic: "Pooling",
  question: "Max pooling is used to:",
  options: ["Increase image size", "Downsample feature maps", "Train faster", "Convert grayscale to RGB"],
  answer: "Downsample feature maps",
  explanation: "It reduces dimensions and retains important features. Source: DeepLearning.ai"
},
{
  week: 9,
  topic: "CNN",
  question: "CNN stands for:",
  options: ["Computational Neural Network", "Convolutional Neural Network", "Compact Node Network", "Content Neural Net"],
  answer: "Convolutional Neural Network",
  explanation: "CNNs are used mainly in image classification. Source: CS231n Stanford"
},
{
  week: 9,
  topic: "CNN",
  question: "Why are CNNs better than MLPs for images?",
  options: ["Faster GPU training", "Handles sequential data", "Weight sharing & spatial hierarchies", "More loss functions"],
  answer: "Weight sharing & spatial hierarchies",
  explanation: "CNNs efficiently capture spatial features. Source: DeepLearning.ai"
},
{
  week: 9,
  topic: "OpenCV",
  question: "Which function is used to read an image in OpenCV?",
  options: ["cv2.image()", "cv2.open()", "cv2.imread()", "cv2.load_image()"],
  answer: "cv2.imread()",
  explanation: "cv2.imread() loads an image into memory. Source: OpenCV Docs"
},
{
  week: 9,
  topic: "OpenCV",
  question: "cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) is used to:",
  options: ["Blur image", "Resize image", "Convert to grayscale", "Invert image"],
  answer: "Convert to grayscale",
  explanation: "cv2.cvtColor changes color space. Source: OpenCV Docs"
},
{
  week: 9,
  topic: "CNN Layers",
  question: "Which layers are typical in CNNs?",
  options: ["Input, Hidden, Output", "Convolution, Pooling, FC", "Conv, ReLU, RNN", "Dropout, GRU"],
  answer: "Convolution, Pooling, FC",
  explanation: "These layers help extract and classify features. Source: Stanford CS231n"
},
{
  week: 9,
  topic: "Edge Detection",
  question: "Which filter detects edges?",
  options: ["Sobel", "Gaussian", "Median", "Average"],
  answer: "Sobel",
  explanation: "Sobel detects gradients for edge detection. Source: OpenCV Docs"
},
{
  week: 9,
  topic: "Object Detection",
  question: "YOLO stands for:",
  options: ["You Only Learn Once", "You Only Look Once", "Your Object Learning Output", "Yield Output Layer Optimization"],
  answer: "You Only Look Once",
  explanation: "YOLO is a real-time object detection model. Source: YOLO Paper"
},
{
  week: 9,
  topic: "Data Augmentation",
  question: "Augmentation is used to:",
  options: ["Reduce model size", "Add noise", "Increase data diversity", "Fix overfitting"],
  answer: "Increase data diversity",
  explanation: "Helps model generalize better. Source: Keras Docs"
},
{
  week: 9,
  topic: "Transfer Learning",
  question: "In transfer learning, we usually:",
  options: ["Use old weights", "Train from scratch", "Freeze all layers", "Reuse pretrained models"],
  answer: "Reuse pretrained models",
  explanation: "Speeds up training and improves accuracy. Source: TensorFlow Hub"
},
{
  week: 9,
  topic: "Image Classification",
  question: "MNIST images are:",
  options: ["Colored objects", "Dogs vs Cats", "28x28 grayscale digits", "High-res satellite images"],
  answer: "28x28 grayscale digits",
  explanation: "MNIST is a popular benchmark dataset. Source: Yann LeCun"
},
{
  week: 9,
  topic: "Image Shapes",
  question: "An RGB image of 128x128 has shape:",
  options: ["128", "128x3", "128x128", "128x128x3"],
  answer: "128x128x3",
  explanation: "Each pixel has 3 color channels. Source: OpenCV Basics"
},

//week 10
{
  week: 10,
  topic: "Audio Basics",
  question: "An audio signal is a:",
  options: ["Text", "Image", "Time-series waveform", "Matrix"],
  answer: "Time-series waveform",
  explanation: "Audio is represented as time-dependent signals. Source: Librosa Docs"
},
{
  week: 10,
  topic: "Sampling",
  question: "Sampling rate of 44.1kHz means:",
  options: ["44.1K samples per second", "44.1K seconds per sample", "Bits per file", "Volume level"],
  answer: "44.1K samples per second",
  explanation: "It's how frequently the signal is measured. Source: Audacity Docs"
},
{
  week: 10,
  topic: "Audio Features",
  question: "MFCC is used to:",
  options: ["Filter noise", "Plot waveform", "Extract frequency features", "Adjust tempo"],
  answer: "Extract frequency features",
  explanation: "MFCCs mimic human auditory perception. Source: Librosa Docs"
},
{
  week: 10,
  topic: "Speech Recognition",
  question: "Which library is popular for speech recognition?",
  options: ["cv2", "transformers", "speech_recognition", "openai-whisper"],
  answer: "speech_recognition",
  explanation: "This Python library recognizes speech via APIs. Source: PyPI"
},
{
  week: 10,
  topic: "Speech Models",
  question: "Whisper is developed by:",
  options: ["Google", "OpenAI", "Meta", "Apple"],
  answer: "OpenAI",
  explanation: "Whisper is OpenAI’s speech-to-text model. Source: [OpenAI Whisper](https://openai.com/research/whisper)"
},
{
  week: 10,
  topic: "Audio Visualization",
  question: "Librosa is used for:",
  options: ["Image processing", "Signal denoising", "Audio processing", "Neural networks"],
  answer: "Audio processing",
  explanation: "Librosa helps analyze audio signals. Source: librosa.org"
},
{
  week: 10,
  topic: "Model Deployment",
  question: "Flask is used for:",
  options: ["Creating datasets", "Web hosting models", "Training networks", "Data labeling"],
  answer: "Web hosting models",
  explanation: "Flask provides lightweight APIs for ML deployment. Source: Flask docs"
},
{
  week: 10,
  topic: "Deployment",
  question: "Which platform is best for free ML model deployment?",
  options: ["Kaggle", "Colab", "Hugging Face Spaces", "Scikit-learn"],
  answer: "Hugging Face Spaces",
  explanation: "Spaces host ML apps using Gradio/Streamlit. Source: huggingface.co/spaces"
},
{
  week: 10,
  topic: "Docker",
  question: "Docker helps to:",
  options: ["Train models", "Run models in containers", "Write Python code", "Clean data"],
  answer: "Run models in containers",
  explanation: "Docker packages code and dependencies together. Source: docker.com"
},
{
  week: 10,
  topic: "ONNX",
  question: "ONNX is used to:",
  options: ["Convert images", "Deploy NLP models", "Make models interoperable", "Compress models"],
  answer: "Make models interoperable",
  explanation: "ONNX supports exporting models between frameworks. Source: [ONNX.ai](https://onnx.ai/)"
},
{
  week: 10,
  topic: "Gradio",
  question: "Gradio helps to:",
  options: ["Build ML models", "Deploy models with UI", "Train large datasets", "Do version control"],
  answer: "Deploy models with UI",
  explanation: "Gradio creates easy interfaces for ML apps. Source: [gradio.app](https://www.gradio.app)"
},
{
  week: 10,
  topic: "Streaming Models",
  question: "Which tool is used for real-time ML inference?",
  options: ["TensorBoard", "Streamlit", "Kafka", "Pandas"],
  answer: "Kafka",
  explanation: "Kafka handles real-time data pipelines. Source: Apache Kafka Docs"
},
{
  week: 10,
  topic: "Web Deployment",
  question: "To expose a model via API, use:",
  options: ["FastAPI", "NumPy", "PyTorch", "PIL"],
  answer: "FastAPI",
  explanation: "FastAPI builds high-performance APIs. Source: [fastapi.tiangolo.com](https://fastapi.tiangolo.com/)"
},
{
  week: 10,
  topic: "Speech Models",
  question: "Which of these is a speech-to-text model?",
  options: ["BERT", "YOLO", "Whisper", "GPT-4"],
  answer: "Whisper",
  explanation: "Whisper transcribes audio to text. Source: OpenAI"
},
{
  week: 10,
  topic: "Final Step",
  question: "What's the last step in an ML project lifecycle?",
  options: ["Data cleaning", "Deployment", "Model building", "Evaluation"],
  answer: "Deployment",
  explanation: "Model is finally pushed to production. Source: Google MLOps"
}

];

const DataAnaMCQ=[
    {
    week: 1,
    title: "Python for Data Analysis",
    questions: [
      {
        question: "Which data structure is used in Pandas for 1D labeled data?",
        options: ["DataFrame", "List", "Series", "Dictionary"],
        answer: "Series",
        explanation: "🔍 Pandas ka Series ek 1D labelled array hota hai. 📘 Series is used for one-dimensional labeled data.",
        source: "https://pandas.pydata.org/docs/reference/api/pandas.Series.html"
      },
      {
        question: "Which library is best suited for numerical operations on arrays in Python?",
        options: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
        answer: "NumPy",
        explanation: "🔍 NumPy fast mathematical operations ke liye use hota hai arrays pe. 📘 NumPy is optimized for numerical computations.",
        source: "https://numpy.org/doc/stable/"
      },
      {
        question: "What does df.head() do in Pandas?",
        options: ["Shows last 5 rows", "Deletes first row", "Shows first 5 rows", "Prints column names"],
        answer: "Shows first 5 rows",
        explanation: "📘 head() returns the first 5 rows by default, useful for data preview.",
        source: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.head.html"
      },
      {
        question: "Which of the following is used to install Jupyter Notebook?",
        options: ["pip install pandas", "pip install notebook", "pip install numpy", "pip install jupyterlab"],
        answer: "pip install notebook",
        explanation: "📘 Use pip install notebook to get the classic Jupyter interface.",
        source: "https://jupyter.org/install"
      },
      {
        question: "What is the output of np.array([1, 2]) + np.array([3, 4])?",
        options: ["[4, 6]", "[1, 2, 3, 4]", "[3, 6]", "[4, 6, 5]"],
        answer: "[4, 6]",
        explanation: "📘 NumPy performs element-wise addition of arrays.",
        source: "https://numpy.org/doc/stable/user/basics.broadcasting.html"
      },
      {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/* */", "<!-- -->"],
        answer: "#",
        explanation: "📘 Python uses '#' for single-line comments.",
        source: "https://docs.python.org/3/tutorial/introduction.html#comments"
      },
      {
        question: "How do you read a CSV file using Pandas?",
        options: ["pandas.read_csv('file.csv')", "read.csv('file.csv')", "pd.read_csv('file.csv')", "np.read_csv('file.csv')"],
        answer: "pd.read_csv('file.csv')",
        explanation: "📘 Standard way to load CSV into a DataFrame in Pandas.",
        source: "https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html"
      },
      {
        question: "Which command launches Jupyter Notebook in terminal?",
        options: ["jupyter open", "jupyter start", "jupyter notebook", "run jupyter"],
        answer: "jupyter notebook",
        explanation: "📘 Launches Jupyter Notebook server in your browser.",
        source: "https://jupyter-notebook.readthedocs.io/en/stable/"
      },
      {
        question: "Which of these is mutable in Python?",
        options: ["Tuple", "List", "String", "Integer"],
        answer: "List",
        explanation: "📘 Lists are mutable, i.e., they can be changed after creation.",
        source: "https://docs.python.org/3/tutorial/datastructures.html"
      },
      {
        question: "What does axis=1 mean in Pandas?",
        options: ["Row-wise operation", "Column-wise operation", "Drop all data", "No operation"],
        answer: "Column-wise operation",
        explanation: "📘 axis=1 applies the operation across columns (i.e., row-wise).",
        source: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html"
      }
    ]
  },
  {
    week: 2,
    title: "Statistics & Probability",
    questions: [
      {
        question: "What is the median of [3, 5, 7]?",
        options: ["5", "3", "7", "15"],
        answer: "5",
        explanation: "📘 Median is the middle value in a sorted list.",
        source: "https://www.khanacademy.org/math/statistics-probability/describing-central-tendency"
      },
      {
        question: "What does standard deviation measure?",
        options: ["Central value", "Count", "Spread from mean", "Highest value"],
        answer: "Spread from mean",
        explanation: "📘 SD tells how spread-out values are from the mean.",
        source: "https://www.youtube.com/watch?v=MRqtXL2WX2M"
      },
      {
        question: "Which distribution is bell-shaped and symmetric?",
        options: ["Poisson", "Binomial", "Normal", "Uniform"],
        answer: "Normal",
        explanation: "📘 Normal distribution has a symmetric bell shape.",
        source: "https://www.khanacademy.org/math/statistics-probability/modeling-distributions-of-data"
      },
      {
        question: "Mode is:",
        options: ["Average", "Most frequent value", "Largest value", "Midpoint"],
        answer: "Most frequent value",
        explanation: "📘 Mode = Value that occurs most frequently in the data.",
        source: "https://www.openintro.org/book/os/"
      },
      {
        question: "In Bayes Theorem, what does P(A|B) represent?",
        options: ["Prior probability", "Likelihood", "Posterior probability", "Marginal probability"],
        answer: "Posterior probability",
        explanation: "📘 Posterior = updated probability of A given B.",
        source: "https://www.khanacademy.org/math/statistics-probability/probability-library"
      },
      {
        question: "Which is true for a uniform distribution?",
        options: ["All values are equally likely", "Skewed data", "Only 1 value is likely", "Bell shaped"],
        answer: "All values are equally likely",
        explanation: "📘 Uniform = flat distribution, equal chance for all outcomes.",
        source: "https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)"
      },
      {
        question: "Variance is:",
        options: ["Square of SD", "Cube of Mean", "Mean itself", "None"],
        answer: "Square of SD",
        explanation: "📘 Variance = average squared deviation from mean.",
        source: "https://www.youtube.com/watch?v=4Oss3jrhZQ8"
      },
      {
        question: "Which of the following is a discrete probability distribution?",
        options: ["Normal", "Binomial", "Uniform (continuous)", "Exponential"],
        answer: "Binomial",
        explanation: "📘 Binomial distribution handles discrete outcomes like success/failure.",
        source: "https://www.khanacademy.org/math/statistics-probability"
      },
      {
        question: "Mean is sensitive to:",
        options: ["Mode", "Outliers", "Median", "Range"],
        answer: "Outliers",
        explanation: "📘 Outliers heavily influence the mean value.",
        source: "https://towardsdatascience.com/mean-vs-median-6b9d0a0a9e44"
      },
      {
        question: "Probability value ranges from:",
        options: ["-1 to 1", "0 to ∞", "0 to 1", "0 to 100"],
        answer: "0 to 1",
        explanation: "📘 Probability values are always between 0 and 1.",
        source: "https://www.khanacademy.org/math/statistics-probability/probability-library"
      }
    ]
  },
  {
    week: 3,
    title: "Data Cleaning & Preprocessing",
    questions: [
      {
        question: "Which Pandas method is used to check missing values in a DataFrame?",
        options: ["isnull()", "dropna()", "fillna()", "notnull()"],
        answer: "isnull()",
        explanation: "📘 isnull() returns a boolean DataFrame showing missing (NaN) values.",
        source: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isnull.html"
      },
      {
        question: "What is the best strategy to handle outliers in a dataset?",
        options: ["Remove or cap", "Ignore", "Replace with 0", "Multiply by 10"],
        answer: "Remove or cap",
        explanation: "📘 Outliers can skew models, so capping or removing is preferred.",
        source: "https://towardsdatascience.com/how-to-handle-outliers-in-your-data-907b63fdbf10"
      },
      {
        question: "Which method replaces missing values with the mean?",
        options: ["fillna(mean)", "dropna()", "replace(0)", "astype()"],
        answer: "fillna(mean)",
        explanation: "📘 fillna(mean) fills missing values with the column’s mean.",
        source: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.fillna.html"
      },
      {
        question: "Which encoding method is used to convert categories into binary columns?",
        options: ["Label Encoding", "Binary Encoding", "One-Hot Encoding", "Count Encoding"],
        answer: "One-Hot Encoding",
        explanation: "📘 One-hot encoding creates binary columns for each category.",
        source: "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html"
      },
      {
        question: "Which scaler standardizes data to zero mean and unit variance?",
        options: ["MinMaxScaler", "Normalizer", "RobustScaler", "StandardScaler"],
        answer: "StandardScaler",
        explanation: "📘 StandardScaler transforms data with mean = 0 and std = 1.",
        source: "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html"
      },
      {
        question: "Which library provides preprocessing tools like LabelEncoder and StandardScaler?",
        options: ["Pandas", "Matplotlib", "Scikit-learn", "NumPy"],
        answer: "Scikit-learn",
        explanation: "📘 sklearn.preprocessing contains useful functions for data preprocessing.",
        source: "https://scikit-learn.org/stable/modules/preprocessing.html"
      },
      {
        question: "Which of the following is not a reason for missing data?",
        options: ["Manual deletion", "Sensor failure", "Data entry error", "High correlation"],
        answer: "High correlation",
        explanation: "📘 High correlation doesn't cause missing data; others can.",
        source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3668100/"
      },
      {
        question: "How to drop rows with any missing values in Pandas?",
        options: ["dropna()", "isnull()", "fillna(0)", "replace(NaN)"],
        answer: "dropna()",
        explanation: "📘 dropna() removes rows with any NaNs.",
        source: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html"
      },
      {
        question: "What does 'scaling' a feature mean?",
        options: ["Changing feature names", "Converting data types", "Adjusting values to a fixed range", "Creating plots"],
        answer: "Adjusting values to a fixed range",
        explanation: "📘 Scaling transforms numerical features to a consistent scale.",
        source: "https://scikit-learn.org/stable/modules/preprocessing.html"
      },
      {
        question: "Which technique is most suitable for categorical variables with many unique values?",
        options: ["Label Encoding", "One-Hot Encoding", "Hash Encoding", "Ordinal Encoding"],
        answer: "Hash Encoding",
        explanation: "📘 Hash encoding helps with high-cardinality categorical features.",
        source: "https://contrib.scikit-learn.org/category_encoders/hashing.html"
      }
    ]
  },
  {
    week: 4,
    title: "Data Visualization",
    questions: [
      {
        question: "Which library is primarily used for statistical plots?",
        options: ["Seaborn", "Matplotlib", "Plotly", "Scikit-learn"],
        answer: "Seaborn",
        explanation: "📘 Seaborn builds on Matplotlib for statistical visualizations.",
        source: "https://seaborn.pydata.org/"
      },
      {
        question: "Which function is used to draw a histogram in Matplotlib?",
        options: ["plt.hist()", "plt.bar()", "plt.line()", "plt.pie()"],
        answer: "plt.hist()",
        explanation: "📘 plt.hist() is used for plotting histograms of data.",
        source: "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html"
      },
      {
        question: "Which Plotly function creates interactive line plots?",
        options: ["plotly.line()", "go.Line()", "px.line()", "plt.line()"],
        answer: "px.line()",
        explanation: "📘 px.line() in Plotly Express makes interactive line plots easily.",
        source: "https://plotly.com/python/line-charts/"
      },
      {
        question: "Which plot shows the distribution of a single variable?",
        options: ["Box plot", "Bar chart", "Histogram", "Scatter plot"],
        answer: "Histogram",
        explanation: "📘 Histogram shows frequency distribution of a numeric variable.",
        source: "https://seaborn.pydata.org/tutorial/distributions.html"
      },
      {
        question: "What does sns.pairplot() show?",
        options: ["Distribution of one variable", "Pairwise plots for all numerical features", "Heatmap", "Boxplot"],
        answer: "Pairwise plots for all numerical features",
        explanation: "📘 sns.pairplot() shows scatter plots and histograms for feature pairs.",
        source: "https://seaborn.pydata.org/generated/seaborn.pairplot.html"
      },
      {
        question: "Which chart best visualizes correlation between two variables?",
        options: ["Pie chart", "Line chart", "Scatter plot", "Bar chart"],
        answer: "Scatter plot",
        explanation: "📘 Scatter plots help visualize relationships between two continuous variables.",
        source: "https://www.data-to-viz.com/graph/scatter.html"
      },
      {
        question: "What does plt.show() do in Matplotlib?",
        options: ["Display plot", "Save plot", "Clear plot", "Change style"],
        answer: "Display plot",
        explanation: "📘 plt.show() renders the plot visually in a window or notebook.",
        source: "https://matplotlib.org/stable/users/interactive.html"
      },
      {
        question: "Which Seaborn function is used to make box plots?",
        options: ["sns.boxplot()", "sns.histplot()", "sns.lineplot()", "sns.catplot()"],
        answer: "sns.boxplot()",
        explanation: "📘 sns.boxplot() shows distribution and outliers for numeric features.",
        source: "https://seaborn.pydata.org/generated/seaborn.boxplot.html"
      },
      {
        question: "Which dashboard tool integrates well with Python?",
        options: ["PowerBI", "Streamlit", "Excel", "Google Sheets"],
        answer: "Streamlit",
        explanation: "📘 Streamlit is a fast Python tool for building data dashboards.",
        source: "https://docs.streamlit.io/"
      },
      {
        question: "What is a heatmap used for?",
        options: ["3D plots", "Missing values", "Correlation matrix", "Animated charts"],
        answer: "Correlation matrix",
        explanation: "📘 Heatmaps are great for visualizing correlation matrices using color intensity.",
        source: "https://seaborn.pydata.org/generated/seaborn.heatmap.html"
      }
    ]
  },
  {
    week: 5,
    title: "Exploratory Data Analysis (EDA)",
    questions: [
      {
        question: "What does EDA stand for?",
        options: ["Expert Data Assessment", "Exploratory Data Analysis", "External Data Aggregation", "Enterprise Data Architecture"],
        answer: "Exploratory Data Analysis",
        explanation: "📘 EDA means exploring datasets visually and statistically to uncover insights.",
        source: "https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15"
      },
      {
        question: "Which plot is best for analyzing correlation?",
        options: ["Histogram", "Line chart", "Heatmap", "Pie chart"],
        answer: "Heatmap",
        explanation: "📘 Heatmaps show variable correlations in a matrix format.",
        source: "https://seaborn.pydata.org/generated/seaborn.heatmap.html"
      },
      {
        question: "Univariate analysis involves how many variables?",
        options: ["0", "1", "2", "More than 2"],
        answer: "1",
        explanation: "📘 Uni = one. So univariate analysis examines a single variable’s behavior.",
        source: "https://www.geeksforgeeks.org/univariate-analysis/"
      },
      {
        question: "Which of these is not part of EDA?",
        options: ["Model training", "Distribution checking", "Outlier detection", "Missing value analysis"],
        answer: "Model training",
        explanation: "📘 Model training comes after EDA in the data pipeline.",
        source: "https://www.kaggle.com/learn/data-cleaning"
      },
      {
        question: "Which method helps detect outliers visually?",
        options: ["Line plot", "Histogram", "Box plot", "Pie chart"],
        answer: "Box plot",
        explanation: "📘 Box plots reveal outliers as dots outside the whiskers.",
        source: "https://towardsdatascience.com/boxplot-explained-e3e0700b2f89"
      },
      {
        question: "Which function shows summary stats in Pandas?",
        options: ["summary()", "stats()", "describe()", "details()"],
        answer: "describe()",
        explanation: "📘 describe() gives count, mean, std, min, max, etc., for numerical columns.",
        source: "https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.describe.html"
      },
      {
        question: "Which kind of plot helps check relationships between two numeric features?",
        options: ["Pie chart", "Bar plot", "Scatter plot", "Line plot"],
        answer: "Scatter plot",
        explanation: "📘 Scatter plots are ideal for analyzing relationships between numeric variables.",
        source: "https://www.data-to-viz.com/graph/scatter.html"
      },
      {
        question: "Which term describes two features moving together?",
        options: ["Distribution", "Variance", "Correlation", "Causation"],
        answer: "Correlation",
        explanation: "📘 Correlation shows how closely two variables move together.",
        source: "https://www.khanacademy.org/math/statistics-probability"
      },
      {
        question: "Which Python function counts unique values in a column?",
        options: ["value_counts()", "unique()", "count()", "nunique()"],
        answer: "value_counts()",
        explanation: "📘 value_counts() gives frequencies of unique values.",
        source: "https://pandas.pydata.org/docs/reference/api/pandas.Series.value_counts.html"
      },
      {
        question: "Which tool/platform is commonly used for publishing EDA notebooks?",
        options: ["GitHub", "Tableau", "Kaggle", "Excel"],
        answer: "Kaggle",
        explanation: "📘 Kaggle is widely used for hosting EDA and data science notebooks.",
        source: "https://www.kaggle.com/code"
      }
    ]
  },
  {
    week: 6,
    title: "Supervised Machine Learning",
    questions: [
      {
        question: "Which of the following is a regression algorithm?",
        options: ["Linear Regression", "K-Means", "Naive Bayes", "PCA"],
        answer: "Linear Regression",
        explanation: "📘 Linear Regression predicts continuous values, making it a regression model.",
        source: "https://scikit-learn.org/stable/modules/linear_model.html"
      },
      {
        question: "Which evaluation metric is most used for regression?",
        options: ["Accuracy", "Precision", "R² Score", "Recall"],
        answer: "R² Score",
        explanation: "📘 R² Score (Coefficient of Determination) measures how well predictions approximate actual data.",
        source: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html"
      },
      {
        question: "What is overfitting in machine learning?",
        options: ["Low accuracy", "Model performs well on test data", "Model memorizes training data", "High bias"],
        answer: "Model memorizes training data",
        explanation: "📘 Overfitting means the model learns noise and details in training data, hurting generalization.",
        source: "https://developers.google.com/machine-learning/crash-course/regularization/overfitting"
      },
      {
        question: "Which algorithm uses information gain to split nodes?",
        options: ["Linear Regression", "KNN", "Decision Tree", "Logistic Regression"],
        answer: "Decision Tree",
        explanation: "📘 Decision Trees use information gain or Gini index to split features.",
        source: "https://scikit-learn.org/stable/modules/tree.html"
      },
      {
        question: "Which model combines multiple decision trees?",
        options: ["SVM", "Random Forest", "KNN", "Naive Bayes"],
        answer: "Random Forest",
        explanation: "📘 Random Forest is an ensemble of decision trees for better accuracy.",
        source: "https://scikit-learn.org/stable/modules/ensemble.html#forest"
      },
      {
        question: "Which metric is best for imbalanced classification?",
        options: ["Accuracy", "Precision", "Recall", "F1-Score"],
        answer: "F1-Score",
        explanation: "📘 F1-score balances precision and recall, useful in imbalanced datasets.",
        source: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html"
      },
      {
        question: "Which of the following is NOT a supervised learning algorithm?",
        options: ["Random Forest", "Logistic Regression", "K-Means", "SVM"],
        answer: "K-Means",
        explanation: "📘 K-Means is unsupervised; others are supervised.",
        source: "https://scikit-learn.org/stable/tutorial/machine_learning_basics.html"
      },
      {
        question: "Which library provides models like SVM and RandomForest?",
        options: ["Matplotlib", "Seaborn", "Scikit-learn", "NumPy"],
        answer: "Scikit-learn",
        explanation: "📘 Scikit-learn has many supervised ML models and tools.",
        source: "https://scikit-learn.org/"
      },
      {
        question: "Which function trains a model in Scikit-learn?",
        options: ["fit()", "train()", "predict()", "score()"],
        answer: "fit()",
        explanation: "📘 fit() is used to train ML models in sklearn.",
        source: "https://scikit-learn.org/stable/glossary.html#term-fit"
      },
      {
        question: "Which function makes predictions on test data?",
        options: ["train()", "fit()", "score()", "predict()"],
        answer: "predict()",
        explanation: "📘 predict() is used to make predictions using a trained model.",
        source: "https://scikit-learn.org/stable/glossary.html#term-predict"
      }
    ]
  },
  {
    week: 7,
    title: "Unsupervised Learning",
    questions: [
      {
        question: "Which algorithm is best for clustering customers?",
        options: ["Linear Regression", "K-Means", "SVM", "Decision Tree"],
        answer: "K-Means",
        explanation: "📘 K-Means is widely used for customer segmentation tasks.",
        source: "https://scikit-learn.org/stable/modules/clustering.html#k-means"
      },
      {
        question: "What does PCA primarily help with?",
        options: ["Classification", "Feature scaling", "Dimensionality reduction", "Prediction"],
        answer: "Dimensionality reduction",
        explanation: "📘 PCA reduces high-dimensional data into fewer components.",
        source: "https://scikit-learn.org/stable/modules/decomposition.html#pca"
      },
      {
        question: "Which clustering algorithm does not need number of clusters in advance?",
        options: ["K-Means", "PCA", "DBSCAN", "Random Forest"],
        answer: "DBSCAN",
        explanation: "📘 DBSCAN detects clusters based on density, not predefined cluster count.",
        source: "https://scikit-learn.org/stable/modules/clustering.html#dbscan"
      },
      {
        question: "What is the main goal of clustering?",
        options: ["Label data", "Reduce dimensionality", "Group similar data", "Remove duplicates"],
        answer: "Group similar data",
        explanation: "📘 Clustering finds natural groups or patterns in unlabeled data.",
        source: "https://www.geeksforgeeks.org/ml-introduction-to-clustering/"
      },
      {
        question: "Which visual tool helps understand high-dimensional PCA?",
        options: ["Histogram", "Scatterplot", "Scree plot", "Bar chart"],
        answer: "Scree plot",
        explanation: "📘 Scree plot shows explained variance by PCA components.",
        source: "https://builtin.com/data-science/pca-python"
      },
      {
        question: "Which algorithm builds a hierarchy of clusters?",
        options: ["DBSCAN", "PCA", "Hierarchical Clustering", "Random Forest"],
        answer: "Hierarchical Clustering",
        explanation: "📘 This method creates a tree of clusters called a dendrogram.",
        source: "https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering"
      },
      {
        question: "What is an elbow method used for?",
        options: ["Hyperparameter tuning", "Outlier detection", "Choosing number of clusters", "Scaling data"],
        answer: "Choosing number of clusters",
        explanation: "📘 Elbow method plots inertia to decide ideal cluster count in K-Means.",
        source: "https://www.geeksforgeeks.org/elbow-method-for-optimal-value-of-k-in-kmeans/"
      },
      {
        question: "Which distance metric is often used in K-Means?",
        options: ["Cosine", "Manhattan", "Euclidean", "Jaccard"],
        answer: "Euclidean",
        explanation: "📘 K-Means minimizes Euclidean distance between points and centroids.",
        source: "https://www.geeksforgeeks.org/k-means-clustering-introduction/"
      },
      {
        question: "Which type of learning has no labeled output?",
        options: ["Supervised", "Semi-supervised", "Unsupervised", "Reinforcement"],
        answer: "Unsupervised",
        explanation: "📘 Unsupervised learning works with unlabeled input data.",
        source: "https://www.ibm.com/topics/unsupervised-learning"
      },
      {
        question: "Which clustering technique is good for noise handling?",
        options: ["K-Means", "DBSCAN", "PCA", "Hierarchical"],
        answer: "DBSCAN",
        explanation: "📘 DBSCAN handles noise and outliers by marking them as 'noise' points.",
        source: "https://scikit-learn.org/stable/modules/clustering.html#dbscan"
      }
    ]
  },
  {
    week: 8,
    title: "Time Series Analysis",
    questions: [
      {
        question: "Which component is not part of time series decomposition?",
        options: ["Trend", "Seasonality", "Noise", "Bias"],
        answer: "Bias",
        explanation: "📘 Bias is not a decomposition component; trend, seasonality, and noise are.",
        source: "https://otexts.com/fpp3/decomposition.html"
      },
      {
        question: "Which model is widely used for forecasting?",
        options: ["SVM", "Random Forest", "ARIMA", "PCA"],
        answer: "ARIMA",
        explanation: "📘 ARIMA is a powerful statistical model for time series forecasting.",
        source: "https://www.statsmodels.org/stable/generated/statsmodels.tsa.arima.model.ARIMA.html"
      },
      {
        question: "Which method smooths time series by averaging recent values?",
        options: ["Fourier transform", "Moving average", "KNN", "Gradient boosting"],
        answer: "Moving average",
        explanation: "📘 Moving average reduces noise by averaging previous time points.",
        source: "https://www.geeksforgeeks.org/moving-average-in-python/"
      },
      {
        question: "Which library is best for time series in Python?",
        options: ["Matplotlib", "Statsmodels", "Seaborn", "TensorFlow"],
        answer: "Statsmodels",
        explanation: "📘 Statsmodels offers tools for ARIMA, seasonal decomposition, etc.",
        source: "https://www.statsmodels.org/stable/index.html"
      },
      {
        question: "Which parameter in ARIMA stands for seasonality?",
        options: ["p", "d", "q", "None of the above"],
        answer: "None of the above",
        explanation: "📘 ARIMA does not directly model seasonality; SARIMA does.",
        source: "https://www.statsmodels.org/stable/examples/notebooks/generated/statespace_sarimax_stata.html"
      },
      {
        question: "What is stationarity in time series?",
        options: ["Trend is present", "Variance is constant", "Values increase over time", "All above"],
        answer: "Variance is constant",
        explanation: "📘 A stationary series has constant mean and variance over time.",
        source: "https://www.analyticsvidhya.com/blog/2021/07/a-guide-to-time-series-forecasting/"
      },
      {
        question: "Which test checks for stationarity?",
        options: ["Shapiro-Wilk", "Augmented Dickey-Fuller", "T-test", "Chi-square"],
        answer: "Augmented Dickey-Fuller",
        explanation: "📘 ADF test is used to check if a time series is stationary.",
        source: "https://www.statsmodels.org/stable/generated/statsmodels.tsa.stattools.adfuller.html"
      },
      {
        question: "Which plot is used to examine autocorrelation?",
        options: ["Box plot", "ACF plot", "Heatmap", "Histogram"],
        answer: "ACF plot",
        explanation: "📘 ACF (Autocorrelation Function) plot shows time-based correlations.",
        source: "https://www.statsmodels.org/stable/generated/statsmodels.graphics.tsaplots.plot_acf.html"
      },
      {
        question: "Which is a lag-based forecasting model?",
        options: ["KNN", "ARIMA", "Logistic Regression", "DBSCAN"],
        answer: "ARIMA",
        explanation: "📘 ARIMA uses past lags and errors for prediction.",
        source: "https://machinelearningmastery.com/arima-for-time-series-forecasting-with-python/"
      },
      {
        question: "Which library is used for seasonal decomposition?",
        options: ["Seaborn", "Pandas", "Statsmodels", "Scikit-learn"],
        answer: "Statsmodels",
        explanation: "📘 Statsmodels provides seasonal_decompose() for decomposition.",
        source: "https://www.statsmodels.org/stable/generated/statsmodels.tsa.seasonal.seasonal_decompose.html"
      }
    ]
  },
  {
    week: 9,
    title: "Natural Language Processing for Data Science",
    questions: [
      {
        question: "What is Tokenization in NLP?",
        options: ["Removing words", "Counting words", "Splitting text into units", "Translating text"],
        answer: "Splitting text into units",
        explanation: "📘 Tokenization breaks sentences into words or subwords.",
        source: "https://www.nltk.org/api/nltk.tokenize.html"
      },
      {
        question: "What does TF-IDF stand for?",
        options: ["Term Frequency-Inverse Document Frequency", "Text Frequency Index Distribution", "Text Formatting ID Filter", "None of these"],
        answer: "Term Frequency-Inverse Document Frequency",
        explanation: "📘 TF-IDF is a method to quantify word importance.",
        source: "https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction"
      },
      {
        question: "Which library is NOT commonly used for NLP in Python?",
        options: ["NLTK", "SpaCy", "TextBlob", "Matplotlib"],
        answer: "Matplotlib",
        explanation: "📘 Matplotlib is used for visualization, not text processing.",
        source: "https://realpython.com/nltk-nlp-python/"
      },
      {
        question: "Which technique helps in reducing inflected words to root form?",
        options: ["Tokenization", "Lemmatization", "Vectorization", "Stopword removal"],
        answer: "Lemmatization",
        explanation: "📘 Lemmatization reduces words to their base dictionary form.",
        source: "https://www.nltk.org/api/nltk.stem.html"
      },
      {
        question: "Which method converts text into numeric format?",
        options: ["Lemmatization", "Vectorization", "Stemming", "POS tagging"],
        answer: "Vectorization",
        explanation: "📘 Vectorization represents text numerically for model input.",
        source: "https://scikit-learn.org/stable/modules/feature_extraction.html"
      },
      {
        question: "Which library provides a simple sentiment analysis tool?",
        options: ["TextBlob", "NumPy", "Matplotlib", "Scikit-learn"],
        answer: "TextBlob",
        explanation: "📘 TextBlob includes polarity-based sentiment analysis tools.",
        source: "https://textblob.readthedocs.io/en/dev/"
      },
      {
        question: "What is a bag-of-words model?",
        options: ["Sequence model", "Topic model", "Unordered text vector", "Word prediction model"],
        answer: "Unordered text vector",
        explanation: "📘 Bag-of-words treats text as an unordered collection of word counts.",
        source: "https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction"
      },
      {
        question: "What is stopword removal?",
        options: ["Keeping punctuation", "Removing frequent unimportant words", "Keeping all words", "Sorting words"],
        answer: "Removing frequent unimportant words",
        explanation: "📘 Stopwords are removed to reduce noise in text data.",
        source: "https://www.nltk.org/nltk_data/"
      },
      {
        question: "Which model is used for text classification?",
        options: ["KMeans", "Naive Bayes", "PCA", "DBSCAN"],
        answer: "Naive Bayes",
        explanation: "📘 Naive Bayes is commonly used for spam detection and text classification.",
        source: "https://scikit-learn.org/stable/modules/naive_bayes.html"
      },
      {
        question: "What is the output of TF-IDF vectorizer?",
        options: ["Word cloud", "List of tokens", "Numeric matrix", "Text summary"],
        answer: "Numeric matrix",
        explanation: "📘 TF-IDF outputs a sparse matrix representing text numerically.",
        source: "https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html"
      }
    ]
  },
  {
    week: 10,
    title: "Capstone Project & Model Deployment",
    questions: [
      {
        question: "Which library is commonly used for building ML apps in Python?",
        options: ["Streamlit", "NLTK", "NumPy", "Pandas"],
        answer: "Streamlit",
        explanation: "📘 Streamlit helps build interactive ML dashboards easily.",
        source: "https://docs.streamlit.io/"
      },
      {
        question: "Which command runs a Streamlit app?",
        options: ["python app.py", "streamlit run app.py", "flask run", "npm start"],
        answer: "streamlit run app.py",
        explanation: "📘 Use this command to start a Streamlit web app.",
        source: "https://docs.streamlit.io/library/get-started/create-an-app"
      },
      {
        question: "What is the main role of GitHub in deployment?",
        options: ["Build models", "Store datasets", "Code hosting & version control", "Train models"],
        answer: "Code hosting & version control",
        explanation: "📘 GitHub allows code versioning and deployment hosting.",
        source: "https://docs.github.com/en/get-started/quickstart"
      },
      {
        question: "Which file is essential to define dependencies for a Python project?",
        options: ["main.py", "README.md", "requirements.txt", "runtime.txt"],
        answer: "requirements.txt",
        explanation: "📘 This file lists all the packages needed to run your app.",
        source: "https://pip.pypa.io/en/stable/user_guide/#requirements-files"
      },
      {
        question: "Which platform can deploy a Streamlit app for free?",
        options: ["Render", "Jupyter", "VS Code", "Google Sheets"],
        answer: "Render",
        explanation: "📘 Render and Streamlit Cloud offer free app hosting.",
        source: "https://render.com/docs/deploy-streamlit"
      },
      {
        question: "Which format is used to share trained ML models?",
        options: ["CSV", "Pandas", "Pickle (.pkl)", "Excel"],
        answer: "Pickle (.pkl)",
        explanation: "📘 Pickle is used to save and load trained Python models.",
        source: "https://scikit-learn.org/stable/model_persistence.html"
      },
      {
        question: "Which command installs Python libraries from requirements.txt?",
        options: ["pip install requirements.txt", "pip install -r requirements.txt", "install reqs", "python install"],
        answer: "pip install -r requirements.txt",
        explanation: "📘 This command installs all libraries listed in the file.",
        source: "https://pip.pypa.io/en/stable/cli/pip_install/#requirements-file-format"
      },
      {
        question: "Which cloud provider supports ML model hosting?",
        options: ["Heroku", "AWS", "Google Cloud", "All of these"],
        answer: "All of these",
        explanation: "📘 Heroku, AWS, and GCP all allow hosting and deploying ML apps.",
        source: "https://www.datacamp.com/tutorial/guide-to-deploying-machine-learning-models"
      },
      {
        question: "Which Python module is used for REST API deployment?",
        options: ["Flask", "NumPy", "Seaborn", "Matplotlib"],
        answer: "Flask",
        explanation: "📘 Flask is used to create REST APIs for ML model deployment.",
        source: "https://flask.palletsprojects.com/"
      },
      {
        question: "Which endpoint is standard for testing API health?",
        options: ["/predict", "/model", "/status", "/health"],
        answer: "/health",
        explanation: "📘 A /health endpoint is often used to check API/server status.",
        source: "https://restfulapi.net/resource-naming/"
      }
    ]
  }

];


