import studybuddy from "./assets/Stydybuddy.png";
import watchlister from "./assets/watchlister.png";
import treekshipping from "./assets/treekshipping.png";
import introlevelling from "./assets/introlevelling.png";
import ticketier from "./assets/ticketier.png";
import Quillux from "./assets/Quillux.png";
import background from "./assets/background.png";

import { FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiFramer } from "react-icons/si";

export default function Section2() {
  const Projects = [
    {
      img: studybuddy,
      name: "Study Buddy",
      stack: [FaReact, SiTailwindcss, SiFirebase, FaPython],
      description:
        "A dynamic and responsive e-commerce web app with product filtering, cart functionality, and payment integration.",
    },
    {
      img: watchlister,
      name: "Watchlister",
      stack: [FaReact, SiTailwindcss, SiFirebase],
      description:
        "A movie and TV show tracker app with watchlist management and API integration.",
    },
    {
      img: Quillux,
      name: "Quillux",
      stack: [FaReact, SiTailwindcss, SiFirebase],
      description:
        "A writing and productivity tool designed for seamless content creation.",
    },
    {
      img: treekshipping,
      name: "Treek-shipping",
      stack: [FaReact, SiTailwindcss],
      description:
        "A shipping management platform with real-time tracking and dashboard analytics.",
    },
    {
      img: ticketier,
      name: "Ticketier",
      stack: [FaReact, SiTailwindcss, SiFirebase],
      description:
        "An event ticketing app with QR code generation and secure authentication.",
    },
    {
      img: introlevelling,
      name: "Intro-Leveling",
      stack: [FaReact, SiTailwindcss],
      description:
        "A gamified learning platform that motivates users through leveling systems.",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Header */}
      <div className="text-left mt-5 mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          My Projects
        </h2>
        <p className="text-white max-w-2xl text-sm sm:text-base">
          Here are some of my recent works that showcase my skills in building
          interactive, scalable, and modern web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#191818] border border-[#3D3D3D] rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="p-4 sm:p-5 space-y-2">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-40 sm:h-48 rounded object-cover"
              />
              <div className="flex mt-4 justify-between items-center">
                <div className="flex space-x-2">
                  {project.stack.map((Icon, index) => (
                    <Icon key={index} className="text-indigo-400 text-lg sm:text-xl" />
                  ))}
                </div>
                <a
                  href="#"
                  className="text-sm text-indigo-400 hover:underline"
                >
                  Live project
                </a>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                {project.name}
              </h3>
              <p className="text-white font-extralight text-xs sm:text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
