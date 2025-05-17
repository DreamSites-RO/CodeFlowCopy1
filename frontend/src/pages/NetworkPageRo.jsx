import { useQuery } from "@tanstack/react-query";
import { UserPlus } from "lucide-react";

import { axiosInstance } from "../lib/axios";

import FooterRo from "../components/layout/FooterRo";
import NavBarRo from "../components/layout/NavbarRo";

import FriendRequestRo from "../components/FriendRequestRo";
import UserCardRo from "../components/UserCardRo";
import SidebarRo from "../components/SidebarRo";

const NetworkPage = () => {
  const { data: user } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
  });

  const { data: connectionRequests } = useQuery({
    queryKey: ["connectionRequests"],
    queryFn: () => axiosInstance.get("/connections/requests"),
  });

  const { data: connections } = useQuery({
    queryKey: ["connections"],
    queryFn: () => axiosInstance.get("/connections"),
  });

  return (
    <>
      <NavBarRo />
      <div className="max-w-[1440px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="col-span-1">
            <SidebarRo user={user} />
          </div>
          <div className="col-span-1 lg:col-span-3">
            <div className="bg-[#0F111A] rounded-lg shadow p-6 mb-6 border-2 border-gray-700 font-poppins text-text-gray">
              <h1 className="text-2xl font-bold mb-6 text-white">
                Rețeaua mea
              </h1>

              {connectionRequests?.data?.length > 0 ? (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Cereri de conexiune
                  </h2>
                  <div className="space-y-4">
                    {connectionRequests.data.map((request) => (
                      <div
                        key={request.id}
                        className="hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 border-gray-700 rounded-lg shadow text-text-gray p-4"
                      >
                        <FriendRequestRo request={request} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-lg shadow p-6 text-center mb-6">
                  <UserPlus size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Nicio cerere de conexiune
                  </h3>
                  <p className="text-gray-400">
                    Nu ai nicio cerere de conexiune în așteptare în acest
                    moment.{" "}
                  </p>
                  <p className="text-gray-500 mt-2">
                    Explorează conexiunile sugerate mai jos pentru a-ți extinde
                    rețeaua!
                  </p>
                </div>
              )}

              {connections?.data?.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Conexiunile mele
                  </h2>
                  <div className="flex flex-col gap-4">
                    {connections.data.map((connection) => (
                      <div
                        key={connection._id}
                        className="hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 border-gray-700 rounded-lg shadow p-4"
                      >
                        <UserCardRo user={connection} isConnection={true} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterRo />
    </>
  );
};

export default NetworkPage;
