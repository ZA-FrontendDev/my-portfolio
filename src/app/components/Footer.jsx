"use client";
import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="footer relative border-t border-white/10 bg-[#0a0a0f]/60 backdrop-blur-md text-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-custom/40 to-transparent" />
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-pink-custom to-purple-custom font-extrabold text-white text-sm">
            Z
          </span>
          <span className="font-semibold text-white tracking-tight">
            Zain<span className="text-pink-custom">.</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-sm text-center"
        >
          © 2024. All rights reserved. Made with{" "}
          <span className="text-pink-custom animate-pulse">❤</span> by{" "}
          <span className="bg-gradient-to-r from-pink-custom to-purple-custom bg-clip-text text-transparent font-semibold">
            Zain Ahsan
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 text-xs text-gray-500"
        >
          <Link
            href="https://github.com/ZA-FrontendDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-custom transition-colors"
          >
            GitHub
          </Link>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <Link
            href="https://linkedin.com/in/za-mern"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-custom transition-colors"
          >
            LinkedIn
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
