"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const SKILLS_DATA = [
  { name: "WordPress", category: "cms" },
  { name: "Shopify", category: "ecommerce" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "UI/UX (Figma)", category: "design" },
  { name: "React Js", category: "frontend" },
  { name: "React Native", category: "mobile" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node Js", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "Express js", category: "backend" },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-2">
        {SKILLS_DATA.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition-colors"
          >
            {skill.name}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="border-l-2 border-gray-500 pl-4">
          <h3 className="text-xl font-semibold">
            Bachelor of Science (B.S.) in Computer Science
          </h3>
          <div className="text-gray-300">Virtual University</div>
          <div className="text-gray-400 text-sm">August 2023 - Present</div>
        </div>
        <div className="border-l-2 border-gray-500 pl-4">
          <h3 className="text-xl font-semibold">
            Intermediate in Pre-Engineering
          </h3>
          <div className="text-gray-300">Army Public College - Faisal</div>
          <div className="text-gray-400 text-sm">July 2018 - June 2020</div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">HTML, CSS & PHP</h3>
              <div className="text-gray-300">Aptech</div>
            </div>
            <div className="bg-gray-600 px-3 py-1 rounded-full text-sm">
              Completed
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Web Development Bootcamp
              </h3>
              <div className="text-gray-300">Udemy</div>
            </div>
            <div className="bg-gray-600 px-3 py-1 rounded-full text-sm">
              Completed
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About me image"
          className="rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-custom to-purple-custom mb-4">
            About Me
          </h2>

          <p className="text-base lg:text-lg mb-8">
            As a Frontend Developer, I specialize in creating responsive and
            visually appealing user interfaces using modern frameworks like
            React and React Native, with a strong understanding of UI/UX design
            principles to deliver intuitive user experiences. Additionally, I am
            currently learning the MERN stack (MongoDB, Express, React, Node.js)
            to enhance my skills in backend development and database management.
            My commitment to continuous learning keeps me updated with the
            latest frontend and backend technologies and trends, enabling me to
            provide high-quality solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="mr-4"
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              className="mr-4"
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
