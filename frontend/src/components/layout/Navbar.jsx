import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Bell,
  GraduationCap,
  Handshake,
  Home,
  LogOut,
  User,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

import { axiosInstance } from "../../lib/axios";

const Navbar = () => {
  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
  });

  const queryClient = useQueryClient();

  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => axiosInstance.get("/notifications"),
    enabled: !!authUser,
  });

  const { data: connectionRequests } = useQuery({
    queryKey: ["connectionRequests"],
    queryFn: async () => axiosInstance.get("/connections/requests"),
    enabled: !!authUser,
  });

  const { mutate: logout } = useMutation({
    mutationFn: () => axiosInstance.post("/auth/logout"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const unreadNotificationCount = notifications?.data.filter(
    (notif) => !notif.read
  ).length;

  const unreadConnectionRequestsCount = connectionRequests?.data?.length;

  return (
    <nav className="bg-bg-princ shadow-md sticky top-0 z-10 border-b-2 border-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                className="h-8 rounded"
                src="/small-logo.svg"
                alt="CodeFlow"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            {authUser ? (
              <>
                <Link
                  to={"/"}
                  className="text-text-gray flex flex-col items-center font-poppins font-semibold"
                >
                  <Home size={20} />
                  <span className="text-xs hidden md:block">Home</span>
                </Link>
                <Link
                  to="/learn"
                  className="text-text-gray flex flex-col items-center font-poppins font-semibold"
                >
                  <GraduationCap size={20} />
                  <span className="text-xs hidden md:block">Learn</span>
                </Link>
                <Link
                  to="/community"
                  className="text-text-gray flex flex-col items-center font-poppins font-semibold"
                >
                  <Handshake size={20} />
                  <span className="text-xs hidden md:block">Community</span>
                </Link>
                <Link
                  to="/network"
                  className="text-text-gray flex flex-col items-center relative font-poppins font-semibold"
                >
                  <Users size={20} />
                  <span className="text-xs hidden md:block">My Network</span>
                  {unreadConnectionRequestsCount > 0 && (
                    <span
                      className="absolute -top-1 -right-1 md:right-4 bg-blue-500 text-text-gray text-xs 
										rounded-full size-3 md:size-4 flex items-center justify-center"
                    >
                      {unreadConnectionRequestsCount}
                    </span>
                  )}
                </Link>
                <Link
                  to="/notifications"
                  className="text-text-gray flex flex-col items-center relative font-poppins font-semibold"
                >
                  <Bell size={20} />
                  <span className="text-xs hidden md:block">Notifications</span>
                  {unreadNotificationCount > 0 && (
                    <span
                      className="absolute -top-1 -right-1 md:right-4 bg-blue-500 text-text-gray text-xs 
										rounded-full size-3 md:size-4 flex items-center justify-center"
                    >
                      {unreadNotificationCount}
                    </span>
                  )}
                </Link>
                <Link
                  to={`/profile/${authUser.username}`}
                  className="text-text-gray flex flex-col items-center font-poppins font-semibold"
                >
                  <User size={20} />
                  <span className="text-xs hidden md:block">Me</span>
                </Link>
                <button
                  className="flex items-center space-x-1 text-sm text-text-gray hover:text-gray-800 font-poppins font-semibold"
                  onClick={() => logout()}
                >
                  <LogOut size={20} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn font-poppins btn-ghost text-[16px] text-text-gray"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-large font-pixelify hover:scale-105 font-bold transition-all duration-500 px-8 py-2 rounded-md font-large text-black bg-yellow-ok hover:bg-yellow-meh border-[3px] border-orange-border btn-primary"
                >
                  Join now
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
