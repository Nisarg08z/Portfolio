import React from "react";

const SkillCard = ({ name, image }) => {
  return (
    <div className="w-full aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 object-contain mb-3 filter invert brightness-150"
      />
      <span className="text-sm sm:text-base font-medium text-center">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
