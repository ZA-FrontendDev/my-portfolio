"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1400px] w-full">
        {/* Decorative blurred blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-pink-custom/20 rounded-full blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-40 -right-20 w-72 h-72 bg-purple-custom/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-1 sm:grid-cols-12 gap-8 items-center"
        >
          <div className="col-span-8 place-self-center text-center sm:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-white mt-6 mb-4 text-3xl sm:text-3xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-custom via-purple-custom to-pink-custom animate-gradient">
                Hello, I&apos;m
              </span>
              <span className="block mt-2 min-h-[1.1em]">
                <TypeAnimation
                  sequence={[
                    "Muhammad Zain Ahsan",
                    2000,
                    "Mobile App Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Freelancer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-white"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#ADB7BE] text-base sm:text-lg mb-8 max-w-2xl mx-auto sm:mx-0 leading-relaxed"
            >
              I build responsive, scalable, and visually engaging interfaces
              with React & React Native, focused on clean UI/UX and seamless API
              integrations.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start"
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-pink-custom to-purple-custom shadow-lg shadow-pink-custom/30 hover:shadow-pink-custom/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-custom to-pink-custom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <PaperAirplaneIcon className="relative w-5 h-5 -rotate-12 group-hover:rotate-0 transition-transform" />
                <span className="relative">Hire Me</span>
              </Link>

              <Link
                href="/images/zain_resume.docx"
                download="Muhammad_Zain_Ahsan_CV.docx"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/15 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
              >
                <ArrowDownTrayIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-5 justify-center sm:justify-start text-gray-400"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
              <Link
                href="https://github.com/ZA-FrontendDev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/in/za-mern"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="col-span-4 place-self-center mt-6 lg:mt-0 flex justify-center"
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-custom to-purple-custom rounded-full blur-2xl opacity-40 animate-glow" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-custom via-purple-custom to-pink-custom animate-gradient opacity-90" />
              <div className="relative p-1 rounded-full">
                <Image
                  src="/images/mine.jpeg"
                  alt="Zain Ahsan"
                  width={300}
                  height={300}
                  className="relative rounded-full ring-4 ring-[#0a0a0f] object-cover w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 animate-float"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 px-3 py-1.5 rounded-full bg-[#0a0a0f]/80 backdrop-blur border border-pink-custom/40 text-xs font-medium text-white shadow-xl"
              >
                <span className="text-pink-custom">●</span> MERN Stack
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="hidden md:flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-gray-500/60 rounded-full flex items-start justify-center p-1"
          >
            <span className="block w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
