import { School, X } from "lucide-react";
import { useState } from "react";

const EducationSection = ({ userData, isOwnProfile, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [educations, setEducations] = useState(userData.education || []);
  const [newEducation, setNewEducation] = useState({
    school: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
  });

  const handleAddEducation = () => {
    if (
      newEducation.school &&
      newEducation.fieldOfStudy &&
      newEducation.startYear
    ) {
      setEducations([...educations, newEducation]);
      setNewEducation({
        school: "",
        fieldOfStudy: "",
        startYear: "",
        endYear: "",
      });
    }
  };

  const handleDeleteEducation = (id) => {
    setEducations(educations.filter((edu) => edu._id !== id));
  };

  const handleSave = () => {
    onSave({ education: educations });
    setIsEditing(false);
  };

  return (
    <div className="w-full mb-6 bg-[#0F111A] border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg text-text-gray font-poppins hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 p-6">
      <h2 className="text-xl font-bold text-white mb-4">Education</h2>

      {educations.map((edu) => (
        <div key={edu._id} className="mb-4 flex justify-between items-start">
          <div className="flex items-start">
            <School size={20} className="text-gray-400 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold text-white">{edu.fieldOfStudy}</h3>
              <p className="text-sm text-gray-400">{edu.school}</p>
              <p className="text-xs text-gray-500">
                {edu.startYear} – {edu.endYear || "Present"}
              </p>
            </div>
          </div>
          {isEditing && (
            <button
              onClick={() => handleDeleteEducation(edu._id)}
              className="text-red-500 hover:text-red-400 transition"
            >
              <X size={20} />
            </button>
          )}
        </div>
      ))}

      {isEditing && (
        <div className="mt-6 space-y-3">
          <input
            type="text"
            placeholder="School"
            value={newEducation.school}
            onChange={(e) =>
              setNewEducation({ ...newEducation, school: e.target.value })
            }
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Field of Study"
            value={newEducation.fieldOfStudy}
            onChange={(e) =>
              setNewEducation({ ...newEducation, fieldOfStudy: e.target.value })
            }
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded placeholder-gray-400"
          />
          <input
            type="number"
            placeholder="Start Year"
            value={newEducation.startYear}
            onChange={(e) =>
              setNewEducation({ ...newEducation, startYear: e.target.value })
            }
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded placeholder-gray-400"
          />
          <input
            type="number"
            placeholder="End Year"
            value={newEducation.endYear}
            onChange={(e) =>
              setNewEducation({ ...newEducation, endYear: e.target.value })
            }
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded placeholder-gray-400"
          />

          <button
            onClick={handleAddEducation}
            className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300"
          >
            Add Education
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
              Edit Education
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EducationSection;
