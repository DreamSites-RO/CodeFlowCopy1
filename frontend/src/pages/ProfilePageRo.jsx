import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { axiosInstance } from "../lib/axios";

import ExperienceSectionRo from "../components/ExperienceSectionRo";
import EducationSectionRo from "../components/EducationSectionRo";
import ProfileHeaderRo from "../components/ProfileHeaderRo";
import SkillsSectionRo from "../components/SkillsSectionRo";
import AboutSectionRo from "../components/AboutSectionRo";

import FooterRo from "../components/layout/FooterRo";
import NavbarRo from "../components/layout/NavbarRo";

const ProfilePage = () => {
  const { username } = useParams();
  const queryClient = useQueryClient();

  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => axiosInstance.get("/auth/me").then((res) => res.data),
  });

  const { data: userProfile, isLoading: isUserProfileLoading } = useQuery({
    queryKey: ["userProfile", username],
    queryFn: () => axiosInstance.get(`/users/${username}`),
  });

  const { mutate: updateProfile } = useMutation({
    mutationFn: async (updatedData) => {
      await axiosInstance.put("/users/profile", updatedData);
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries(["userProfile", username]);
    },
  });

  if (isLoading || isUserProfileLoading) return null;

  const isOwnProfile = authUser.username === userProfile.data.username;
  const userData = isOwnProfile ? authUser : userProfile.data;

  const handleSave = (updatedData) => {
    updateProfile(updatedData);
  };

  return (
    <>
      <NavbarRo />

      <div className="max-w-4xl mx-auto p-4">
        <ProfileHeaderRo
          userData={userData}
          isOwnProfile={isOwnProfile}
          onSave={handleSave}
        />
        <AboutSectionRo
          userData={userData}
          isOwnProfile={isOwnProfile}
          onSave={handleSave}
        />
        <ExperienceSectionRo
          userData={userData}
          isOwnProfile={isOwnProfile}
          onSave={handleSave}
        />
        <EducationSectionRo
          userData={userData}
          isOwnProfile={isOwnProfile}
          onSave={handleSave}
        />
        <SkillsSectionRo
          userData={userData}
          isOwnProfile={isOwnProfile}
          onSave={handleSave}
        />
      </div>
      <FooterRo />
    </>
  );
};
export default ProfilePage;
