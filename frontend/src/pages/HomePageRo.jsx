import { TypeAnimation } from "react-type-animation";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

import { motion } from "framer-motion";

import { axiosInstance } from "../lib/axios";

import FooterRo from "../components/layout/FooterRo";
import NavbarRo from "../components/layout/NavbarRo";

import RecommendedUserRo from "../components/RecommendedUserRo";
import SidebarRo from "../components/SidebarRo";

const HomePage = () => {
  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
  });

  const { data: recommendedUsers } = useQuery({
    queryKey: ["recommendedUsers"],
    queryFn: async () => {
      const res = await axiosInstance.get("/users/suggestions");
      return res.data;
    },
  });

  return (
    <>
      <NavbarRo />

      <div className="max-w-7xl min-h-screen mx-auto flex flex-col lg:flex-row gap-8 py-10 px-6 text-white">
        {/* Left Side */}
        <div className="flex flex-col flex-1 gap-10">
          <div className="flex items-start gap-4">
            <motion.img
              src="/pixelcat.jpg"
              alt="Pixel Cat"
              className="w-20 h-20 object-contain"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="flex-1 relative">
              <div className="bg-[#1a252b] text-white text-sm px-6 py-5 rounded-xl border-2 border-[#1f353f] shadow-[2px_2px_0_0_#17222a] font-pixel whitespace-nowrap w-full">
                <TypeAnimation
                  sequence={[
                    `Bun venit inapoi @${
                      authUser?.username || authUser?.name || "Guest"
                    }! Invatare placuta!`,
                  ]}
                  speed={50}
                  wrapper="span"
                  cursor={true}
                  repeat={0}
                  className="block"
                />
              </div>

              <div className="absolute left-[-8px] top-5 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#1a252b]" />
            </div>
          </div>

          <div className="space-y-6 font-poppins">
            <h2 className="text-2xl font-bold">Incepe-ti aventura</h2>

            <div
              className="relative w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray"
              style={{
                backgroundImage: "url('/startwithhomepage.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="font-poppins relative p-6 h-56 flex flex-col justify-end">
                <p className="text-small text-gray-400 uppercase tracking-wide">
                  Curs
                </p>
                <h3 className="text-2xl font-pixel font-bold mt-1 text-white">
                  Drumul incepatorului
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  Începe-ți călătoria în programare cu drumul nostru prietenos
                  pentru începători.
                </p>

                <div className="mt-4">
                  <button className="text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-500 text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110">
                    Incepe sa inveti
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 font-poppins">
            <h2 className="text-2xl font-bold">Exploreaza mai multe</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="w-64 bg-[#0F111A] border-2 border-gray-700 rounded-lg text-left overflow-hidden shadow-lg hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500">
                {/* Image */}
                <div className="relative">
                  <img
                    src="/reactbanner.jpg"
                    alt="Course Banner"
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Curs
                  </p>
                  <h3 className="text-xl font-bold text-white mt-1">React</h3>

                  {/* Creative Progress */}
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-400 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      INTERMEDIAR
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-64 bg-[#0F111A] border-2 border-gray-700 rounded-lg text-left overflow-hidden shadow-lg hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500">
                {/* Image */}
                <div className="relative">
                  <img
                    src="/javascriptbanner.jpg"
                    alt="Course Banner"
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Curs
                  </p>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Java Script
                  </h3>

                  {/* Creative Progress */}
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-400 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      INCEPATOR
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-64 text-center overflow-hidden shadow-lg flex justify-center items-center">
                <Link to="/learnro">
                  <button className="text-md tracking-wider flex flex-row items-center opacity-60 hover:opacity-100 transition-all duration-500 justify-center text-gray-400">
                    Vezi tot <ArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full lg:w-1/3 gap-8">
          <SidebarRo user={authUser} />

          {recommendedUsers?.length > 0 && (
            <div className="hidden lg:block">
              <div className="w-full max-w-[340px] mx-auto bg-[#0F111A] border-2 border-gray-700 rounded-lg hover:bg-opacity-70 transition-all duration-300 shadow-lg p-4">
                <h2 className="text-lg font-bold mb-4">
                  Persoane pe care le-ai putea cunoaste
                </h2>
                <div className="space-y-4">
                  {recommendedUsers.map((user) => (
                    <RecommendedUserRo key={user._id} user={user} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <FooterRo />
    </>
  );
};

export default HomePage;
