import { useState } from "react";

const AboutSection = ({ userData, isOwnProfile, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState(userData.about || "");

  const handleSave = () => {
    setIsEditing(false);
    onSave({ about });
  };

  return (
    <div className="w-full mb-6 font-bold bg-[#0F111A] border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg text-text-gray font-poppins hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 p-6">
      <h2 className="text-xl font-bold text-white mb-4">About</h2>

      {isOwnProfile ? (
        isEditing ? (
          <>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full p-3 rounded-md bg-[#1a1d2e] hover:bg-[#202436] focus:bg-[#202436] focus:outline-none resize-none text-white placeholder:text-gray-500 transition-colors duration-200 min-h-[100px]"
              placeholder="Tell something about yourself..."
            />
            <button
              onClick={handleSave}
              className="w-auto mt-3 text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-500 text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-300 whitespace-pre-line">
              {userData.about || "Nothing written yet."}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm sm:text-base font-poppins font-bold text-yellow-ok hover:text-yellow-ok transition-all duration-300"
            >
              Edit
            </button>
          </>
        )
      ) : (
        <p className="text-sm text-gray-300 whitespace-pre-line">
          {userData.about || "Nothing written yet."}
        </p>
      )}
    </div>
  );
};

export default AboutSection;
