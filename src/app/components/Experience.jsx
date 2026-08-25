"use client";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";

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

function WorkExperience({ experience }) {
  return (
    <div className="mb-8 last:mb-0 bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-purple-500">
        {experience.company}
      </h3>
      <div className="flex items-center text-gray-500 mb-4 ">
        <BriefcaseIcon className="w-4 h-4 mr-2 text-white" />
        <span className="mr-4 text-white">{experience.position}</span>
        <CalendarIcon className="w-4 h-4 mr-2 text-white" />
        <span className="text-white">{experience.duration}</span>
      </div>
      <ul className="list-disc list-inside text-gray-500">
        {experience.description.map((item, index) => (
          <li key={index} className="mb-1 text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="py-16 bg-[#121212]" id="experience">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-pink-custom to-purple-custom mb-4">
          Work Experience
        </h2>
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <WorkExperience key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
