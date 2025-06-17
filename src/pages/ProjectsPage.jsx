import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen px-6 py-10 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold px-8 py-3 rounded-lg mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
