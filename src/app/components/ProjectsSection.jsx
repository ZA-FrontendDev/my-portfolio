"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Native Job Funda App",
    description:
      "A user-friendly app designed to simplify the job search process.Browse jobs across various industries and locations. Advanced filters for job type, location with a powerful search bar to find the perfect match quickly. View detailed job descriptions, qualifications, and about company.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ZA-FrontendDev/Job-funda",
    previewUrl:
      "https://drive.google.com/file/d/17j75ICr_NhTnQ8gCFnU5jEMTbLAWXtmf/view?usp=sharing",
    technologies: [
      {
        name: "React",
        icon: "/images/react.png",
        color: "bg-gray-500",
      },
      {
        name: "JavaScript",
        icon: "/images/JavaScript.png",
        color: "bg-gray-500",
      },
      { name: "CSS", icon: "/images/css.png", color: "bg-gray-500" },
    ],
  },
  {
    id: 2,
    title: "React Native LMS App",
    description:
      "This LMS application is developed using React Native and is designed to simplify the educational experience for students and teachers.Integrated Jitsi Meet for seamless video conferencing and online classes, enabling real-time interaction between students and teachers.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: [
      {
        name: "React",
        icon: "/images/react.png",
        color: "bg-gray-500",
      },
      {
        name: "JavaScript",
        icon: "/images/JavaScript.png",
        color: "bg-gray-500",
      },
      {
        name: "TypeScript",
        icon: "/images/typescript.png",
        color: "bg-gray-500",
      },
      {
        name: "CSS",
        icon: "/images/css.png",
        color: "bg-gray-500",
      },
    ],
  },
  {
    id: 3,
    title: "React Car Showcase App",
    description:
      "A modern web application for exploring cars displays a wide range of cars fetched dynamically using APIs.Filter cars by make, model, year, and price to find your ideal vehicle.Explore car specifications, features, and images in detail.Its responsive web application using React , Next and Tailwind CSS.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZA-FrontendDev/car-showcase",
    previewUrl: "https://za-cars-showcase.vercel.app/",
    technologies: [
      {
        name: "React",
        icon: "/images/react.png",
        color: "bg-gray-500",
      },
      {
        name: "Next",
        icon: "/images/nextjs.png",
        color: "bg-gray-500",
      },
      {
        name: "JavaScript",
        icon: "/images/JavaScript.png",
        color: "bg-gray-500",
      },
      {
        name: "TypeScript",
        icon: "/images/typescript.png",
        color: "bg-gray-500",
      },
      {
        name: "Tailwind",
        icon: "/images/Tailwind.png",
        color: "bg-gray-500",
      },
    ],
  },
  {
    id: 4,
    title: "React Invoice Creator App",
    description:
      "A web application designed for creating and managing invoices efficiently.Generate professional invoices with customizable fields.View and manage a list of created invoices for easy tracking.Users stay logged in securely using local storage for session persistence.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZA-FrontendDev/invoice-system",
    previewUrl: "https://teknweb-invoice-system.vercel.app/",
    technologies: [
      {
        name: "React",
        icon: "/images/react.png",
        color: "bg-gray-500",
      },
      {
        name: "JavaScript",
        icon: "/images/JavaScript.png",
        color: "bg-gray-500",
      },
      { name: "CSS", icon: "/images/css.png", color: "bg-gray-500" },
    ],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-pink-custom to-purple-custom bg-clip-text text-transparent mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
