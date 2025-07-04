import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { axiosInstance } from "../lib/axios";

import {
  Loader,
  MessageCircle,
  Send,
  Share2,
  ThumbsUp,
  Trash2,
} from "lucide-react";

import { formatDistanceToNow } from "date-fns";
import PostAction from "./PostAction";

const Post = ({ post }) => {
  const { postId } = useParams();

  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
  });

  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const isOwner = authUser?._id === post?.author?._id;
  const isLiked = post?.likes?.includes(authUser?._id);

  const queryClient = useQueryClient();

  const { mutate: deletePost, isPending: isDeletingPost } = useMutation({
    mutationFn: async () => {
      await axiosInstance.delete(`/posts/delete/${post._id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Postare stearsa cu succes");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: createComment, isPending: isAddingComment } = useMutation({
    mutationFn: async (newComment) => {
      await axiosInstance.post(`/posts/${post._id}/comment`, {
        content: newComment,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Comentariu adaugat cu succes");
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Eroare in a adauga comentariu");
    },
  });

  const { mutate: likePost, isPending: isLikingPost } = useMutation({
    mutationFn: async () => {
      await axiosInstance.post(`/posts/${post._id}/like`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });

  const handleDeletePost = () => {
    if (!window.confirm("Esti sigur ca vrei sa stergi aceasta postare?"))
      return;
    deletePost();
  };

  const handleLikePost = async () => {
    if (isLikingPost) return;
    likePost();
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      createComment(newComment);
      setNewComment("");
      setComments([
        ...comments,
        {
          content: newComment,
          user: {
            _id: authUser._id,
            name: authUser.name,
            profilePicture: authUser.profilePicture,
          },
          createdAt: new Date(),
        },
      ]);
    }
  };

  const handleSharePost = () => {
    const postUrl = `${window.location.origin}/post/${post._id}`;
    navigator.clipboard
      .writeText(postUrl)
      .then(() => toast.success("Link-ul postari copiat in clipboard"))
      .catch(() => toast.error("Eroare la copierea link-ului"));
  };

  return (
    <div className="bg-[#0F111A] rounded-lg shadow mb-4 text-text-gray border-2 border-gray-700 transition-all duration-300">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Link to={`/profile/${post?.author?.username}`}>
              <img
                src={post.author.profilePicture || "/avatar.png"}
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
            </Link>

            <div>
              <Link to={`/profile/${post?.author?.username}`}>
                <h3 className="font-semibold text-white">{post.author.name}</h3>
              </Link>
              <p className="text-xs text-gray-400">{post.author.headline}</p>
              <p className="text-xs text-gray-400">
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
          {isOwner && (
            <button
              onClick={handleDeletePost}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              {isDeletingPost ? (
                <Loader size={18} className="animate-spin" />
              ) : (
                <Trash2 size={18} />
              )}
            </button>
          )}
        </div>
        <p className="mb-4 text-white">{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="rounded-lg w-full mb-4"
          />
        )}

        <div className="flex justify-between text-gray-400">
          <PostAction
            icon={
              <ThumbsUp
                size={18}
                className={isLiked ? "text-blue-500 fill-blue-300" : ""}
              />
            }
            text={`Like (${post.likes.length})`}
            onClick={handleLikePost}
          />

          <PostAction
            icon={<MessageCircle size={18} />}
            text={`Comentariu (${comments.length})`}
            onClick={() => setShowComments(!showComments)}
          />
          <PostAction
            icon={<Share2 size={18} />}
            text="Distribuie"
            onClick={handleSharePost}
          />
        </div>
      </div>

      {showComments && (
        <div className="px-4 pb-4 bg-[#1A1D2E] rounded-b-lg">
          <div className="mb-4 max-h-60 overflow-y-auto">
            {comments.map((comment) => (
              <div
                key={comment._id || Math.random().toString(36).substr(2, 9)}
                className="mb-2 bg-[#1A1D2E] p-2 rounded flex items-start"
              >
                <img
                  src={comment.user.profilePicture || "/avatar.png"}
                  alt={comment.user.name}
                  className="w-8 h-8 rounded-full mr-2 flex-shrink-0"
                />
                <div className="flex-grow">
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-white mr-2">
                      {comment.user.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatDistanceToNow(new Date(comment.createdAt))}
                    </span>
                  </div>
                  <p className="text-white">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddComment} className="flex items-center">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow p-2 rounded-l-full bg-[#1A1D2E] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-r-full hover:bg-primary-dark transition duration-300"
              disabled={isAddingComment}
            >
              {isAddingComment ? (
                <Loader size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
