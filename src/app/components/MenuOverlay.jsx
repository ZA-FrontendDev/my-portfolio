"use client";
import React from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -10,
      transition: { delay: i * 0.04, duration: 0.2 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="md:hidden overflow-hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/10"
    >
      <ul className="flex flex-col items-stretch py-4 px-6 gap-1">
        {links.map((link, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div onClick={() => setNavbarOpen(false)}>
              <NavLink href={link.path} title={link.title} />
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
