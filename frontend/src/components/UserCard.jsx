import { Link } from "react-router-dom";

function UserCard({ user, isConnection }) {
  return (
    <div className="bg-[#0F111A] rounded-lg shadow-lg hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 w-full flex items-center gap-4 font-poppins text-text-gray">
      <Link to={`/profile/${user.username}`}>
        <img
          src={user.profilePicture || "/avatar.png"}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
      </Link>

      <div className="flex-1">
        <Link to={`/profile/${user.username}`}>
          <h3 className="text-lg font-bold text-white hover:underline">
            {user.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-400">{user.headline}</p>
        <p className="text-xs text-gray-500 mt-1">
          {user.connections?.length} connections
        </p>
      </div>

      <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
        {isConnection ? "Connected" : "Connect"}
      </button>
    </div>
  );
}

export default UserCard;
