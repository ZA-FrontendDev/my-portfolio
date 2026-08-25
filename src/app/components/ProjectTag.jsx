"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`relative px-5 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 ${
        isSelected ? "text-white" : "text-[#ADB7BE] hover:text-white"
      }`}
    >
      {isSelected && (
        <motion.span
          layoutId="project-tag-pill"
          className="absolute inset-0 bg-gradient-to-r from-pink-custom to-purple-custom rounded-full shadow-lg shadow-pink-custom/30"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10">{name}</span>
    </button>
  );
};

export default ProjectTag;
