import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Check, Clock, UserCheck, UserPlus, X } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { axiosInstance } from "../lib/axios";

const RecommendedUser = ({ user }) => {
  const queryClient = useQueryClient();

  const { data: connectionStatus, isLoading } = useQuery({
    queryKey: ["connectionStatus", user._id],
    queryFn: () => axiosInstance.get(`/connections/status/${user._id}`),
  });

  const { mutate: sendConnectionRequest } = useMutation({
    mutationFn: (userId) =>
      axiosInstance.post(`/connections/request/${userId}`),
    onSuccess: () => {
      toast.success("Connection request sent successfully");
      queryClient.invalidateQueries({
        queryKey: ["connectionStatus", user._id],
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "An error occurred");
    },
  });

  const { mutate: acceptRequest } = useMutation({
    mutationFn: (requestId) =>
      axiosInstance.put(`/connections/accept/${requestId}`),
    onSuccess: () => {
      toast.success("Connection request accepted");
      queryClient.invalidateQueries({
        queryKey: ["connectionStatus", user._id],
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "An error occurred");
    },
  });

  const { mutate: rejectRequest } = useMutation({
    mutationFn: (requestId) =>
      axiosInstance.put(`/connections/reject/${requestId}`),
    onSuccess: () => {
      toast.success("Connection request rejected");
      queryClient.invalidateQueries({
        queryKey: ["connectionStatus", user._id],
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "An error occurred");
    },
  });

  const handleConnect = () => {
    if (connectionStatus?.data?.status === "not_connected") {
      sendConnectionRequest(user._id);
    }
  };

  const renderButton = () => {
    if (isLoading) {
      return (
        <button
          className="flex items-center py-1.5 px-3 rounded-md bg-gray-700 text-gray-400 text-xs cursor-not-allowed"
          disabled
        >
          Se incarca...
        </button>
      );
    }

    switch (connectionStatus?.data?.status) {
      case "pending":
        return (
          <button
            className="flex items-center py-1.5 px-3 rounded-[10px] border-2 border-blue-400 text-blue-400 bg-blue-400 bg-opacity-10 text-xs font-bold font-poppins transition-all duration-300 cursor-not-allowed"
            disabled
          >
            <Clock size={14} className="mr-2" />
            Trimis
          </button>
        );

      case "received":
        return (
          <div className="flex gap-2">
            <button
              onClick={() => acceptRequest(connectionStatus.data.requestId)}
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-green-500 bg-green-500 bg-opacity-10 text-green-500 hover:bg-opacity-20 transition-all"
              title="Accept"
            >
              <Check size={16} />
            </button>
            <button
              onClick={() => rejectRequest(connectionStatus.data.requestId)}
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-500 bg-red-500 bg-opacity-10 text-red-500 hover:bg-opacity-20 transition-all"
              title="Reject"
            >
              <X size={16} />
            </button>
          </div>
        );
      case "connected":
        return (
          <button
            className="flex items-center py-1.5 px-3 rounded-md bg-green-500 text-white text-xs"
            disabled
          >
            <UserCheck size={14} className="mr-2" />
            Conectat
          </button>
        );
      default:
        return (
          <button
            onClick={handleConnect}
            className="flex items-center py-1.5 px-3 rounded-[10px] border-2 font-poppins font-bold text-xs transition-all duration-500 text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110"
          >
            <UserPlus size={14} className="mr-2" />
            Adauga
          </button>
        );
    }
  };

  return (
    <div className="w-full max-w-[320px] mx-auto bg-[#0F111A] border-2 border-gray-700 rounded-lg hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-300 font-poppins p-4 flex items-center justify-between mb-3 shadow-lg text-white">
      <Link
        to={`/profile/${user.username}`}
        className="flex items-center gap-3 overflow-hidden"
      >
        <img
          src={user.profilePicture || "/avatar.png"}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="truncate">
          <h3 className="font-semibold text-sm truncate">{user.name}</h3>
          <p className="text-xs text-gray-400 truncate">{user.headline}</p>
        </div>
      </Link>
      <div className="ml-2">{renderButton()}</div>
    </div>
  );
};

export default RecommendedUser;
