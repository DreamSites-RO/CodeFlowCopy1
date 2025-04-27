import { Home, UserPlus, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ user }) {
  return (
    <div className="w-full max-w-[340px] mx-auto hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray text-sm">
      <div className="relative">
        <div
          className="w-full h-28 bg-cover bg-center"
          style={{
            backgroundImage: `url("${user.bannerImg || "/banner.png"}")`,
          }}
        />
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture || "/avatar.png"}
            alt={user.name}
            className="w-16 h-16 rounded-full absolute left-1/2 transform -translate-x-1/2 -bottom-8 border-4 border-[#0F111A]"
          />
        </Link>
      </div>

      <div className="pt-10 px-3 pb-4">
        <Link to={`/profile/${user.username}`}>
          <h2 className="text-base font-bold text-center">{user.name}</h2>
        </Link>
        <p className="text-xs text-gray-400 text-center mt-1">
          {user.headline}
        </p>
        <p className="text-[11px] text-center text-gray-500 mt-1">
          {user.connections.length} connections
        </p>

        <div className="mt-4 space-y-1.5">
          <Link
            to="/"
            className="flex items-center py-1.5 px-3 rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            <Home className="mr-2" size={18} /> Home
          </Link>
          <Link
            to="/network"
            className="flex items-center py-1.5 px-3 rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            <UserPlus className="mr-2" size={18} /> My Network
          </Link>
          <Link
            to="/notifications"
            className="flex items-center py-1.5 px-3 rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            <Bell className="mr-2" size={18} /> Notifications
          </Link>
        </div>

        <div className="mt-4 border-t border-gray-700 pt-3 text-center">
          <Link
            to={`/profile/${user.username}`}
            className="text-xs font-medium text-gray-300 hover:text-white"
          >
            Visit your profile
          </Link>
        </div>
      </div>
    </div>
  );
}
