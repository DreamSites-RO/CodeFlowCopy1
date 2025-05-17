import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { FaGithub, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const authUser = queryClient.getQueryData(["authUser"]);

  const isAuthenticated = !!authUser;
  const isRomanian =
    location.pathname.startsWith("/ro") || location.pathname.includes("ro");

  const englishLink = isAuthenticated ? "/" : "/welcome";
  const romanianLink = isAuthenticated ? "/ro" : "/welcomero";

  return (
    <footer className="w-full bg-[#040f1a] text-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Logo + Language Switcher */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={linkVariants}
            viewport={{ once: true }}
          >
            <Link to="/">
              <img
                src="/logo.svg"
                alt="Logo"
                className="w-32 lg:w-36 mb-4 lg:mb-0"
              />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={linkVariants}
            viewport={{ once: true }}
            className="text-sm text-gray-400 font-medium space-x-2"
          >
            <Link to={englishLink} className="text-lg hover:text-white">
              🇬🇧 Engleză
            </Link>
            /
            <Link to={romanianLink} className="text-lg hover:text-white">
              🇷🇴 Română
            </Link>
          </motion.div>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="text-gray-400 uppercase tracking-wide mb-3">
              Companie
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about">Despre</Link>
              </li>
              <li>
                <Link to="/community">Comunitate</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 uppercase tracking-wide mb-3">
              Practică
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/challenges">Provocări</Link>
              </li>
              <li>
                <Link to="/projects">Proiecte</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 uppercase tracking-wide mb-3">
              Învățați
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses">Toate cursurile</Link>
              </li>
              <li>
                <Link to="/html">HTML</Link>
              </li>
              <li>
                <Link to="/css">CSS</Link>
              </li>
              <li>
                <Link to="/javascript">JavaScript</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 uppercase tracking-wide mb-3">
              Mai multe
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/react">React</Link>
              </li>
              <li>
                <Link to="/git">Git & GitHub</Link>
              </li>
              <li>
                <Link to="/extensions">Extensii</Link>
              </li>
              <li>
                <Link to="/gsap">GSAP</Link>
              </li>
              <li>
                <Link to="/framermotions">Framer</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright + Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="text-sm text-gray-500 space-x-4 mb-4 lg:mb-0">
            <span>©2025 CodeFlow, Inc.</span>
            <Link to="/terms">Termeni</Link>
            <Link to="/privacy">Politica de confidențialitate</Link>
          </div>
          <div className="flex space-x-4 text-2xl text-white">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 hover:bg-white rounded-full p-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-500 hover:bg-white rounded-full p-2"
            >
              <FaYoutube />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 hover:bg-white rounded-full p-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 hover:bg-white rounded-full p-2"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
