import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  ExternalLink,
  Eye,
  MessageSquare,
  ThumbsUp,
  Trash2,
  UserPlus,
} from "lucide-react";

import { formatDistanceToNow } from "date-fns";

import { axiosInstance } from "../lib/axios";

import Sidebar from "../components/Sidebar";

import NavBar from "../components/layout/Navbar";

const NotificationsPage = () => {
  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
  });

  const queryClient = useQueryClient();

  const { data: notifications, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => axiosInstance.get("/notifications"),
  });

  const { mutate: markAsReadMutation } = useMutation({
    mutationFn: (id) => {
      return axiosInstance.put(`/notifications/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notifications"]);
    },
  });

  const { mutate: deleteNotificationMutation } = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/notifications/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["notifications"]);
      toast.success("Notification deleted");
    },
  });

  const renderNotificationIcon = (type) => {
    switch (type) {
      case "like":
        return <ThumbsUp className="text-blue-400" />;
      case "comment":
        return <MessageSquare className="text-green-400" />;
      case "connectionAccepted":
        return <UserPlus className="text-purple-400" />;
      default:
        return null;
    }
  };

  const renderNotificationContent = (notification) => {
    switch (notification.type) {
      case "like":
        return (
          <span>
            <strong>{notification.relatedUser.name}</strong> liked your post
          </span>
        );
      case "comment":
        return (
          <span>
            <Link
              to={`/profile/${notification.relatedUser.username}`}
              className="font-bold"
            >
              {notification.relatedUser.name}
            </Link>{" "}
            commented on your post
          </span>
        );
      case "connectionAccepted":
        return (
          <span>
            <Link
              to={`/profile/${notification.relatedUser.username}`}
              className="font-bold"
            >
              {notification.relatedUser.name}
            </Link>{" "}
            accepted your connection request
          </span>
        );
      default:
        return null;
    }
  };

  const renderRelatedPost = (relatedPost) => {
    if (!relatedPost) return null;

    return (
      <Link
        to={`/post/${relatedPost._id}`}
        className="mt-2 p-2 bg-gray-800 rounded-md flex items-center space-x-2 hover:bg-gray-700 transition-colors"
      >
        {relatedPost.image && (
          <img
            src={relatedPost.image}
            alt="Post preview"
            className="w-10 h-10 object-cover rounded"
          />
        )}
        <div className="flex-1 overflow-hidden">
          <p className="text-sm text-gray-300 truncate">
            {relatedPost.content}
          </p>
        </div>
        <ExternalLink size={14} className="text-gray-400" />
      </Link>
    );
  };

  return (
    <>
      <NavBar />

      <div className="max-w-[1440px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="col-span-1">
            <Sidebar user={authUser} />
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="bg-[#0F111A] rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-6 text-white">
                Notifications
              </h1>

              {isLoading ? (
                <p className="text-gray-400">Loading notifications...</p>
              ) : notifications && notifications.data.length > 0 ? (
                <ul>
                  {notifications.data.map((notification) => (
                    <li
                      key={notification._id}
                      className={`w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray p-4 my-4 ${
                        !notification.read
                          ? "border-blue-500"
                          : "border-gray-700"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <Link
                            to={`/profile/${notification.relatedUser.username}`}
                          >
                            <img
                              src={
                                notification.relatedUser.profilePicture ||
                                "/avatar.png"
                              }
                              alt={notification.relatedUser.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          </Link>

                          <div>
                            <div className="flex items-center gap-2">
                              <div className="p-1 bg-gray-800 rounded-full">
                                {renderNotificationIcon(notification.type)}
                              </div>
                              <p className="text-sm text-gray-200">
                                {renderNotificationContent(notification)}
                              </p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              {formatDistanceToNow(
                                new Date(notification.createdAt),
                                {
                                  addSuffix: true,
                                }
                              )}
                            </p>
                            {renderRelatedPost(notification.relatedPost)}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {!notification.read && (
                            <button
                              onClick={() =>
                                markAsReadMutation(notification._id)
                              }
                              className="p-1 bg-blue-900 text-blue-300 rounded hover:bg-blue-800 transition-colors"
                              aria-label="Mark as read"
                            >
                              <Eye size={16} />
                            </button>
                          )}
                          <button
                            onClick={() =>
                              deleteNotificationMutation(notification._id)
                            }
                            className="p-1 bg-red-900 text-red-300 rounded hover:bg-red-800 transition-colors"
                            aria-label="Delete notification"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No notifications at the moment.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
