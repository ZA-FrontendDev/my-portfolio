"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, isActive, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 block ${
        isActive
          ? "text-white"
          : "text-[#ADB7BE] hover:text-white"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="navbar-pill"
          className="absolute inset-0 bg-gradient-to-r from-pink-custom/30 to-purple-custom/30 rounded-full border border-pink-custom/40"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative z-10">{title}</span>
    </Link>
  );
};

export default NavLink;
