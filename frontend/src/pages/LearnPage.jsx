import { BookMarked, Earth, Settings2 } from "lucide-react";
import { React, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Footer from "../components/layout/Footer";

const LearnPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [showFilters, setShowFilters] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
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

  return (
    <>
      <div className="w-full mh-auto bg-[#040f1a] relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-pixel text-gray-deschis drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore the world of
          </motion.h1>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl text-gray-deschis mb-2 md:mb-4 lg:my-8 font-bold font-pixel leading-tight md:leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CodeFlow
          </motion.h1>

          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg drop-shadow-2xl text-gray-deschis  font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start your coding journey with interactive programming <br />
            exercises and quizzes. Explore for free!
          </motion.p>
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
            <Earth className="text-blue-300" />
            The origins
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-2xl text-text-gray font-poppins">
            Curious about building your own website? Discover the three
            essential technologies that power the web.
          </p>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          className="text-left mb-8"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true }}
        >
          <h1 className="flex flex-row items-center gap-2 text-base sm:text-lg md:text-xl drop-shadow-2xl text-gray-deschis font-pixel mb-4 leading-snug">
            <BookMarked className="text-purple-300" />
            All courses
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-2xl text-text-gray font-poppins">
            Curious about building your own website? Discover the three
            essential technologies that power the web.
          </p>
        </motion.div>

        <div className="mb-16 mt-8">
          {/* Show Filters button for small screens */}
          <div className="sm:hidden mb-4">
            <button
              onClick={() => setShowFilters((prev) => !prev)}
              className={`w-full flex items-center justify-center gap-2 text-sm border-2 font-bold font-poppins rounded-[10px] px-6 py-2 transition-all duration-300 ${
                showFilters
                  ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                  : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
              }`}
            >
              <Settings2 className="w-4 h-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Buttons container */}
          <div
            className={`flex flex-wrap gap-4 sm:gap-6 transition-all duration-300 ${
              showFilters ? "block" : "hidden"
            } sm:flex`}
          >
            <motion.button
              onClick={() => setActiveTab(1)}
              className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 ${
                activeTab === 1
                  ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                  : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
              }`}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              All Courses
            </motion.button>
            <motion.button
              onClick={() => setActiveTab(2)}
              className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 ${
                activeTab === 2
                  ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                  : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
              }`}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              Web Development
            </motion.button>
            <motion.button
              onClick={() => setActiveTab(3)}
              className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 ${
                activeTab === 3
                  ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                  : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
              }`}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              Useful Tools
            </motion.button>
            <motion.button
              onClick={() => setActiveTab(4)}
              className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 ${
                activeTab === 4
                  ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                  : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
              }`}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              Beginner
            </motion.button>
          </div>
        </div>
        {activeTab === 1 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    Discover essential VS Code Extensions to boost productivity
                    and streamline your workflow with the...
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
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      INTERMEDIATE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default LearnPage;
