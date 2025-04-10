import { Link } from "react-router-dom";
import React, { useState } from "react";

import { motion, useInView } from "framer-motion";

import Footer from "../../components/layout/Footer";

const fadeUpVariant = {
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

const UnknownUser = () => {
  const [activeTab, setActiveTab] = useState(1);

  //   {
  //     id: 1,
  //     question: "What is web development?",
  //     answer:
  //       "Web development involves creating and maintaining websites or web applications. It encompasses everything from coding and programming to designing the user interface and user experience.",
  //   },
  //   {
  //     id: 2,
  //     question: "What are the key skills needed for web development?",
  //     answer:
  //       "Key skills include proficiency in HTML, CSS, and JavaScript. Familiarity with frameworks, version control systems (like Git), responsive design, and basic understanding of server-side technologies are also important.",
  //   },
  //   {
  //     id: 3,
  //     question: "Do I need a degree to become a web developer?",
  //     answer:
  //       "No, you don't need a degree. Many successful web developers are self-taught through online resources, coding bootcamps, and practical experience.",
  //   },
  //   {
  //     id: 4,
  //     question: "Where should I start if I'm new to web development?",
  //     answer:
  //       "Start by learning the basics of HTML, CSS, and JavaScript. Once you're comfortable with these, you can move on to more advanced topics like frameworks, backend development, and databases.",
  //   },
  //   {
  //     id: 5,
  //     question:
  //       "What is the difference between front-end and back-end development?",
  //     answer:
  //       "Front-end development focuses on the user interface and user experience of a website (what users see and interact with), while back-end development involves the server-side logic, databases, and application functionality.",
  //   },
  //   {
  //     id: 6,
  //     question: "Should I learn how to design websites as a developer?",
  //     answer:
  //       "While not mandatory, having basic design skills is beneficial. Understanding design principles, such as layout, color theory, and typography, can help you create more visually appealing and user-friendly websites.",
  //   },
  //   {
  //     id: 7,
  //     question: "What are some essential tools for web developers?",
  //     answer:
  //       "Essential tools include code editors like Visual Studio Code, version control systems like Git, and browser developer tools. Familiarity with command-line interfaces and package managers (like npm) is also helpful.",
  //   },
  // ];

  // const questions2 = [
  //   {
  //     id: 1,
  //     question: "What are some popular front-end frameworks?",
  //     answer:
  //       "Popular front-end frameworks include React.js, Vue.js, and Angular. These frameworks help you build dynamic user interfaces efficiently.",
  //   },
  //   {
  //     id: 2,
  //     question: "What is an API, and how do I use it in web development?",
  //     answer:
  //       "An API (Application Programming Interface) allows different software applications to communicate with each other. In web development, APIs are often used to fetch data from external sources or services.",
  //   },
  //   {
  //     id: 3,
  //     question: "What are some good projects to start with as a beginner?",
  //     answer:
  //       "Begin with small projects like building a personal portfolio website, a to-do list app, or a simple blog. These will help you apply your skills and build a portfolio.",
  //   },
  //   {
  //     id: 4,
  //     question: "What is responsive design, and why is it important?",
  //     answer:
  //       "Responsive design ensures that websites look and function well on all devices, including desktops, tablets, and smartphones. It’s important because it improves user experience and SEO rankings.",
  //   },
  //   {
  //     id: 5,
  //     question: "What is the difference between a library and a framework?",
  //     answer:
  //       "A library is a collection of pre-written code that you can call upon to accomplish tasks, while a framework provides a structure and guidelines for building applications, often dictating the flow and architecture of your project.",
  //   },
  //   {
  //     id: 6,
  //     question: "How long does it take to become a proficient web developer?",
  //     answer:
  //       "It depends on your learning pace and dedication. On average, it can take anywhere from 6 months to 2 years to become proficient, depending on whether you're learning part-time or full-time.",
  //   },
  //   {
  //     id: 7,
  //     question: "What programming languages should I learn first?",
  //     answer:
  //       "Start with HTML and CSS for structuring and styling web pages. Then, learn JavaScript to add interactivity. After mastering these, you can explore other languages like Python or PHP for back-end development.",
  //   },
  // ];
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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Smooth fade and slide-up
        ease: "easeInOut",
        staggerChildren: 0.3, // Stagger each child’s animation
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <>
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/welcomepage.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-welcome-gradient">
          <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-center text-center">
            <div className="w-full max-w-2xl px-4 md:px-6 lg:px-0 mx-auto text-center">
              <motion.h1
                className="text-base md:text-lg lg:text-xl drop-shadow-2xl text-gray-deschis font-bold font-pixel mb-4 md:mb-6"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                START YOUR
              </motion.h1>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl text-yellow-ok mb-2 md:mb-4 font-bold font-pixel leading-tight md:leading-none"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                Coding
              </motion.h1>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl text-yellow-ok font-bold font-pixel leading-tight md:leading-none"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                Adventure
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl drop-shadow-2xl text-gray-200 mb-10 md:mb-16 mt-4 font-poppins"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                Start your coding adventure in the easiest way!
              </motion.p>

              <motion.button
                className="font-semibold text-sm sm:text-base mt-8 border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <Link to="/signup">Get Started</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center py-12 sm:px-6 lg:px-8 lg:py-24 text-center">
        <motion.div
          className="w-full max-w-2xl px-4 md:px-6 lg:px-0 mx-auto text-center"
          initial="hidden"
          whileInView="visible" // Animation triggers when the element is in view
          variants={animationVariants}
          viewport={{ once: true }} // Animation triggers only once when the element comes into view
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl drop-shadow-2xl text-gray-deschis font-pixel mb-6 sm:mb-8 leading-snug">
            An adventure through <br className="hidden sm:block" /> the world of
            coding
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-2xl text-text-gray font-poppins">
            Learn to code with fun, interactive courses handcrafted by industry
            experts and educators.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 mt-8 px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveTab(1)}
                className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 ${
                  activeTab === 1
                    ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                    : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
                }`}
              >
                Popular
              </button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveTab(2)}
                className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 ${
                  activeTab === 2
                    ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                    : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
                }`}
              >
                Web Development
              </button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveTab(3)}
                className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 ${
                  activeTab === 3
                    ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                    : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
                }`}
              >
                Useful Tools
              </button>
            </motion.div>
          </div>

          {activeTab === 1 && (
            <>
              <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                  <div className="relative">
                    <img
                      src="/gsapbanner.jpg"
                      alt="GSAP Course"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-small text-gray-deschis uppercase tracking-wide">
                      Course
                    </p>
                    <h2 className="text-xl font-bold">GSAP</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Learn GSAP fundamentals, including timelines, animations,
                      and scroll-based effects with the...
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-deschis text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INTERMEDIATE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
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
                      Learn the fundamentals of web development, including
                      structure and semantic markup with the...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        BEGINNER
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                  <div className="relative">
                    <img
                      src="/reactbanner.jpg"
                      alt="React Course"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-small text-gray-deschis uppercase tracking-wide">
                      Course
                    </p>
                    <h2 className="text-xl font-bold">React</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Dive into React fundamentals, including components, state
                      management, and hooks with the...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INTERMEDIATE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                  <div className="relative">
                    <img
                      src="/framermotionbanner.jpg"
                      alt="Framer-Motion Course"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-small text-gray-deschis uppercase tracking-wide">
                      Course
                    </p>
                    <h2 className="text-xl font-bold">Framer-Motion</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Explore Framer Motion fundamentals, including animations,
                      gestures, and smooth transitions with the...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        BEGGINER
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                  <div className="relative">
                    <img
                      src="/vscodeextensionsbanner.jpg"
                      alt="VS Code Extensions Course"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-small text-gray-deschis uppercase tracking-wide">
                      Course
                    </p>
                    <h2 className="text-xl font-bold">VS Code Extensions</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Discover essential VS Code Extensions to boost
                      productivity and streamline your workflow with the...
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
              <Link to="/login">
                <button className="font-semibold text-sm sm:text-base mt-8 border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                  Explore All Courses
                </button>
              </Link>
            </>
          )}

          {activeTab === 2 && (
            <>
              <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
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
                      Learn the fundamentals of web development, including
                      structure and semantic markup with the...
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        BEGINNER
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
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
                      Master the fundamentals of styling, including colors,
                      layouts, and responsive design with the...
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        BEGINNER
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
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

                <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                  <div className="relative">
                    <img
                      src="/reactbanner.jpg"
                      alt="React Course"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-small text-gray-deschis uppercase tracking-wide">
                      Course
                    </p>
                    <h2 className="text-xl font-bold">React</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Dive into React fundamentals, including components, state
                      management, and hooks with the...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INTERMEDIATE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="font-semibold text-sm sm:text-base mt-8 border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                Explore All Courses
              </button>
            </>
          )}

          {activeTab === 3 && (
            <>
              <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                  <div className="relative">
                    <img
                      src="/vscodeextensionsbanner.jpg"
                      alt="VS Code Extensions Course"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-small text-gray-deschis uppercase tracking-wide">
                      Course
                    </p>
                    <h2 className="text-xl font-bold">VS Code Extensions</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Discover essential VS Code Extensions to boost
                      productivity and streamline your workflow with the...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        BEGINNER
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                  <div className="relative">
                    <img
                      src="/git&githubbanner.jpg"
                      alt="GitHub & Git Course"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-small text-gray-deschis uppercase tracking-wide">
                      Course
                    </p>
                    <h2 className="text-xl font-bold">Git & GitHub</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Learn the basics of Git and GitHub, including version
                      control, repositories, and collaboration with the...
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
              <button className="font-semibold text-sm sm:text-base mt-8 border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                Explore All Courses
              </button>
            </>
          )}
        </div>
      </div>

      <div className="bg-[#040f1a]">
        <motion.div
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"} // Animate when the element is in view
          variants={sectionVariants}
          whileInView={() => setHasAnimated(true)} // Only trigger once when it enters the viewport
          className="text-text-gray max-w-7xl font-poppins min-h-screen mx-auto flex flex-col gap-y-16 items-center py-12 sm:px-6 lg:px-8 lg:py-24 text-center"
        >
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 justify-center items-center mx-auto px-4">
            <motion.div
              className="w-full lg:w-1/2 border-2 border-gray-700 rounded-md p-1 transition-all duration-1000 delay-100"
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={sectionVariants}
              whileInView={() => setHasAnimated(true)}
            >
              <img
                src="/wolcomepage2.jpg"
                alt="Welcome Page 2"
                className="w-full object-cover rounded-md opacity-0 animate-fadeIn"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-start items-start text-center lg:text-left transition-all duration-1000 delay-200"
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={sectionVariants}
              whileInView={() => setHasAnimated(true)}
            >
              <h1 className="text-xl sm:text-2xl drop-shadow-2xl text-gray-deschis font-pixel font-semibold mb-6 sm:mb-8 opacity-0 animate-fadeIn">
                Create, share, and <br className="hidden sm:block" /> grow
                together
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-text-gray font-poppins opacity-0 animate-fadeIn">
                Our built-in community space is where creativity meets
                connection. Share your work, drop your favorite memes, explore
                useful courses, and trade tips. Everything you need, all in one
                place.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center items-center mx-auto px-4">
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 delay-100"
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={sectionVariants}
              whileInView={() => setHasAnimated(true)}
            >
              <h1 className="text-xl sm:text-2xl drop-shadow-2xl text-gray-deschis font-pixel font-semibold mb-6 sm:mb-8 opacity-0 animate-fadeIn">
                Level up your <br className="hidden sm:block" /> learning
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-text-gray font-poppins opacity-0 animate-fadeIn">
                Level up your web development skills with easy lessons in HTML,
                CSS, JavaScript, and more. Build real websites while unlocking
                achievements along the way!
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 border-2 border-gray-700 rounded-md p-1 transition-all duration-1000 delay-300"
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={sectionVariants}
              whileInView={() => setHasAnimated(true)}
            >
              <img
                src="/wolcomepage1.jpg"
                alt="Welcome Page 1"
                className="w-full object-cover rounded-md opacity-0 animate-fadeIn"
              />
            </motion.div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 justify-center items-center mx-auto px-4">
            <motion.div
              className="w-full lg:w-1/2 border-2 border-gray-700 rounded-md p-1 transition-all duration-1000 delay-100"
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={sectionVariants}
              whileInView={() => setHasAnimated(true)}
            >
              <img
                src="/wolcomepage3.jpg"
                alt="Welcome Page 3"
                className="w-full object-cover rounded-md opacity-0 animate-fadeIn"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 delay-200"
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={sectionVariants}
              whileInView={() => setHasAnimated(true)}
            >
              <h1 className="text-xl sm:text-2xl drop-shadow-2xl text-gray-deschis font-pixel font-semibold mb-6 sm:mb-8 opacity-0 animate-fadeIn">
                Quiz Your Way <br className="hidden sm:block" /> to Mastery
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-text-gray font-poppins opacity-0 animate-fadeIn">
                Put your coding knowledge to the test with interactive quizzes
                and mini challenges designed to help you apply what you’ve
                learned to real-world problems. Sharpen your skills and level
                up—one quiz at a time.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="bg-transparent"
      >
        <div className="max-w-7xl min-h-screen mx-auto flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 lg:py-24 bg-cover bg-center text-center">
          <div className="text-center flex flex-col justify-center items-center mb-8 px-4 sm:px-6 md:px-8">
            <h1 className="text-xl sm:text-2xl drop-shadow-2xl text-gray-deschis font-bold font-pixel mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base drop-shadow-2xl text-text-gray font-bold text-text-deschis font-poppins mb-10 sm:mb-12 max-w-2xl">
              Some frequently asked questions about starting Web Development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-32 px-4 sm:px-6 md:px-8">
            <motion.div
              className="flex justify-center text-gray-deschis items-start text-left flex-col gap-4 font-poppins"
              variants={faqItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                What is web development?
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-left">
                Web development involves creating and maintaining websites or
                web applications. It encompasses everything from coding and
                programming to designing the user interface and user experience.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center text-gray-deschis items-start text-left flex-col gap-4 font-poppins"
              variants={faqItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                What are the key skills needed for web development?
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-left">
                Key skills include proficiency in HTML, CSS, and JavaScript.
                Familiarity with frameworks, version control systems (like Git),
                responsive design, and basic understanding of server-side
                technologies are also important.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center text-gray-deschis items-start text-left flex-col gap-4 font-poppins"
              variants={faqItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                What are some essential tools for web developers?
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-left">
                Essential tools include code editors like Visual Studio Code,
                version control systems like Git, and browser developer tools.
                Familiarity with command-line interfaces and package managers
                (like npm) is also helpful.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center text-gray-deschis items-start text-left flex-col gap-4 font-poppins"
              variants={faqItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                What are some good projects to start with as a beginner?
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-left pb-12 lg:pb-24">
                Begin with small projects like building a personal portfolio
                website, a to-do list app, or a simple blog. These will help you
                apply your skills and build a portfolio.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default UnknownUser;
