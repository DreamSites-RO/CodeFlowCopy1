import React, { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Footer from "../../components/layout/Footer";

import HTMLBegginers from "../../pdfs/HTMLBegginers.pdf";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const animationVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const questionsByLevel = {
  Beginner: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Management Language",
      ],
      correctIndex: 0,
    },
    {
      question: "Which tag is used to define a paragraph in HTML?",
      options: ["<para>", "<p>", "<paragraph>", "<pg>"],
      correctIndex: 1,
    },
    {
      question: "Which tag creates the largest heading in HTML?",
      options: ["<h6>", "<h1>", "<header>", "<head>"],
      correctIndex: 1,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<break>", "<lb>", "<newline>"],
      correctIndex: 0,
    },
    {
      question: "Which tag is used to define a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<hyper>"],
      correctIndex: 1,
    },
    {
      question: "What is the correct HTML tag for inserting an image?",
      options: [
        '<img src="image.jpg">',
        '<image href="image.jpg">',
        '<pic src="image.jpg">',
        '<picture href="image.jpg">',
      ],
      correctIndex: 0,
    },
    {
      question: "Which tag is used to define a table row in HTML?",
      options: ["<tr>", "<td>", "<table>", "<th>"],
      correctIndex: 0,
    },
    {
      question: "Which tag is used to define a table cell in HTML?",
      options: ["<td>", "<tr>", "<th>", "<cell>"],
      correctIndex: 0,
    },
    {
      question: "Which attribute specifies an image's alternate text?",
      options: ["alt", "src", "title", "description"],
      correctIndex: 0,
    },
    {
      question: "What tag is used for unordered lists?",
      options: ["<ul>", "<ol>", "<list>", "<li>"],
      correctIndex: 0,
    },
    {
      question: "Which tag is used for list items?",
      options: ["<item>", "<li>", "<ul>", "<list>"],
      correctIndex: 1,
    },
    {
      question: "Which HTML element represents emphasized text?",
      options: ["<b>", "<em>", "<strong>", "<italic>"],
      correctIndex: 1,
    },
    {
      question: "Which HTML element makes text bold?",
      options: ["<bold>", "<strong>", "<em>", "<b>"],
      correctIndex: 3,
    },
    {
      question: "What tag is used for the main content of an HTML document?",
      options: ["<main>", "<body>", "<content>", "<section>"],
      correctIndex: 0,
    },
    {
      question: "Which tag is used for inserting a horizontal line?",
      options: ["<line>", "<hr>", "<br>", "<horizontal>"],
      correctIndex: 1,
    },
  ],

  Intermediate: [
    {
      question: "Which HTML tag is used to define a caption for a table?",
      options: ["<caption>", "<tablecaption>", "<title>", "<head>"],
      correctIndex: 0,
    },
    {
      question: "Which tag is used to group rows in a table header?",
      options: ["<thead>", "<head>", "<thgroup>", "<tr>"],
      correctIndex: 0,
    },
    {
      question: "What does the <form> tag do?",
      options: [
        "Links to another page",
        "Creates a table",
        "Creates an input form",
        "Displays formatted text",
      ],
      correctIndex: 2,
    },
    {
      question: "Which input type is used for a checkbox?",
      options: ["text", "checkbox", "radio", "option"],
      correctIndex: 1,
    },
    {
      question: "Which tag is used to embed a video?",
      options: ["<video>", "<media>", "<movie>", "<embed>"],
      correctIndex: 0,
    },
    {
      question: "Which tag adds a label for a form input?",
      options: ["<label>", "<formlabel>", "<caption>", "<span>"],
      correctIndex: 0,
    },
    {
      question: "What does the 'action' attribute in <form> specify?",
      options: [
        "Form method",
        "Form type",
        "URL to submit the form data",
        "Validation type",
      ],
      correctIndex: 2,
    },
    {
      question: "Which tag is used to include JavaScript in HTML?",
      options: ["<script>", "<js>", "<javascript>", "<code>"],
      correctIndex: 0,
    },
    {
      question: "What does the 'method' attribute in a form define?",
      options: [
        "Input format",
        "Form action",
        "Submit type",
        "HTTP request type",
      ],
      correctIndex: 3,
    },
    {
      question: "Which tag is used to create a drop-down list?",
      options: ["<select>", "<dropdown>", "<list>", "<options>"],
      correctIndex: 0,
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["css", "style", "class", "styles"],
      correctIndex: 1,
    },
    {
      question: "How do you make a text input required?",
      options: ['required="true"', "input-required", "required", 'must="true"'],
      correctIndex: 2,
    },
    {
      question: "What is the correct tag for a navigation section?",
      options: ["<nav>", "<navigate>", "<navbar>", "<menu>"],
      correctIndex: 0,
    },
    {
      question: "Which tag is used to add a line break?",
      options: ["<lb>", "<br>", "<break>", "<newline>"],
      correctIndex: 1,
    },
    {
      question: "What does <fieldset> do in a form?",
      options: [
        "Creates a text box",
        "Groups related elements",
        "Adds an image",
        "Adds a video player",
      ],
      correctIndex: 1,
    },
  ],

  Advanced: [
    {
      question: "What does the 'defer' attribute do in a script tag?",
      options: [
        "Delays script execution until HTML parsing is complete",
        "Stops script execution",
        "Only works with async",
        "Used for inline scripts",
      ],
      correctIndex: 0,
    },
    {
      question: "What does the 'async' attribute do in a script tag?",
      options: [
        "Loads script in order",
        "Executes script after DOM is ready",
        "Executes script as soon as it is downloaded",
        "Ignores the script",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the purpose of the <template> tag?",
      options: [
        "To define reusable templates",
        "To store JavaScript code",
        "To define inline CSS",
        "To group table rows",
      ],
      correctIndex: 0,
    },
    {
      question: "Which tag is used for scalable vector graphics?",
      options: ["<svg>", "<canvas>", "<graphics>", "<draw>"],
      correctIndex: 0,
    },
    {
      question: "What is the purpose of the <canvas> tag?",
      options: [
        "Render dynamic bitmap graphics",
        "Create tables",
        "Render SVG",
        "Create forms",
      ],
      correctIndex: 0,
    },
    {
      question: "What attribute do you use to make a field readonly?",
      options: ["readonly", "disabled", "no-edit", "fixed"],
      correctIndex: 0,
    },
    {
      question: "What is the difference between <section> and <div>?",
      options: [
        "<section> has semantic meaning",
        "No difference",
        "<div> is only for headers",
        "<section> is deprecated",
      ],
      correctIndex: 0,
    },
    {
      question: "Which element is used to embed external web pages?",
      options: ["<iframe>", "<embed>", "<frame>", "<object>"],
      correctIndex: 0,
    },
    {
      question: "What tag defines metadata about an HTML document?",
      options: ["<meta>", "<head>", "<data>", "<info>"],
      correctIndex: 0,
    },
    {
      question: "What is the default method for form submission?",
      options: ["POST", "GET", "PUT", "SUBMIT"],
      correctIndex: 1,
    },
    {
      question: "Which attribute specifies a short hint for input fields?",
      options: ["placeholder", "title", "hint", "alt"],
      correctIndex: 0,
    },
    {
      question: "What does the <output> element do?",
      options: [
        "Displays the result of a calculation",
        "Creates console logs",
        "Outputs a variable",
        "Stores debug info",
      ],
      correctIndex: 0,
    },
    {
      question: "How do you group inline elements together semantically?",
      options: ["<span>", "<group>", "<inline>", "<div>"],
      correctIndex: 0,
    },
    {
      question: "Which tag would you use to mark up a dialog box?",
      options: ["<dialog>", "<box>", "<modal>", "<popup>"],
      correctIndex: 0,
    },
    {
      question: "What does the 'contenteditable' attribute do?",
      options: [
        "Allows the user to edit the content",
        "Disables user editing",
        "Adds a content summary",
        "Makes content hidden",
      ],
      correctIndex: 0,
    },
  ],
};

