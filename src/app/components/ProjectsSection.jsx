"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DiabMart Ecommerce App",
    category: "E-COMMERCE & RETAIL", // <-- New
    highlightText: "Complete scalable mobile shopping experience",
    statusType: "live",
    statusText: "Live on Play / App Stores",
    description:
      "Developed a full-featured eCommerce mobile application using React Native, where I built the complete UI and integrated RESTful APIs for dynamic product listings...",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ZA-FrontendDev",
    previewUrl:
      "https://drive.google.com/file/d/1nJCeZRse3yJcQN4kjFyHjQtqII9vQgEc/view?usp=sharing",
    technologies: [
      { name: "React Native" }, // No icons needed anymore!
      { name: "JavaScript" },
      { name: "CSS" },
      { name: "+1" }, // You can easily add a "+ number" badge like in the image
    ],
  },
  {
    id: 2,
    title: "React Q9 labs AI Dashboard",
    description:
      "Developed an AI-powered calling platform for sales and customer support using React and TypeScript. I designed and implemented the complete frontend UI, including agent management dashboards, prompt configuration screens, and workflow interfaces for handling AI-driven conversations. The interface was built with a focus on clean architecture, reusable components, and responsive design to ensure scalability and a smooth user experience.",
    image: "/images/projects/5.png",
    category: "AI Calling Platform",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZA-FrontendDev",
    previewUrl: "https://ava.q9labs.ai/",
    technologies: [
      { name: "React" }, // No icons needed anymore!
      { name: "JavaScript" },
      { name: "Tailwind" },
    ],
  },
  {
    id: 3,
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
      },
      {
        name: "JavaScript",
      },
      { name: "CSS" },
    ],
  },
  {
    id: 4,
    title: "Tuition Highway LMS App",
    description:
      "This LMS application is developed using React Native and is designed to simplify the educational experience for students and teachers.Integrated Jitsi Meet for seamless video conferencing and online classes, enabling real-time interaction between students and teachers.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    statusType: "live",
    statusText: "Live on Play / App Stores",
    gitUrl: "/",
    previewUrl: "/",
    technologies: [
      {
        name: "React",
      },
      {
        name: "JavaScript",
      },
      {
        name: "TypeScript",
      },
      {
        name: "CSS",
      },
    ],
  },
  {
    id: 5,
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
      },
      {
        name: "Next",
      },
      {
        name: "JavaScript",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Tailwind",
      },
    ],
  },
  {
    id: 6,
    title: "Next JS Invoice Generator App",
    description:
      "A web application designed for creating and managing invoices efficiently.Generate professional invoices with customizable fields.View and manage a list of created invoices for easy tracking.Users stay logged in securely using local storage for session persistence.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZA-FrontendDev/new-invoice",
    previewUrl: "https://new-invoice-za.vercel.app/en/login",
    technologies: [
      {
        name: "React",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Nextjs",
      },
      { name: "Tailwind" },
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
    project.tag.includes(tag),
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
              category={project.category} // Pass the category
              highlightText={project.highlightText} // Pass the highlight text
              statusType={project.statusType} // <--- Added
              statusText={project.statusText}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
