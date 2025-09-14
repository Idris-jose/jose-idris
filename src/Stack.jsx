import { motion } from 'framer-motion';
import background from "./assets/background.png";
import { FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiFramer, SiJavascript, SiTypescript, SiNextdotjs } from "react-icons/si";

export default function Stack() {
  // Stack data with colors and names
  const stackData = [
    { Icon: FaReact, name: "React", color: "#61DAFB", bgGradient: "from-cyan-400 to-blue-500" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", bgGradient: "from-yellow-400 to-orange-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6", bgGradient: "from-blue-400 to-blue-600" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#000000", bgGradient: "from-gray-700 to-black" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", bgGradient: "from-cyan-400 to-teal-500" },
    { Icon: SiFramer, name: "Framer Motion", color: "#0055FF", bgGradient: "from-blue-500 to-purple-600" },
    { Icon: FaPython, name: "Python", color: "#3776AB", bgGradient: "from-blue-400 to-yellow-400" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28", bgGradient: "from-yellow-400 to-orange-600" }
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

  const cardVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.8,
      rotate: -10
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const iconVariants = {
    rest: { 
      scale: 1,
      rotate: 0 
    },
    hover: { 
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const cardHoverVariants = {
    rest: { 
      y: 0,
      boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.8)",
      scale: 1
    },
    hover: { 
      y: -10,
      boxShadow: "8px 8px 0px 0px rgba(0,0,0,0.8)",
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

 // Floating animation for subtle movement
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };


  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

 
  // Split title text for stagger animation
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
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-20 gap-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        className="flex flex-col items-center gap-12 w-full max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Title */}
        <motion.div
          variants={titleVariants}
          className="text-center"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          >
            {titleArray.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{
                  scale: 1.2,
                  color: '#4F46E5',
                  textShadow: '0 0 20px #4F46E5',
                  transition: { duration: 0.2 }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          
         
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-4 max-w-2xl"
            variants={titleVariants}
          >
            Technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Stack Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 w-full"
          variants={containerVariants}
        >
          {stackData.map((tech, index) => {
            const { Icon, name, color, bgGradient } = tech;
            
            return (
              <motion.div
                key={name}
                className="group relative"
                variants={cardVariants}
                animate={floatingAnimation}
              >
                <motion.div
                  className={`
                    relative p-6 sm:p-8 rounded-2xl border-4 border-black
                    bg-gradient-to-br ${bgGradient} 
                    cursor-pointer overflow-hidden
                    backdrop-blur-sm bg-opacity-90
                  `}
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glowing background effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                    style={{ backgroundColor: color }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className="flex flex-col items-center gap-3 relative z-10"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Icon 
                      className="text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-lg" 
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                    />
                    
                    <motion.span 
                      className="text-sm sm:text-base md:text-lg font-bold text-white text-center drop-shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        textShadow: '0 0 10px rgba(255,255,255,0.8)'
                      }}
                    >
                      {name}
                    </motion.span>
                  </motion.div>

                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                           bg-black text-white px-3 py-1 rounded-lg text-sm 
                           opacity-0 group-hover:opacity-100 pointer-events-none
                           transition-opacity duration-300 whitespace-nowrap z-20"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                               border-4 border-transparent border-t-black"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

       
      </motion.div>
    </section>
  );
}