const LearnHTMLPage = () => {
  const [level, setLevel] = useState("Beginner");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentQuestions = questionsByLevel[level];
  const currentQuestion = currentQuestions[currentIndex];

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < currentQuestions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelected(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
  };

  const getOptionClass = (index) => {
    if (selected === null) return "bg-gray-800 hover:bg-gray-700";
    if (index === currentQuestion.correctIndex) return "bg-green-600";
    if (index === selected) return "bg-red-600";
    return "bg-gray-800";
  };

  return (
    <>
      {/* Hero section  */}
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/htmlbanner.jpg')" }}
      >
        <div className="bg-learn-gradient w-full h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col max-w-2xl items-start md:items-start sm:items-center text-left mx-auto md:mx-0">
              {/* Title section */}
              <motion.div
                className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start items-center"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <span className="flex items-center gap-2 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  BEGINNER
                </span>
                <div className="flex items-center justify-center">
                  <p className="uppercase tracking-wider text-xs text-gray-deschis">
                    Course
                  </p>
                </div>
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl text-white font-bold font-pixel mb-4"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                HTML
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl font-bold text-text-gray font-poppins mb-10 sm:mb-8 max-w-xl"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                Learn the fundamentals of web development, including structure
                and semantic markup with the basics of HTML.
              </motion.p>
              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <a href={HTMLBegginers} target="_blank">
                  <button className="font-semibold text-sm sm:text-base border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                    Start Learning
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="w-full max-w-7xl mx-auto flex justify-start px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24">
        <motion.div
          className="text-left mb-8"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true }}
        >
          <h1 className="flex flex-row items-center gap-2 text-base sm:text-lg md:text-xl drop-shadow-2xl text-gray-deschis font-pixel leading-snug">
            Test your knowledge
          </h1>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-4 px-4 sm:px-6 lg:px-8 ">
        {/* Right - Quiz (Now on the left) */}
        <div className="w-full md:w-3/4 bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-xl p-6 shadow-lg font-poppins text-text-gray">
          {showScore ? (
            <div className="flex flex-col items-center gap-6">
              <div className="text-white text-xl font-bold text-center">
                You scored {score} out of {currentQuestions.length}!
              </div>
              <button
                onClick={handleReset}
                className="bg-yellow-ok text-black px-6 py-2 rounded-md font-bold hover:bg-yellow-400 transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-4">
                Question {currentIndex + 1} of {currentQuestions.length}
              </h2>
              <p className="text-lg text-text-gray mb-6">
                {currentQuestion.question}
              </p>
              <div className="flex flex-col gap-4">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full text-left text-sm sm:text-base py-3 px-4 rounded-md text-white font-semibold transition-all duration-300 ${getOptionClass(
                      idx
                    )}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Left - Tabs (Now on the right) */}
        <div className="flex flex-col w-full md:w-1/4 gap-4">
          <div className="flex flex-col gap-4 w-full mx-auto bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-lg shadow-lg font-poppins text-left p-4">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl);
                  setCurrentIndex(0);
                  setSelected(null);
                  setScore(0);
                  setShowScore(false);
                }}
                // <button className="  text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20">

                className={`w-full sm:text-base border-2 rounded-[10px] rounded-md font-semibold font-poppins px-4 sm:px-6 py-2 sm:py-3 transition-colors duration-500 ${
                  level === lvl
                    ? "bg-yellow-ok bg-opacity-20 text-yellow-ok border-yellow-ok"
                    : "bg-gray-800 text-text-gray"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="mt-6 w-full font-poppins mx-auto bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-lg shadow-lg font-poppins text-text-gray font-semibolds text-sm p-4">
            <p>
              Test your HTML knowledge with quick quizzes based on your level.
              Choose a level and start answering!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          className="text-left mb-8"
          initial="hidden"
          whileInView="visible" // Animation triggers when the element is in view
          variants={animationVariants}
          viewport={{ once: true }}
        >
          <h1 className="flex flex-row items-center gap-2 text-base sm:text-lg md:text-xl drop-shadow-2xl text-gray-deschis font-pixel mb-4 leading-snug">
            Explore More
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* HTML Card */}
          <Link to="/learnhtml">
            <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
              <div className="relative">
                <img
                  src="/htmlbanner.jpg"
                  alt="HTML Course"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-small text-gray-deschis uppercase tracking-wide">
                  Course
                </p>
                <h2 className="text-xl font-bold">HTML</h2>
                <p className="text-text-gray text-sm mt-2">
                  Learn the fundamentals of web development, including structure
                  and semantic markup with the...
                </p>
                <div className="mt-4 flex items-center">
                  <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    BEGINNER
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* CSS Card */}
          <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
            <div className="relative">
              <img
                src="/cssbanner.jpg"
                alt="CSS Course"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-small text-gray-deschis uppercase tracking-wide">
                Course
              </p>
              <h2 className="text-xl font-bold">CSS</h2>
              <p className="text-text-gray text-sm mt-2">
                Master the fundamentals of styling, including colors, layouts,
                and responsive design with the...
              </p>
              <div className="mt-4 flex items-center">
                <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  BEGINNER
                </span>
              </div>
            </div>
          </div>

          {/* JS Card */}
          <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
            <div className="relative">
              <img
                src="/javascriptbanner.jpg"
                alt="JavaScript Course"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-small text-gray-deschis uppercase tracking-wide">
                Course
              </p>
              <h2 className="text-xl font-bold">JavaScript</h2>
              <p className="text-text-gray text-sm mt-2">
                Learn the fundamentals of JavaScript, including variables,
                functions, and event handling with the...
              </p>
              <div className="mt-4 flex items-center">
                <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  BEGINNER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LearnHTMLPage;
