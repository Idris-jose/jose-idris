import { motion } from 'framer-motion';
import background from "./assets/background.png";
import LogoLoop from "./LogoLoop";
import { FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiFramer, SiJavascript, SiTypescript, SiNextdotjs } from "react-icons/si";

export default function Stack() {
  // Stack data with colors and names
 const logos = [
  FaReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  FaPython,
  SiFirebase
];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleText = "My Tech Stack";
  const titleArray = titleText.split("");

  return (
    <section
      id="stack"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-20 gap-12 relative overflow-hidden"
    >
      <motion.div
        className="flex flex-col items-center gap-12 w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Title */}
        <motion.div variants={titleVariants} className="text-center">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            {titleArray.map((char, i) => (
              <motion.span key={i} className="inline-block" whileHover={{ scale: 1.2, color: '#4F46E5' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-4">
            Technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* LogoLoop Component */}
        <LogoLoop logos={logos} speed={15} />
      </motion.div>
    </section>
  );
}
