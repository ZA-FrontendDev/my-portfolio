import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  technologies,
  category,
  highlightText,
  statusType, // 'live' (green) or 'production' (purple)
  statusText, // "Live on App Stores" or "Production App"
}) => {
  return (
    <div className="bg-[#13131a] border border-gray-800 rounded-2xl overflow-hidden group flex flex-col h-full">
      {/* Top Image Section with Overlays */}
      <div
        className="h-52 md:h-64 relative group w-full"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* --- NEW: Top Left Status Badge --- */}
        {statusText && (
          <div
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full flex items-center gap-1.5 z-20 bg-[#13131a]/90 backdrop-blur-sm border ${
              statusType === "live"
                ? "border-emerald-800/60 text-emerald-500"
                : "border-purple-800/60 text-purple-400"
            }`}
          >
            {statusType === "live" ? (
              // Mobile phone icon for Live
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            ) : (
              // Folder/Web icon for Production
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            )}
            <span className="text-[12px] font-medium">{statusText}</span>
          </div>
        )}

        {/* Hover Overlay with Git and Preview links */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 z-10">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* Content Section (Same as before) */}
      <div className="text-white p-6 flex flex-col flex-grow">
        {category && (
          <div className="mb-4">
            <span className="text-[12px] font-bold tracking-wider text-purple-400 bg-purple-900/20 px-3 py-1 rounded-full uppercase">
              {category}
            </span>
          </div>
        )}

        <h5 className="text-xl font-bold mb-3">{title}</h5>
        <p className="text-[#8b949e] text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {highlightText && (
          <div className="flex items-start gap-2 mb-5">
            <svg
              className="w-4 h-4 text-emerald-500 mt-[2px] flex-shrink-0"
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
            <span className="text-emerald-500 text-sm font-medium leading-tight">
              {highlightText}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 text-xs font-medium text-gray-300 bg-[#21262d] border border-gray-700 rounded-full"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
