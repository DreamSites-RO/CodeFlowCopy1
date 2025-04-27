import { TypeAnimation } from "react-type-animation";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

import { motion } from "framer-motion";

import { axiosInstance } from "../lib/axios";

import Footer from "../components/layout/Footer";

import RecommendedUser from "../components/RecommendedUser";
import Sidebar from "../components/Sidebar";

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
                    `Welcome back @${
                      authUser?.username || authUser?.name || "Guest"
                    }! Happy learning!`,
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
            <h2 className="text-2xl font-bold">Start your adventure</h2>

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
                  Course
                </p>
                <h3 className="text-2xl font-pixel font-bold mt-1 text-white">
                  Beginner Road
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  Start your coding journey with our beginner-friendly road.
                </p>

                <div className="mt-4">
                  <button className="text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-500 text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 font-poppins">
            <h2 className="text-2xl font-bold">Explore More</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="w-64 bg-[#0F111A] border-2 border-gray-700 rounded-lg text-left overflow-hidden shadow-lg hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500">
                {/* Image */}
                <div className="relative">
                  <img
                    src="/htmlbanner.jpg"
                    alt="Course banner"
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Course
                  </p>
                  <h3 className="text-xl font-bold text-white mt-1">HTML</h3>

                  {/* Creative Progress */}
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-400 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      BEGGINER
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-64 bg-[#0F111A] border-2 border-gray-700 rounded-lg text-left overflow-hidden shadow-lg hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500">
                {/* Image */}
                <div className="relative">
                  <img
                    src="/javascriptbanner.jpg"
                    alt="Course banner"
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Course
                  </p>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Java Script
                  </h3>

                  {/* Creative Progress */}
                  <div className="mt-4 flex items-center">
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-400 text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      BEGINNER
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-64 text-center overflow-hidden shadow-lg flex justify-center items-center">
                <Link to="/learn">
                  <button className="text-md tracking-wider flex flex-row items-center opacity-60 hover:opacity-100 transition-all duration-500 justify-center text-gray-400">
                    See all <ArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full lg:w-1/3 gap-8">
          <Sidebar user={authUser} />

          {recommendedUsers?.length > 0 && (
            <div className="hidden lg:block">
              <div className="w-full max-w-[340px] mx-auto bg-[#0F111A] border-2 border-gray-700 rounded-lg hover:bg-opacity-70 transition-all duration-300 shadow-lg p-4">
                <h2 className="text-lg font-bold mb-4">People you may know</h2>
                <div className="space-y-4">
                  {recommendedUsers.map((user) => (
                    <RecommendedUser key={user._id} user={user} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
