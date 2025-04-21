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
    <div className="w-full mb-6 bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-lg shadow-lg overflow-hidden text-white font-poppins p-6">
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
        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="New Skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="flex-grow p-2 bg-[#1D1F33] text-white border border-gray-600 rounded-l placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleAddSkill}
            className="bg-primary text-white px-4 rounded-r hover:bg-primary-dark transition duration-300"
          >
            Add
          </button>
        </div>
      )}

      {isOwnProfile && (
        <div className="mt-6">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-primary hover:text-primary-dark transition duration-300"
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
