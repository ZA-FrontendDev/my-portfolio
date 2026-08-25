"use client";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const workExperiences = [
  {
    company: "CollabeEZ",
    position: "Frontend Developer",
    duration: "June 2023 - Present",
    description: [
      "Develop cross-platform mobile and web applications using React.js and React Native",
      "Build responsive, scalable UI and integrate RESTful APIs, managing state, authentication, and data flow",
      "Developed frontend applications for multiple production-level projects independently, while collaborating with backend developers on API integration, including:",
      "LMS Platforms: EmanTime (Quran learning) & Tuition Highway (student tuition platform)",
      "School Management System (Convex-based): Worked on dashboards, attendance, and API integrations",
      "Diabmart (E-commerce App): Implemented product flows, UI components, and order-related features",
      "AI Calling Platform: Developed React.js frontend for sales and customer support automation",
      "Implemented real-time features using Jitsi Meet for virtual classrooms (Zoom-like experience)",
    ],
  },
  {
    company: "TeknWeb",
    position: "Mid-Level WordPress Developer",
    duration: "Apr 2022 - May 2023",
    description: [
      "Designed and developed responsive websites using WordPress based on client requirements",
      "Improved website performance, responsiveness, and UI/UX.",
      "Collaborated directly with clients to gather requirements and ensure project delivery aligned with expectations.",
      "Customized themes and plugins to deliver tailored business solutions.",
    ],
  },
  {
    company: "A2zcreatorz",
    position: "WordPress Developer",
    duration: "Dec 2020 - Dec 2021",
    description: [
      "Designed and developed websites from scratch using WordPress.",
      "Translated client requirements into functional and visually appealing websites.",
      "Worked closely with team lead and participated in client meetings for requirement gathering and project updates.",
    ],
  },
];

function WorkExperience({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="relative pl-8 sm:pl-12 group"
    >
      {/* Timeline line */}
      <span
        className={`absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b ${
          index === 0
            ? "from-pink-custom via-pink-custom/40"
            : index === 1
            ? "from-purple-custom via-purple-custom/40"
            : "from-blue-500 via-blue-500/40"
        } to-transparent`}
      />
      {/* Timeline dot */}
      <span
        className={`absolute left-1.5 sm:left-3.5 top-2 w-4 h-4 rounded-full bg-gradient-to-br ${
          index === 0
            ? "from-pink-custom to-purple-custom shadow-lg shadow-pink-custom/40"
            : index === 1
            ? "from-purple-custom to-blue-500 shadow-lg shadow-purple-custom/40"
            : "from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/40"
        } ring-4 ring-[#0a0a0f] group-hover:scale-110 transition-transform duration-300`}
      />

      <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-pink-custom/40 hover:bg-white/[0.05] transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-custom to-purple-custom bg-clip-text text-transparent">
              {experience.company}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-300">
              <span className="inline-flex items-center gap-1.5">
                <BriefcaseIcon className="w-4 h-4 text-pink-custom" />
                {experience.position}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-400">
                <CalendarIcon className="w-4 h-4 text-purple-custom" />
                {experience.duration}
              </span>
            </div>
          </div>
        </div>

        <ul className="space-y-2 text-[#c9d1d9] text-sm sm:text-[15px] leading-relaxed">
          {experience.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              className="flex gap-3"
            >
              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-pink-custom to-purple-custom" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28" id="experience">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-12"
      >
        <span className="text-pink-custom font-mono text-sm">02.</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-custom to-purple-custom">
          Work Experience
        </h2>
        <span className="flex-1 h-px bg-gradient-to-r from-purple-custom/40 to-transparent ml-2" />
      </motion.div>

      <div className="space-y-10 max-w-5xl">
        {workExperiences.map((experience, index) => (
          <WorkExperience key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}
