import { BookMarked, Earth, Settings2 } from "lucide-react";
import { React, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import FooterRo from "../components/layout/FooterRo";
import NavBarRo from "../components/layout/NavbarRo";

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
      <NavbarRo />
      <div className="w-full mh-auto bg-[#040f1a] relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-pixel text-gray-deschis drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explora Lumea
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
            Începe-ți călătoria în programare cu exerciții interactive și teste.
            Explorează gratuit!
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
            Originile
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-2xl text-text-gray font-poppins">
            Ești curios cum să-ți construiești propriul site web? Descoperă cele
            trei tehnologii esențiale care stau la baza internetului.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card HTML */}
          <Link to="/learnhtmlro">
            <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
              <div className="relative">
                <img
                  src="/htmlbanner.jpg"
                  alt="Curs HTML"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-small text-gray-deschis uppercase tracking-wide">
                  Curs
                </p>
                <h2 className="text-xl font-bold">HTML</h2>
                <p className="text-text-gray text-sm mt-2">
                  Învață elementele de bază ale dezvoltării web, inclusiv
                  structura și marcajul semantic cu...
                  <span className="text-transparent">CodeFlow</span>
                </p>
                <div className="mt-4 flex items-center">
                  <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    ÎNCEPĂTOR
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card CSS */}
          <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
            <div className="relative">
              <img
                src="/cssbanner.jpg"
                alt="Curs CSS"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-small text-gray-deschis uppercase tracking-wide">
                Curs
              </p>
              <h2 className="text-xl font-bold">CSS</h2>
              <p className="text-text-gray text-sm mt-2">
                Stăpânește elementele de bază ale stilizării, inclusiv culori,
                layout-uri și design responsive cu...
              </p>
              <div className="mt-4 flex items-center">
                <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  ÎNCEPĂTOR
                </span>
              </div>
            </div>
          </div>

          {/* Card JavaScript */}
          <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
            <div className="relative">
              <img
                src="/javascriptbanner.jpg"
                alt="Curs JavaScript"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-small text-gray-deschis uppercase tracking-wide">
                Curs
              </p>
              <h2 className="text-xl font-bold">JavaScript</h2>
              <p className="text-text-gray text-sm mt-2">
                Învață elementele de bază ale JavaScript-ului, inclusiv
                variabile, funcții și gestionarea evenimentelor cu...
              </p>
              <div className="mt-4 flex items-center">
                <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  ÎNCEPĂTOR
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
            Toate cursurile
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-2xl text-text-gray font-poppins">
            Curios cum funcționează un site web? Începe călătoria ta în
            programare cu lecții clare, și quizuri interactive.
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
              {showFilters ? "Ascunde Filtre" : "Arata Filtre"}
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
              Toate Cursurile
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
              Dezvoltare Web
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
              Unelte Utile
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
              Începător
            </motion.button>
          </div>
        </div>

        {activeTab === 1 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* GSAP Card */}
              <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                <div className="relative">
                  <img
                    src="/gsapbanner.jpg"
                    alt="Curs GSAP"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-small text-gray-deschis uppercase tracking-wide">
                    Curs
                  </p>
                  <h2 className="text-xl font-bold">GSAP</h2>
                  <p className="text-text-gray text-sm mt-2">
                    Învață elementele de bază GSAP, inclusiv timeline-uri,
                    animații și efecte bazate pe scroll cu...
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-deschis text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      INTERMEDIAR
                    </span>
                  </div>
                </div>
              </div>

              {/* HTML Card */}
              <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                <div className="relative">
                  <img
                    src="/htmlbanner.jpg"
                    alt="Curs HTML"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-small text-gray-deschis uppercase tracking-wide">
                    Curs
                  </p>
                  <h2 className="text-xl font-bold">HTML</h2>
                  <p className="text-text-gray text-sm mt-2">
                    Învață fundamentele dezvoltării web, inclusiv structura și
                    markup semantic cu...
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      ÎNCEPĂTOR
                    </span>
                  </div>
                </div>
              </div>

              {/* React Card */}
              <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                <div className="relative">
                  <img
                    src="/reactbanner.jpg"
                    alt="Curs React"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-small text-gray-deschis uppercase tracking-wide">
                    Curs
                  </p>
                  <h2 className="text-xl font-bold">React</h2>
                  <p className="text-text-gray text-sm mt-2">
                    Aprofundează elementele de bază ale React, inclusiv
                    componente, gestionarea stării și hooks cu...
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      INTERMEDIAR
                    </span>
                  </div>
                </div>
              </div>

              {/* Framer Motion Card */}
              <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                <div className="relative">
                  <img
                    src="/framermotionbanner.jpg"
                    alt="Curs Framer Motion"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-small text-gray-deschis uppercase tracking-wide">
                    Curs
                  </p>
                  <h2 className="text-xl font-bold">Framer-Motion</h2>
                  <p className="text-text-gray text-sm mt-2">
                    Explorează bazele Framer Motion, inclusiv animații, gesturi
                    și tranziții fluide cu...
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      ÎNCEPĂTOR
                    </span>
                  </div>
                </div>
              </div>

              {/* VS Code Extensions Card */}
              <div className="w-full max-w-[400px] mx-auto sm:mx-0 hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                <div className="relative">
                  <img
                    src="/vscodeextensionsbanner.jpg"
                    alt="Curs Extensii VS Code"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-small text-gray-deschis uppercase tracking-wide">
                    Curs
                  </p>
                  <h2 className="text-xl font-bold">Extensii VS Code</h2>
                  <p className="text-text-gray text-sm mt-2">
                    Descoperă extensii esențiale pentru VS Code care îți cresc
                    productivitatea și îți eficientizează fluxul de lucru cu...
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      ÎNCEPĂTOR
                    </span>
                  </div>
                </div>
              </div>

              {/* CSS Card */}
              <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                <div className="relative">
                  <img
                    src="/cssbanner.jpg"
                    alt="Curs CSS"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-small text-gray-deschis uppercase tracking-wide">
                    Curs
                  </p>
                  <h2 className="text-xl font-bold">CSS</h2>
                  <p className="text-text-gray text-sm mt-2">
                    Stăpânește elementele fundamentale ale stilizării: culori,
                    layout-uri și design responsive cu...
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      ÎNCEPĂTOR
                    </span>
                  </div>
                </div>
              </div>

              {/* JavaScript Card */}
              <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                <div className="relative">
                  <img
                    src="/javascriptbanner.jpg"
                    alt="Curs JavaScript"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-small text-gray-deschis uppercase tracking-wide">
                    Curs
                  </p>
                  <h2 className="text-xl font-bold">JavaScript</h2>
                  <p className="text-text-gray text-sm mt-2">
                    Învață conceptele de bază ale JavaScript: variabile, funcții
                    și gestionarea evenimentelor cu...
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      ÎNCEPĂTOR
                    </span>
                  </div>
                </div>
              </div>

              {/* Git & GitHub Card */}
              <div className="w-full max-w-[400px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
                <div className="relative">
                  <img
                    src="/git&githubbanner.jpg"
                    alt="Curs Git și GitHub"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-small text-gray-deschis uppercase tracking-wide">
                    Curs
                  </p>
                  <h2 className="text-xl font-bold">Git & GitHub</h2>
                  <p className="text-text-gray text-sm mt-2">
                    Învață noțiunile de bază Git și GitHub: controlul
                    versiunilor, repository-uri și colaborarea în echipă cu...
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      INTERMEDIAR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <FooterRo />
    </>
  );
};

export default LearnPage;
