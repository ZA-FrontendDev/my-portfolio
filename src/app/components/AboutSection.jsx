"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence, useInView } from "framer-motion";

const SKILLS_DATA = [
  { name: "React Js", category: "frontend" },
  { name: "React Native", category: "mobile" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node Js", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "PostgreSql", category: "database" },
  { name: "Express js", category: "backend" },
  { name: "WordPress", category: "cms" },
  { name: "Shopify", category: "ecommerce" },
  { name: "Bootstrap", category: "frontend" },
  { name: "UI/UX (Figma)", category: "design" },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-2.5">
        {SKILLS_DATA.map((skill, index) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: index * 0.04,
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -3, scale: 1.04 }}
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-200 bg-white/[0.04] border border-white/10 hover:border-pink-custom/50 hover:bg-pink-custom/10 hover:text-white transition-all cursor-default"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative pl-6 py-2 border-l-2 border-gradient-to-b from-pink-custom to-purple-custom"
          style={{ borderImage: "linear-gradient(180deg, #da2b7c, #c27df1) 1" }}
        >
          <span className="absolute -left-[7px] top-3 w-3 h-3 rounded-full bg-gradient-to-br from-pink-custom to-purple-custom shadow-lg shadow-pink-custom/40" />
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Bachelor of Science (B.S.) in Computer Science
          </h3>
          <div className="text-gray-300 mt-1">Virtual University</div>
          <div className="text-gray-500 text-sm mt-1">
            August 2023 - Present
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative pl-6 py-2 border-l-2"
          style={{ borderImage: "linear-gradient(180deg, #c27df1, #6d6df1) 1" }}
        >
          <span className="absolute -left-[7px] top-3 w-3 h-3 rounded-full bg-gradient-to-br from-purple-custom to-blue-500 shadow-lg shadow-purple-custom/40" />
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Intermediate in Pre-Engineering
          </h3>
          <div className="text-gray-300 mt-1">Army Public College - Faisal</div>
          <div className="text-gray-500 text-sm mt-1">
            July 2018 - June 2020
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="relative p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-pink-custom/40 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-custom/0 to-purple-custom/0 group-hover:from-pink-custom/5 group-hover:to-purple-custom/5 transition-all duration-500" />
          <div className="relative flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                HTML, CSS & PHP
              </h3>
              <div className="text-gray-400 text-sm mt-1">Aptech</div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
              Completed
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="relative p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-custom/40 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-custom/0 to-purple-custom/0 group-hover:from-pink-custom/5 group-hover:to-purple-custom/5 transition-all duration-500" />
          <div className="relative flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Web Development Bootcamp
              </h3>
              <div className="text-gray-400 text-sm mt-1">Udemy</div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
              Completed
            </span>
          </div>
        </motion.div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-20 md:py-28" id="about" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-10">
          <span className="text-pink-custom font-mono text-sm">01.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-custom to-purple-custom">
            About Me
          </h2>
          <span className="flex-1 h-px bg-gradient-to-r from-purple-custom/40 to-transparent ml-2" />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-pink-custom/30 to-purple-custom/30 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/about-image.png"
              width={635}
              height={500}
              alt="About me image"
              className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col h-full"
        >
          <p className="text-[#c9d1d9] text-base lg:text-lg leading-relaxed mb-5">
            I&apos;m a Frontend Developer specializing in building responsive
            and visually engaging interfaces using React and React Native. I
            focus on clean UI/UX and seamless integration of RESTful APIs and
            third-party services for efficient data flow and real-time
            functionality. I also have experience with Convex for real-time
            backend integration.
          </p>

          <p className="text-[#c9d1d9] text-base lg:text-lg leading-relaxed">
            Alongside frontend development, I am currently expanding my
            expertise in the MERN stack (MongoDB, Express, React, Node.js) to
            strengthen my backend development and database management skills. My
            commitment to continuous learning keeps me aligned with the latest
            frontend and backend technologies, enabling me to design and deliver
            scalable, high-quality full-stack solutions.
          </p>

          <div className="flex flex-row flex-wrap gap-1 mt-8 p-1 rounded-full bg-white/[0.04] border border-white/10 w-fit">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {TAB_DATA.find((t) => t.id === tab).content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
