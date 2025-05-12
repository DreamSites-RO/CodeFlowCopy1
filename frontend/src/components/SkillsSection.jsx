import { X } from "lucide-react";
import { useState } from "react";

const SkillsSection = ({ userData, isOwnProfile, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState(userData.skills || []);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSave = () => {
    onSave({ skills });
    setIsEditing(false);
  };

  return (
    <div className="w-full mb-6 font-bold bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-lg shadow-lg overflow-hidden text-white font-poppins p-6">
      <h2 className="text-xl font-bold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center bg-[#1A1D2E] text-sm text-gray-300 px-3 py-1 rounded-full"
          >
            {skill}
            {isEditing && (
              <button
                onClick={() => handleDeleteSkill(skill)}
                className="ml-2 text-red-500 hover:text-red-400 transition"
              >
                <X size={14} />
              </button>
            )}
          </span>
        ))}
      </div>

      {isEditing && (
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="New Skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="w-full sm:w-auto flex-grow p-3 bg-[#1a1d2e] text-white border border-gray-700 rounded-[10px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-ok transition"
          />
          <button
            onClick={handleAddSkill}
            className="text-yellow-ok border-2 border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110 transition-all duration-300 py-2 px-4 rounded-[10px]"
          >
            Add Skill
          </button>
        </div>
      )}

      {isOwnProfile && (
        <div className="mt-6">
          {isEditing ? (
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <button
                onClick={handleSave}
                className="text-yellow-ok border-2 border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110 transition-all duration-300 py-2 px-4 rounded-[10px]"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-yellow-ok hover:text-yellow-300 transition duration-300"
            >
              Edit Skills
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
