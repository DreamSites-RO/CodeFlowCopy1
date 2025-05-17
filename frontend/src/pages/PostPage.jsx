import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { axiosInstance } from "../lib/axios";

import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

import NavBar from "../components/layout/Navbar";

const PostPage = () => {
  const { postId } = useParams();

  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
  });

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => axiosInstance.get(`/posts/${postId}`),
  });

  if (isLoading)
    return <div className="text-center text-gray-400">Loading post...</div>;
  if (!post?.data)
    return <div className="text-center text-red-400">Post not found</div>;

  return (
    <>
      <NavBar />

      <div className="max-w-7xl min-h-screen mx-auto flex flex-col lg:flex-row gap-8 py-10 px-6 text-white">
        {/* Sidebar: only visible on large screens */}
        <aside className="hidden lg:block w-full max-w-[280px]">
          <Sidebar user={authUser} />
        </aside>

        {/* Post Content */}
        <main className="flex-1 w-full">
          <Post post={post.data} />
        </main>
      </div>
    </>
  );
};

export default PostPage;
