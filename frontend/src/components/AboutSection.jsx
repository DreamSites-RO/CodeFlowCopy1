import { useState } from "react";

const AboutSection = ({ userData, isOwnProfile, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState(userData.about || "");

  const handleSave = () => {
    setIsEditing(false);
    onSave({ about });
  };

  return (
    <div className="w-full mb-6 bg-[#0F111A] border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg text-text-gray font-poppins hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 p-6">
      <h2 className="text-xl font-bold text-white mb-4">About</h2>

      {isOwnProfile ? (
        isEditing ? (
          <>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded resize-none placeholder-gray-400"
              rows="5"
              placeholder="Tell something about yourself..."
            />
            <button
              onClick={handleSave}
              className="mt-3 bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300"
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
              className="mt-3 text-primary hover:text-primary-dark transition duration-300 font-medium"
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
