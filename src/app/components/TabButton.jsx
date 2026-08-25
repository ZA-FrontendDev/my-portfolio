"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab} className="relative">
      <p
        className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
          active ? "text-white" : "text-[#ADB7BE] hover:text-white"
        }`}
      >
        {active && (
          <motion.span
            layoutId="about-tab-pill"
            className="absolute inset-0 bg-gradient-to-r from-pink-custom to-purple-custom rounded-full shadow-lg shadow-pink-custom/30"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative">{children}</span>
      </p>
    </button>
  );
};

export default TabButton;
