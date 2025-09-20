import { motion } from 'framer-motion';
import studybuddy from "./assets/Stydybuddy.png";
import watchlister from "./assets/watchlister.png";
import treekshipping from "./assets/treekshipping.png";
import introlevelling from "./assets/introlevelling.png";
import ticketier from "./assets/ticketier.png";
import Quillux from "./assets/Quillux.png";
import background from "./assets/background.png";

import { FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiFramer} from "react-icons/si";

export default function Section2() {
  const Projects = [
    {
      img: studybuddy,
      name: "Study Buddy",
      stack: [FaReact, SiTailwindcss, SiFirebase, FaPython ],
      description:
        "A dynamic and responsive webapp that allows student to use ai powered tools to get prepared for exams.",
      Link:"https://studdybuddy-school.vercel.app/"
    },
    {
      img: watchlister,
      name: "Watchlister",
      stack: [FaReact, SiTailwindcss, SiFirebase],
      description:
       "A movie and TV show tracker app with watchlist management,API integration and sharing capabilities.",
       Link:"https://watchlister-jet.vercel.app/"
    },
    {
      img: Quillux,
      name: "Quillux",
      stack: [FaReact, SiTailwindcss, SiFirebase],
      description:
        "A writing and productivity tool designed for seamless content creation.",
        Link:"https://quillux.vercel.app/"
    },
    {
      img: treekshipping,
      name: "Treek-shipping",
      stack: [FaReact, SiTailwindcss],
      description:
        "A shipping company websites with animation and responsiveness.",
        Link:"https://treek-shipping.vercel.app/"
    },
    {
      img: ticketier,
      name: "Ticketier",
      stack: [FaReact, SiTailwindcss, SiFirebase],
      description:
        "An event ticketing app with secure authentication.",
        Link:"https://ticketier-tau.vercel.app/"
    },
    {
      img: introlevelling,
      name: "Intro-Leveling",
      stack: [FaReact, SiTailwindcss],
      description:
        "A gamified learning platform that motivates introverts through leveling systems.",
        Link:"https://https://intro-levelling-gaku.vercel.app/"
    },
  ];

  // ANIMATION VARIANTS - Customize these for different animation styles
  
  // Container animation - controls the overall section entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Delay before child animations start
        staggerChildren: 0.1, // Time between each child animation
        duration: 0.6
      }
    }
  };

  // Header animation - for title and description
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 // Start 30px above final position
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Project card animation - each card uses this
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, // Start 50px below final position
      scale: 0.9 // Slightly smaller
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom bezier curve for smooth feel
      }
    }
  };

  // Hover animation for project cards - customize hover behavior
  const cardHoverVariants = {
    rest: { 
      y: 0, 
      scale: 1,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
    },
    hover: { 
      y: -8, // Lift card up by 8px
      scale: 1.02, // Slightly enlarge
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98, // Slightly shrink on tap
      transition: { duration: 0.1 }
    }
  };

  // Image animation - for project images inside cards
  const imageVariants = {
    rest: { 
      scale: 1,
      filter: "brightness(1)"
    },
    hover: { 
      scale: 1.05, // Slight zoom on hover
      filter: "brightness(1.1)", // Slight brightness increase
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Stack icons animation - tech stack icons
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180 // Start rotated
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "backOut", // Bouncy effect
        delay: 0.2 // Slight delay after card appears
      }
    },
    hover: {
      scale: 1.2, // Enlarge on hover
      rotate: 5, // Slight rotation
      transition: { duration: 0.2 }
    }
  };

  // Live project link animation
  const linkVariants = {
    rest: { 
      scale: 1,
      x: 0
    },
    hover: { 
      scale: 1.05,
      x: 5, // Move slightly to the right
      color: "#6366f1", // Change color on hover
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      id="projects"
      className="relative min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10 bg-gradient-to-b from-gray-50 to-gray-100"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animation triggers when section comes into view
      viewport={{ once: true, amount: 0.2 }} // Animate once when 20% is visible
    >
      {/* HEADER SECTION - Title and Description */}
      <motion.div 
        className="text-left mt-5 mb-12"
        variants={headerVariants}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          whileHover={{
            scale: 1.02,
            color: "#4F46E5", // Change color on hover
            transition: { duration: 0.3 }
          }}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="text-white max-w-2xl text-sm sm:text-base"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Here are some of my recent works that showcase my skills in building
          interactive, scalable, and modern web applications.
        </motion.p>
      </motion.div>

      {/* PROJECTS GRID - Main content area */}
      <motion.div 
        className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {Projects.map((project, i) => (
          <motion.div
            animate={floatingAnimation}
            className="relative"
          >
          <motion.div
            key={i}
            className="bg-[#191818] border border-[#3D3D3D] rounded-xl shadow-md overflow-hidden"
            variants={cardVariants}
            whileInView="visible" // Each card animates when it comes into view
            viewport={{ once: true, amount: 0.3 }}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            // Custom delay for staggered effect - remove this line for simultaneous animation
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <motion.div 
              className="p-4 sm:p-5 space-y-2"
              variants={cardHoverVariants}
            >
              {/* PROJECT IMAGE */}
              <motion.div className="overflow-hidden rounded">
                <motion.img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-40 sm:h-48 rounded object-cover"
                  variants={imageVariants}
                />
              </motion.div>

              {/* TECH STACK AND LIVE PROJECT LINK */}
              <div className="flex mt-4 justify-between items-center">
                {/* Tech Stack Icons */}
                <motion.div 
                  className="flex space-x-2"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {project.stack.map((Icon, index) => (
                    <motion.div
                      key={index}
                      variants={iconVariants}
                      whileHover="hover"
                      // Stagger icon animations - adjust delay multiplier to change timing
                      custom={index}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="text-indigo-400 text-lg sm:text-xl cursor-pointer" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Live Project Link */}
                <motion.a
                  href={project.Link}
                  className="text-sm text-indigo-400 hover:underline"
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  Live project
                </motion.a>
              </div>

              {/* PROJECT TITLE */}
              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-white"
                whileHover={{
                  color: "#4F46E5",
                  x: 5, // Slide slightly to the right
                  transition: { duration: 0.2 }
                }}
              >
                {project.name}
              </motion.h3>

              {/* PROJECT DESCRIPTION */}
              <motion.p 
                className="text-white font-extralight text-xs sm:text-sm"
                initial={{ opacity: 0.8 }}
                whileHover={{ 
                  opacity: 1,
                  transition: { duration: 0.2 }
                }}
              >
                {project.description}
              </motion.p>
            </motion.div>
          </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}