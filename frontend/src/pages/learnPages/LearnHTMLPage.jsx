import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const LearnHTMLPage = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url('/htmlbanner.jpg')`,
      }}
    >
      <div className="bg-learn-gradient w-full h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col max-w-2xl 
                          items-start text-left 
                          md:items-start md:text-left 
                          sm:items-center sm:text-center mx-auto md:mx-0"
          >
            {/* Badge and label */}
            <motion.div
              className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start items-center"
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="flex items-center gap-2 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                <span className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                </span>
                <span>BEGINNER</span>
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
              Learn the fundamentals of web development, including structure and
              semantic markup with the basics of HTML.
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Link to="/start-html">
                <button className="font-semibold text-sm sm:text-base border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                  Start Learning
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnHTMLPage;
