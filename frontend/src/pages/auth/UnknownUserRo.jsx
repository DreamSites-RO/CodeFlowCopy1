import { Link } from "react-router-dom";
import React, { useState } from "react";

import { motion, useInView } from "framer-motion";

import FooterRo from "../../components/layout/FooterRo";
import NavbarRo from "../../components/layout/NavbarRo";

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
      <NavbarRo />

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
                ÎNCEPE
              </motion.h1>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl text-yellow-ok mb-2 md:mb-4 font-bold font-pixel leading-tight md:leading-none"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                Aventura
              </motion.h1>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl text-yellow-ok font-bold font-pixel leading-tight md:leading-none"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                de Programare
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl drop-shadow-2xl text-gray-200 mb-10 md:mb-16 mt-4 font-poppins"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                Începe-ți aventura în programare într-un mod simplu și
                distractiv!
              </motion.p>

              <motion.button
                className="font-semibold text-sm sm:text-base mt-8 border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <Link to="/signupro">Începe Acum</Link>
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
            O aventură prin <br className="hidden sm:block" /> lumea programării
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-2xl text-text-gray font-poppins">
            Învață să programezi cu ajutorul unor cursuri interactive și
            distractive, create de experți din industrie și educatori.
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
                Populare
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
                Dezvoltare web
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
                Unelte utile
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">GSAP</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Învață elementele de bază ale GSAP, inclusiv cronologiile,
                      animațiile și efectele bazate pe derulare cu...
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">HTML</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Învață elementele de bază ale dezvoltării web, inclusiv
                      structura și marcajul semantic, cu ajutorul...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INCEPATOR
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">React</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Aprofundează elementele de bază React, inclusiv
                      componentele, gestionarea stării și hooks-urile, cu
                      ajutorul...
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">Framer-Motion</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Explorează elementele de bază Framer Motion, inclusiv
                      animațiile, gesturile și tranzițiile fluide, cu
                      ajutorul...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INCEPATOR
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">VS Code Extensions</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Descoperă extensiile esențiale pentru VS Code pentru a
                      spori productivitatea și a eficientiza fluxul de lucru cu
                      ajutorul...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INCEPATOR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/loginro">
                <button className="font-semibold text-sm sm:text-base mt-8 border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                  Exploareaza toate cursurile
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">HTML</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Învață elementele de bază ale dezvoltării web, inclusiv
                      structura și marcajul semantic, cu ajutorul...
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INCEPATOR
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">CSS</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Stăpânește elementele de bază ale stilizării, inclusiv
                      culorile, layout-urile și designul responsive, cu
                      ajutorul...
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INCEPATOR
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">JavaScript</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Învață elementele de bază ale JavaScript, inclusiv
                      variabile, funcții și gestionarea evenimentelor, cu
                      ajutorul...
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INCEPATOR
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">React</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Aprofundează elementele de bază React, inclusiv
                      componentele, gestionarea stării și hooks-urile, cu
                      ajutorul...
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
              <button className="font-semibold text-sm sm:text-base mt-8 border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                Exploreaza toate cursurile
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">VS Code Extensions</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Descoperă extensiile esențiale pentru VS Code pentru a
                      îmbunătăți productivitatea și a eficientiza fluxul de
                      lucru cu ajutorul...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INCEPATOR
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
                      Curs
                    </p>
                    <h2 className="text-xl font-bold">Git & GitHub</h2>
                    <p className="text-text-gray text-sm mt-2">
                      Învață elementele de bază ale Git și GitHub, inclusiv
                      controlul versiunilor, depozitele și colaborarea, cu
                      ajutorul...
                    </p>

                    <div className="mt-4 flex items-center">
                      <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        INCEPATOR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="font-semibold text-sm sm:text-base mt-8 border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                Exploreaza toate cursurile
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
                Creează, împărtășește și <br className="hidden sm:block" />{" "}
                crește împreună
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-text-gray font-poppins opacity-0 animate-fadeIn">
                Spațiul nostru integrat de comunitate este locul unde
                creativitatea se întâlnește cu conexiunea. Împărtășește-ți
                lucrările, postează meme-urile tale preferate, explorează
                cursuri utile și schimbă sfaturi. Tot ce ai nevoie, într-un
                singur loc.
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
                Îmbunătățește-ți <br className="hidden sm:block" /> învățarea
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-text-gray font-poppins opacity-0 animate-fadeIn">
                Îmbunătățește-ți abilitățile de dezvoltare web cu lecții ușoare
                în HTML, CSS, JavaScript și multe altele. Creează site-uri reale
                în timp ce deblochezi realizări pe parcurs!
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
                Testează-ți drumul <br className="hidden sm:block" /> către
                măiestrie
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-text-gray font-poppins opacity-0 animate-fadeIn">
                Pune-ți cunoștințele de programare la încercare cu quiz-uri
                interactive și mini provocări concepute pentru a te ajuta să
                aplici ceea ce ai învățat la probleme din viața reală.
                Perfectionează-ți abilitățile și progresează—un quiz pe rând.
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
              Întrebări frecvente
            </h1>
            <p className="text-sm sm:text-base drop-shadow-2xl text-text-gray font-bold text-text-deschis font-poppins mb-10 sm:mb-12 max-w-2xl">
              Unele întrebări frecvente despre începuturile în Dezvoltarea Web
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
                Ce este dezvoltarea web?
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-left">
                Dezvoltarea web implică crearea și întreținerea site-urilor web
                sau aplicațiilor web. Aceasta cuprinde totul, de la programare
                și codare până la proiectarea interfeței utilizatorului și
                experienței utilizatorului.
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
                Care sunt abilitățile cheie necesare pentru dezvoltarea web?
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-left">
                Abilitățile cheie includ competența în HTML, CSS și JavaScript.
                Cunoașterea unor framework-uri, sisteme de control al
                versiunilor (cum ar fi Git), designul responsive și înțelegerea
                de bază a tehnologiilor pe partea de server sunt, de asemenea,
                importante.
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
                Care sunt câteva instrumente esențiale pentru dezvoltatori web?
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-left">
                Instrumentele esențiale includ editori de cod precum Visual
                Studio Code, sisteme de control al versiunilor precum Git și
                instrumente pentru dezvoltatori din browser. Cunoașterea
                interfețelor de linie de comandă și a managerilor de pachete
                (cum ar fi npm) este, de asemenea, utilă.
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
                Care sunt câteva proiecte bune cu care să începi ca începător?
              </h1>
              <p className="text-sm sm:text-base drop-shadow-2xl text-left">
                Începe cu proiecte mici, precum crearea unui site personal de
                portofoliu, o aplicație de listă de sarcini sau un blog simplu.
                Acestea te vor ajuta să îți aplici abilitățile și să îți
                construiești un portofoliu.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <FooterRo />
    </>
  );
};

export default UnknownUser;
