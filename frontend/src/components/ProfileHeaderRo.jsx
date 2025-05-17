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

  const renderConnectionButton = () => {
    switch (getConnectionStatus) {
      case "connected":
        return (
          <div className="flex gap-3 justify-center">
            {/* Connected Button */}
            <div className="py-1.5 px-3.5 rounded-[10px] border-2 border-green-500 text-green-500 bg-green-500 bg-opacity-10 text-sm font-bold font-poppins cursor-default transition-all duration-300 hover:bg-opacity-20 flex items-center justify-center gap-2">
              <UserCheck size={20} />
              Conectat
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeConnection(userData._id)}
              className="py-1.5 px-3.5 rounded-[10px] border-2 border-red-500 text-red-500 bg-red-500 bg-opacity-10 text-sm font-bold font-poppins cursor-pointer transition-all duration-300 hover:bg-opacity-20 flex items-center justify-center gap-2"
            >
              <X size={20} />
              Sterge
            </button>
          </div>
        );

      case "pending":
        return (
          <div className="py-1.5 px-3.5 rounded-[10px] border-2 border-yellow-500 text-yellow-500 bg-yellow-500 bg-opacity-10 text-sm font-bold font-poppins cursor-default transition-all duration-300 hover:bg-opacity-20 flex items-center justify-center gap-2">
            <Clock size={20} />
            Trimis
          </div>
        );

      case "received":
        return (
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => acceptRequest(connectionStatus.data.requestId)}
              className="py-1.5 px-3.5 rounded-[10px] border-2 border-green-500 text-green-500 bg-green-500 bg-opacity-10 text-sm font-bold font-poppins cursor-pointer transition-all duration-300 hover:bg-opacity-20 flex items-center justify-center gap-2"
            >
              Accepta
            </button>
            <button
              onClick={() => rejectRequest(connectionStatus.data.requestId)}
              className="py-1.5 px-3.5 rounded-[10px] border-2 border-red-500 text-red-500 bg-red-500 bg-opacity-10 text-sm font-bold font-poppins cursor-pointer transition-all duration-300 hover:bg-opacity-20 flex items-center justify-center gap-2"
            >
              Respinge
            </button>
          </div>
        );

      default:
        return (
          <button
            onClick={() => sendConnectionRequest(userData._id)}
            className="py-1.5 px-3.5 rounded-[10px] border-2 border-primary text-primary bg-primary bg-opacity-10 text-sm font-bold font-poppins cursor-pointer transition-all duration-300 hover:bg-opacity-20 flex items-center justify-center gap-2"
          >
            <UserPlus size={20} />
            Adauga
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
                className="text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-500 text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110"
                onClick={handleSave}
              >
                Salveaza
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-500 text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110"
              >
                Modifica
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
