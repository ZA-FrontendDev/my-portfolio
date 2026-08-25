"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  technologies,
  category,
  highlightText,
  statusType,
  statusText,
}) => {
  const isInternal = (url) => !url || url === "/";
  const gitDisabled = isInternal(gitUrl);
  const previewDisabled = isInternal(previewUrl);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className="group relative bg-[#13131a] border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:border-pink-custom/40 transition-colors duration-500"
    >
      {/* Gradient border glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-custom/30 via-transparent to-purple-custom/30 blur-sm" />

      {/* Top Image Section */}
      <div
        className="relative h-52 md:h-60 w-full overflow-hidden"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0f]/20 group-hover:bg-[#0a0a0f]/0 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-transparent" />

        {/* Status Badge */}
        {statusText && (
          <div
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full flex items-center gap-1.5 z-20 bg-[#0a0a0f]/80 backdrop-blur-md border ${
              statusType === "live"
                ? "border-emerald-500/40 text-emerald-400"
                : "border-purple-500/40 text-purple-400"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                statusType === "live" ? "bg-emerald-400" : "bg-purple-400"
              }`} />
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                statusType === "live" ? "bg-emerald-500" : "bg-purple-500"
              }`} />
            </span>
            <span className="text-[11px] font-semibold tracking-wide">{statusText}</span>
          </div>
        )}

        {/* Hover Overlay with Git and Preview links */}
        <div className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-sm hidden group-hover:flex items-center justify-center gap-3 z-10 transition-opacity duration-500">
          {!gitDisabled && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-12 w-12 border-2 rounded-full border-white/30 hover:border-white hover:bg-white/10 text-white/80 hover:text-white transition-all"
                aria-label="View source code"
              >
                <CodeBracketIcon className="h-5 w-5" />
              </Link>
            </motion.div>
          )}
          {!previewDisabled && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-12 w-12 border-2 rounded-full border-white/30 hover:border-white hover:bg-white/10 text-white/80 hover:text-white transition-all"
                aria-label="Live preview"
              >
                <EyeIcon className="h-5 w-5" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative text-white p-6 flex flex-col flex-grow">
        {category && (
          <div className="mb-4">
            <span className="text-[11px] font-bold tracking-[0.15em] text-purple-300 bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-500/30 px-3 py-1 rounded-full uppercase">
              {category}
            </span>
          </div>
        )}

        <h5 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-custom group-hover:to-purple-custom transition-all">
          {title}
        </h5>

        <p className="text-[#8b949e] text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {highlightText && (
          <div className="flex items-start gap-2 mb-5 p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
            <svg
              className="w-4 h-4 text-emerald-400 mt-[2px] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-emerald-400 text-sm font-medium leading-tight">
              {highlightText}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto mb-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-2.5 py-1 text-[11px] font-medium text-gray-300 bg-white/[0.04] border border-white/10 rounded-full hover:border-pink-custom/40 hover:text-white transition-colors"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
