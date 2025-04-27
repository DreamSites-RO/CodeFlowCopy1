import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Check, X } from "lucide-react";
import { axiosInstance } from "../lib/axios";

const FriendRequest = ({ request }) => {
  const queryClient = useQueryClient();

  const { mutate: acceptConnectionRequest } = useMutation({
    mutationFn: (requestId) =>
      axiosInstance.put(`/connections/accept/${requestId}`),
    onSuccess: () => {
      toast.success("Connection request accepted");
      queryClient.invalidateQueries({ queryKey: ["connectionRequests"] });
    },
    onError: (error) => {
      toast.error(error.response.data.error);
    },
  });

  const { mutate: rejectConnectionRequest } = useMutation({
    mutationFn: (requestId) =>
      axiosInstance.put(`/connections/reject/${requestId}`),
    onSuccess: () => {
      toast.success("Connection request rejected");
      queryClient.invalidateQueries({ queryKey: ["connectionRequests"] });
    },
    onError: (error) => {
      toast.error(error.response.data.error);
    },
  });

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 font-poppins text-text-gray w-full">
      <div className="flex items-center gap-4 min-w-0">
        <Link to={`/profile/${request.sender.username}`}>
          <img
            src={request.sender.profilePicture || "/avatar.png"}
            alt={request.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </Link>

        <div className="min-w-0">
          <Link
            to={`/profile/${request.sender.username}`}
            className="text-lg font-semibold text-white hover:underline block truncate"
          >
            {request.sender.name}
          </Link>
          <p className="text-sm text-gray-400 truncate">
            {request.sender.headline}
          </p>
        </div>
      </div>

      <div className="flex gap-2 justify-end items-center">
        {/* Full buttons on md+ */}
        <button
          onClick={() => acceptConnectionRequest(request._id)}
          className="hidden sm:inline-block text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 text-green-500 border-green-500 bg-green-500 bg-opacity-10 hover:opacity-100"
        >
          Accept
        </button>
        <button
          onClick={() => rejectConnectionRequest(request._id)}
          className="hidden sm:inline-block text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 text-red-500 border-red-500 bg-red-500 bg-opacity-10 hover:opacity-100"
        >
          Reject
        </button>

        {/* Icons on small screens */}
        <button
          onClick={() => acceptConnectionRequest(request._id)}
          className="sm:hidden p-2 rounded-full border-2 border-green-500 text-green-500 bg-green-500 bg-opacity-10 hover:bg-opacity-20 transition-all"
          aria-label="Accept"
        >
          <Check size={20} />
        </button>
        <button
          onClick={() => rejectConnectionRequest(request._id)}
          className="sm:hidden p-2 rounded-full border-2 border-red-500 text-red-500 bg-red-500 bg-opacity-10 hover:bg-opacity-20 transition-all"
          aria-label="Reject"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;
