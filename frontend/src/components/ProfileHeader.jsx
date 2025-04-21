import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Camera, Clock, MapPin, UserCheck, UserPlus, X } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import { axiosInstance } from "../lib/axios";

const ProfileHeader = ({ userData, onSave, isOwnProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const queryClient = useQueryClient();

  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
  });

  const { data: connectionStatus, refetch: refetchConnectionStatus } = useQuery(
    {
      queryKey: ["connectionStatus", userData._id],
      queryFn: () => axiosInstance.get(`/connections/status/${userData._id}`),
      enabled: !isOwnProfile,
    }
  );

  const isConnected = userData.connections.some(
    (connection) => connection === authUser?._id
  );

  const { mutate: sendConnectionRequest } = useMutation({
    mutationFn: (userId) =>
      axiosInstance.post(`/connections/request/${userId}`),
    onSuccess: () => {
      toast.success("Connection request sent");
      refetchConnectionStatus();
      queryClient.invalidateQueries(["connectionRequests"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  const { mutate: acceptRequest } = useMutation({
    mutationFn: (requestId) =>
      axiosInstance.put(`/connections/accept/${requestId}`),
    onSuccess: () => {
      toast.success("Connection request accepted");
      refetchConnectionStatus();
      queryClient.invalidateQueries(["connectionRequests"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  const { mutate: rejectRequest } = useMutation({
    mutationFn: (requestId) =>
      axiosInstance.put(`/connections/reject/${requestId}`),
    onSuccess: () => {
      toast.success("Connection request rejected");
      refetchConnectionStatus();
      queryClient.invalidateQueries(["connectionRequests"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  const { mutate: removeConnection } = useMutation({
    mutationFn: (userId) => axiosInstance.delete(`/connections/${userId}`),
    onSuccess: () => {
      toast.success("Connection removed");
      refetchConnectionStatus();
      queryClient.invalidateQueries(["connectionRequests"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  const getConnectionStatus = useMemo(() => {
    if (isConnected) return "connected";
    if (!isConnected) return "not_connected";
    return connectionStatus?.data?.status;
  }, [isConnected, connectionStatus]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedData((prev) => ({
          ...prev,
          [event.target.name]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(editedData);
    setIsEditing(false);
  };

  const baseButtonClass =
    "text-white py-2 px-4 rounded-full transition duration-300 flex items-center justify-center";

  const renderConnectionButton = () => {
    switch (getConnectionStatus) {
      case "connected":
        return (
          <div className="flex gap-2 justify-center">
            <div
              className={`${baseButtonClass} bg-green-600 hover:bg-green-700`}
            >
              <UserCheck size={20} className="mr-2" />
              Connected
            </div>
            <button
              className={`${baseButtonClass} bg-red-600 hover:bg-red-700`}
              onClick={() => removeConnection(userData._id)}
            >
              <X size={20} className="mr-2" />
              Remove
            </button>
          </div>
        );
      case "pending":
        return (
          <button
            className={`${baseButtonClass} bg-yellow-500 hover:bg-yellow-600`}
          >
            <Clock size={20} className="mr-2" />
            Pending
          </button>
        );
      case "received":
        return (
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => acceptRequest(connectionStatus.data.requestId)}
              className={`${baseButtonClass} bg-green-600 hover:bg-green-700`}
            >
              Accept
            </button>
            <button
              onClick={() => rejectRequest(connectionStatus.data.requestId)}
              className={`${baseButtonClass} bg-red-600 hover:bg-red-700`}
            >
              Reject
            </button>
          </div>
        );
      default:
        return (
          <button
            onClick={() => sendConnectionRequest(userData._id)}
            className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-full transition duration-300 flex items-center justify-center"
          >
            <UserPlus size={20} className="mr-2" />
            Connect
          </button>
        );
    }
  };

  return (
    <div className="w-full mb-6 bg-[#0F111A] border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg text-text-gray font-poppins hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500">
      <div
        className="relative h-40 bg-cover bg-center"
        style={{
          backgroundImage: `url('${
            editedData.bannerImg || userData.bannerImg || "/banner.png"
          }')`,
        }}
      >
        {isEditing && (
          <label className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full shadow cursor-pointer">
            <Camera size={20} />
            <input
              type="file"
              className="hidden"
              name="bannerImg"
              onChange={handleImageChange}
              accept="image/*"
            />
          </label>
        )}
      </div>

      <div className="p-4 text-center">
        <div className="relative -mt-16">
          <img
            className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-gray-800"
            src={
              editedData.profilePicture ||
              userData.profilePicture ||
              "/avatar.png"
            }
            alt={userData.name}
          />
          {isEditing && (
            <label className="absolute bottom-0 right-1/2 transform translate-x-14 bg-gray-800 text-white p-2 rounded-full shadow cursor-pointer">
              <Camera size={20} />
              <input
                type="file"
                className="hidden"
                name="profilePicture"
                onChange={handleImageChange}
                accept="image/*"
              />
            </label>
          )}
        </div>

        <div className="mt-2">
          {isEditing ? (
            <input
              type="text"
              value={editedData.name ?? userData.name}
              onChange={(e) =>
                setEditedData({ ...editedData, name: e.target.value })
              }
              className="text-xl font-bold bg-transparent text-center w-full text-white"
            />
          ) : (
            <h1 className="text-xl font-bold text-white">{userData.name}</h1>
          )}

          {isEditing ? (
            <input
              type="text"
              value={editedData.headline ?? userData.headline}
              onChange={(e) =>
                setEditedData({ ...editedData, headline: e.target.value })
              }
              className="text-gray-400 text-sm bg-transparent text-center w-full"
            />
          ) : (
            <p className="text-sm text-gray-400">{userData.headline}</p>
          )}

          <div className="flex justify-center items-center mt-2">
            <MapPin size={16} className="text-gray-500 mr-1" />
            {isEditing ? (
              <input
                type="text"
                value={editedData.location ?? userData.location}
                onChange={(e) =>
                  setEditedData({ ...editedData, location: e.target.value })
                }
                className="text-gray-400 text-sm bg-transparent text-center"
              />
            ) : (
              <span className="text-gray-400 text-sm">{userData.location}</span>
            )}
          </div>
        </div>

        <div className="mt-4">
          {isOwnProfile ? (
            isEditing ? (
              <button
                className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300"
                onClick={handleSave}
              >
                Save Profile
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300"
              >
                Edit Profile
              </button>
            )
          ) : (
            <div className="flex justify-center">
              {renderConnectionButton()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
