import React from "react";

const SkillCard = ({ name, icon: Icon }) => {
  return (
    <div className="w-full aspect-square bg-[#1a1a1a] border border-white/10 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:scale-105 transition-transform duration-300">
      <Icon className="text-white mb-3" size={40} />
      <span className="text-sm sm:text-base font-medium text-gray-300 text-center">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
