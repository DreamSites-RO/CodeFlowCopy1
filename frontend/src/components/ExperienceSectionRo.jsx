import { Briefcase, X } from "lucide-react";
import { useState } from "react";
import { formatDate } from "../utils/dateUtils";

const ExperienceSection = ({ userData, isOwnProfile, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState(userData.experience || []);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    currentlyWorking: false,
  });

  const handleAddExperience = () => {
    if (
      newExperience.title &&
      newExperience.company &&
      newExperience.startDate
    ) {
      setExperiences([...experiences, newExperience]);

      setNewExperience({
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        currentlyWorking: false,
      });
    }
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp._id !== id));
  };

  const handleSave = () => {
    onSave({ experience: experiences });
    setIsEditing(false);
  };

  const handleCurrentlyWorkingChange = (e) => {
    setNewExperience({
      ...newExperience,
      currentlyWorking: e.target.checked,
      endDate: e.target.checked ? "" : newExperience.endDate,
    });
  };

  return (
    <div className="w-full mb-6 font-bold bg-[#0F111A] border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg text-text-gray font-poppins hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 p-6">
      <h2 className="text-xl font-bold text-white mb-4">Experiente</h2>

      {experiences.map((exp, index) => (
        <div
          key={exp._id || index}
          className="mb-4 flex justify-between items-start"
        >
          <div className="flex items-start">
            <Briefcase size={20} className="text-gray-400 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold text-white">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="text-xs text-gray-500">
                {formatDate(exp.startDate)} –{" "}
                {exp.endDate ? formatDate(exp.endDate) : "Present"}
              </p>
              <p className="text-sm text-gray-300 mt-1 whitespace-pre-line">
                {exp.description}
              </p>
            </div>
          </div>
          {isEditing && (
            <button
              onClick={() => handleDeleteExperience(exp._id)}
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
            placeholder="Titlu"
            value={newExperience.title}
            onChange={(e) =>
              setNewExperience({ ...newExperience, title: e.target.value })
            }
            className="w-full p-2 bg-[#1a1d2e] text-white border border-gray-600 rounded placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Companie"
            value={newExperience.company}
            onChange={(e) =>
              setNewExperience({ ...newExperience, company: e.target.value })
            }
            className="w-full p-2 bg-[#1a1d2e] text-white border border-gray-600 rounded placeholder-gray-400"
          />
          <input
            type="date"
            value={newExperience.startDate}
            onChange={(e) =>
              setNewExperience({ ...newExperience, startDate: e.target.value })
            }
            className="w-full p-2 bg-[#1a1d2e] text-white border border-gray-600 rounded"
          />

          <div className="flex items-center text-sm text-white">
            <input
              type="checkbox"
              id="currentlyWorking"
              checked={newExperience.currentlyWorking}
              onChange={handleCurrentlyWorkingChange}
              className="mr-2 accent-primary"
            />
            <label htmlFor="currentlyWorking">Momentan lucrez aici</label>
          </div>

          {!newExperience.currentlyWorking && (
            <input
              type="date"
              value={newExperience.endDate}
              onChange={(e) =>
                setNewExperience({ ...newExperience, endDate: e.target.value })
              }
              className="w-full p-2 bg-[#1a1d2e] text-white border border-gray-600 rounded"
            />
          )}

          <textarea
            placeholder="Descriere"
            value={newExperience.description}
            onChange={(e) =>
              setNewExperience({
                ...newExperience,
                description: e.target.value,
              })
            }
            rows="4"
            className="w-full p-2 bg-[#1a1d2e] text-white border border-gray-600 rounded placeholder-gray-400 resize-none"
          />

          <div className="flex font-poppins flex-col sm:flex-row justify-between gap-3 mt-4">
            <button
              onClick={handleAddExperience}
              className="text-yellow-ok border-2 font-poppins font-bold border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110 transition-all duration-300 py-2 px-4 rounded-[10px]"
            >
              Adauga
            </button>
            <button
              onClick={handleSave}
              className="text-yellow-ok border-2 font-poppins font-bold border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 hover:brightness-110 transition-all duration-300 py-2 px-4 rounded-[10px]"
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
            className="text-yellow-ok hover:text-yellow-ok transition-all duration-300"
          >
            Modifica
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
