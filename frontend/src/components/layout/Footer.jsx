import { FaGithub, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

import { motion } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <div className="max-w-full bg-[#040f1a]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row text-gray-deschis justify-center lg:justify-between items-start py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-start flex-1 mx-4 lg:mx-0 mb-8 sm:text-left sm:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={logoVariants}
            viewport={{ once: true }}
          >
            <Link to="/">
              <img src="/logo.svg" alt="Logo" className="lg:w-36 w-32 mb-8" />
            </Link>
          </motion.div>
          <motion.p
            variants={linkVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-small lg:text-medium font-bold drop-shadow-2xl text-text-gray font-poppins mb-4"
          >
            High-quality coding education powered <br /> by an open-source
            community.
          </motion.p>
          <motion.div
            className="flex flex-row gap-4"
            initial="hidden"
            whileInView="visible"
            variants={iconVariants}
            viewport={{ once: true }}
          >
            <FaGithub
              size={32}
              className="opacity-60 hover:text-gray-800 hover:opacity-100 transition duration-300 hover:scale-105 hover:cursor-pointer"
            />
            <FaDiscord
              size={32}
              className="opacity-60 hover:text-blue-500 hover:opacity-100 transition duration-300 hover:scale-105 hover:cursor-pointer"
            />
            <FaYoutube
              size={32}
              className="opacity-60 hover:text-red-600 hover:opacity-100 transition duration-300 hover:scale-105 hover:cursor-pointer"
            />
            <FaInstagram
              size={32}
              className="opacity-60 hover:text-orange-500 hover:opacity-100 transition duration-300 hover:scale-105 hover:cursor-pointer"
            />
          </motion.div>
        </div>
        <div className="flex flex-wrap gap-[32px] lg:gap-32 text-text-gray font-poppins flex-2 px-4 pd:mx-4 lg:mx-0">
          <div className="flex flex-col">
            <motion.h1
              className="mb-6 font-bold text-sm md:text-md lg:text-base"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/AboutPage">About</Link>
            </motion.p>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Blog
            </motion.p>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Team
            </motion.p>
          </div>
          <div className="flex flex-col">
            <motion.h1
              className="mb-6 font-bold text-sm md:text-md lg:text-base"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Support
            </motion.h1>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              FAQ
            </motion.p>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/ContactPage">Contact</Link>
            </motion.p>
          </div>
          <div className="flex flex-col">
            <motion.h1
              className="mb-6 font-bold text-sm md:text-md lg:text-base"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Guides
            </motion.h1>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Community Guides
            </motion.p>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/resources">Resources</Link>
            </motion.p>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/#learnQuestions">Questions</Link>
            </motion.p>
          </div>
          <div className="flex flex-col">
            <motion.h1
              className="mb-6 font-bold text-sm md:text-md lg:text-base"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Legal
            </motion.h1>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/TermsPage">Terms</Link>
            </motion.p>
            <motion.p
              className="mb-4 font-semi-bold opacity-80 text-xs md:text-sm lg:text-base hover:cursor-pointer hover:opacity-100 transition duration-500"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/PrivacyPage">Privacy</Link>
            </motion.p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl font-poppins font-bold mx-auto text-gray-deschis text-left pb-12 px-6 lg:px-8 lg:pb-24">
        <p className="text-small lg:text-medium opacity-80 drop-shadow-2xl text-left mb-12 lg:mb-0">
          © 2024 DreamSites. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
