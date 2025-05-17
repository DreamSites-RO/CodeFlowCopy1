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
    <div className="w-full mb-6 font-bold bg-[#0F111A] border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg text-text-gray font-poppins hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 p-6">
      <h2 className="text-xl font-bold text-white mb-4">Educatie</h2>

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
            placeholder="Institutie"
            value={newEducation.school}
            onChange={(e) =>
              setNewEducation({ ...newEducation, school: e.target.value })
            }
            className="w-full p-3 bg-[#1a1d2e] text-white border border-gray-700 rounded-[10px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-ok transition"
          />
          <input
            type="text"
            placeholder="Specializare"
            value={newEducation.fieldOfStudy}
            onChange={(e) =>
              setNewEducation({ ...newEducation, fieldOfStudy: e.target.value })
            }
            className="w-full p-3 bg-[#1a1d2e] text-white border border-gray-700 rounded-[10px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-ok transition"
          />
          <input
            type="number"
            placeholder="Anul incepator"
            value={newEducation.startYear}
            onChange={(e) =>
              setNewEducation({ ...newEducation, startYear: e.target.value })
            }
            className="w-full p-3 bg-[#1a1d2e] text-white border border-gray-700 rounded-[10px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-ok transition"
          />
          <input
            type="number"
            placeholder="Anul final"
            value={newEducation.endYear}
            onChange={(e) =>
              setNewEducation({ ...newEducation, endYear: e.target.value })
            }
            className="w-full p-3 bg-[#1a1d2e] text-white border border-gray-700 rounded-[10px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-ok transition"
          />

          <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2">
            <button
              onClick={handleAddEducation}
              className="text-yellow-ok border-2 border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110 transition-all duration-300 py-2 px-4 rounded-[10px]"
            >
              Adauga
            </button>
            <button
              onClick={handleSave}
              className="text-yellow-ok border-2 border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110 transition-all duration-300 py-2 px-4 rounded-[10px]"
            >
              Salveaza
            </button>
          </div>
        </div>
      )}

      {isOwnProfile && !isEditing && (
        <div className="mt-6">
          <button
            onClick={() => setIsEditing(true)}
            className="text-yellow-ok hover:text-yellow-300 transition duration-300"
          >
            Modifica
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
