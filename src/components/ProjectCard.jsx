import React from "react";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden p-4">
      <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-3">{project.name}</h3>
      <button
        className="bg-purple-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-purple-600 transition"
        onClick={() => onViewDetails(project)}
      >
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;
