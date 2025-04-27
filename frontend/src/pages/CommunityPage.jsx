import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";
import React from "react";

import { axiosInstance } from "../lib/axios";

import RecommendedUser from "../components/RecommendedUser";
import PostCreation from "../components/PostCreation";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

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

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosInstance.get("/posts");
      return res.data;
    },
  });

  console.log("posts", posts);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="hidden lg:block lg:col-span-1">
          <Sidebar user={authUser} />
        </div>

        <div className="col-span-1 lg:col-span-2 order-first lg:order-none">
          <PostCreation user={authUser} />

          {posts?.map((post) => (
            <Post key={post._id} post={post} />
          ))}

          {posts?.length === 0 && (
            <div className="bg-[#0F111A] border-2 border-gray-700 rounded-lg shadow p-8 text-center text-text-gray">
              <div className="mb-6">
                <Users size={64} className="mx-auto text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">No Posts Yet</h2>
              <p className="text-sm text-gray-400">
                Connect with others to start seeing posts in your feed!
              </p>
            </div>
          )}
        </div>

        {recommendedUsers?.length > 0 && (
          <div className="col-span-1 lg:col-span-1 hidden lg:block">
            <div className="w-full max-w-[340px] mx-auto bg-[#0F111A] border-2 border-gray-700 rounded-lg hover:bg-opacity-70 transition-all duration-300 text-text-gray font-poppins shadow-lg p-4">
              <h2 className="text-lg font-bold mb-4">People you may know</h2>
              <div className="space-y-3">
                {recommendedUsers.map((user) => (
                  <RecommendedUser key={user._id} user={user} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
