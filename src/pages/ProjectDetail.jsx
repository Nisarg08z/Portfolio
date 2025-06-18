import React, { useRef, useState, useEffect } from "react";
import { projects } from "../data/projects";
import { useParams } from "react-router-dom";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef();

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen justify-center mx-auto p-6 scrollbar-hide">
      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="fixed top-5 right-5 z-50 text-white hover:text-red-400 transition"
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
            className="rounded-xl max-h-[80vh] max-w-[90vw] object-contain shadow-2xl"
          />
        </div>
      )}

      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12 p-6">
        {/* Left: Bigger Image - Centered */}
        <div className="w-full flex justify-center items-center px-4">
          <img
            src={project.thumbnail}
            alt="thumbnail"
            className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300"
          />
        </div>


        {/* Right: Links - Centered Vertically */}
        <div className="w-full flex justify-center px-4">
          <div className="flex flex-col justify-center items-center gap-6 text-sm sm:text-base p-6 backdrop-blur-lg w-full max-w-md">

            {/* GitHub */}
            <div className="w-full flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-white/80 font-semibold">
                <span className="text-blue-400">🔗</span> GitHub
              </span>
              {project.git ? (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View Code
                </a>
              ) : (
                <span className="text-gray-400">Not Available</span>
              )}
            </div>

            {/* YouTube */}
            <div className="w-full flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-white/80 font-semibold">
                <span className="text-red-400">▶️</span> YouTube
              </span>
              {project.youtube ? (
                <a
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Watch Demo
                </a>
              ) : (
                <span className="text-gray-400">Not Available</span>
              )}
            </div>

            {/* Live Demo */}
            <div className="w-full flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-white/80 font-semibold">
                <span className="text-green-400">🌐</span> Live Demo
              </span>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Visit Site
                </a>
              ) : (
                <span className="text-gray-400">Not Available</span>
              )}
            </div>

            {/* Status */}
            <span className="mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white text-xs font-semibold shadow-lg tracking-wide uppercase">
              {project.status}
            </span>
          </div>
        </div>


      </div>


      {/* Scroll Buttons + Media */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ArrowLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-8 scroll-smooth scrollbar-hide"
        >
          {project.videos.map((video, i) => (
            <video
              key={`video-${i}`}
              src={video}
              controls
              className="snap-center flex-shrink-0 w-full sm:w-[90vw] md:w-[720px] max-h-[70vh] rounded-lg shadow object-contain bg-black"
            />
          ))}
          {project.images.map((img, i) => (
            <img
              key={`img-${i}`}
              src={img}
              alt={`img-${i}`}
              onClick={() => setSelectedImage(img)}
              className="snap-center flex-shrink-0 w-full sm:w-[90vw] md:w-[720px] max-h-[70vh] rounded-lg shadow object-contain bg-black cursor-pointer hover:opacity-90 transition"
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Description and Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white/90">📝 Project Description</h3>
          <p className="text-gray-300">{project.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white/90">🛠️ Tools Used</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.tools.map((tool, idx) => {
              const match = skills.find((s) => s.name.toLowerCase() === tool.toLowerCase());
              return (
                <SkillCard
                  key={idx}
                  name={tool}
                  icon={match?.icon || (() => <span className="text-white text-lg">{tool}</span>)}
                />
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectDetail;
