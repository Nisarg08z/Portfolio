import React,{useEffect} from "react";
import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";
import { useLocation } from "react-router-dom";

const SkillsPage = () => {
   const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div id="skills" className="min-h-screen flex justify-center items-start pt-20 px-4">
      <div className="max-w-7xl w-full flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold px-8 py-3 rounded-lg mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 w-full">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
