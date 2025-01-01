"use client";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";

const workExperiences = [
  {
    company: "CollabeEZ",
    position: "Frontend Developer",
    duration: "June 2023 - Present",
    description: [
      "Currently gaining hands-on experience in backend development, working with MongoDB, Express, Node.js, and related technologies.",
      "In This firm i m working on React & React Native creating web application or mobile application.",
      "I am working in this company specifically on their (LMS), using React.js . I have worked on making some changes, including creating PDFs, code refactoring and implementing various functionalities.",
      "Creating, Zoom-like mobile app with Jitsi Meet integration for seamless virtual classrooms in a powerful Learning Management System.",
    ],
  },
  {
    company: "TeknWeb",
    position: "Mid-Level WordPress Developer",
    duration: "Apr 2022 - May 2023",
    description: [
      "Design the website and after approval from clients also developed the website.",
    ],
  },
  {
    company: "A2zcreatorz",
    position: "WordPress Developer",
    duration: "Dec 2020 - Dec 2021",
    description: [
      "Design the website and after approval from clients also developed the website.",
      "When i was in this company i also go to client side with my team lead.",
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
