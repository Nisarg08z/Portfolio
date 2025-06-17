import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
  onClick={() => navigate(`/project/${project.id}`)}
  className="cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:shadow-lg transition duration-300"
>
  <div className="w-full aspect-video overflow-hidden rounded-md mb-4">
    <img
      src={project.thumbnail}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
  <p className="text-sm text-gray-300">{project.smalldescription}</p>
</div>

  );
};

export default ProjectCard;
