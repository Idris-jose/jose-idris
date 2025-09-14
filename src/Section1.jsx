import { motion } from 'framer-motion';
import pfp from "./assets/pfp.jpg";
import background from "./assets/background.png";

export default function Section1() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotate: -10
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "backOut",
        delay: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: { 
      scale: 1,
      boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.8)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.8)",
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.8)",
      y: 2
    }
  };

  const secondButtonVariants = {
    rest: { 
      scale: 1,
      boxShadow: "4px 4px 0px 0px rgba(79,70,229,0.8)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "6px 6px 0px 0px rgba(79,70,229,0.8)",
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      boxShadow: "2px 2px 0px 0px rgba(79,70,229,0.8)",
      y: 2
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

  // Split text into individual characters for stagger effect
  const text = "Hi, I'm Idris José";
  const textArray = text.split("");

  return (
   <section
      id="home" // Added for Nav component scrolling
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 gap-8 relative overflow-hidden"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center  gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 mx-auto md:mx-auto" // Center image on small screens, left-align on medium+
          variants={imageVariants}
        >
          <motion.div animate={floatingAnimation} className="relative">
            <motion.img
              src={pfp}
              alt="Profile of Jose Idris"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-80 lg:w-72 lg:h-[420px] rounded-2xl object-cover shadow-xl"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col w-full max-w-3xl space-y-4 text-left" // Changed to text-left for all screens
          variants={itemVariants}
        >
          {/* Animated heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            variants={textVariants}
          >
            {textArray.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                whileHover={{
                  scale: 1.2,
                  color: '#4F46E5',
                  transition: { duration: 0.2 },
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              color: '#4F46E5',
              transition: { duration: 0.3 },
            }}
          >
            Frontend Developer
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200"
            variants={itemVariants}
          >
            I build responsive, interactive, and visually stunning digital experiences
            from websites to full-scale web applications. My focus is on creating
            seamless user interfaces that work beautifully across all devices.
          </motion.p>

          {/* Neobrutalism Buttons */}
          <motion.div
            className="flex flex-wrap justify-start gap-4 pt-4" // Changed to justify-start for left alignment
            variants={itemVariants}
          >
            <motion.a
              className="px-5 py-2 sm:px-7 sm:py-3 bg-[#4F46E5] text-white text-sm sm:text-base md:text-lg font-bold rounded-lg border-2 border-black"
              variants={buttonVariants}
              href="mailto:idrisjose11@gmail.com?subject=Hire%20Request&body=Hello%20Idris,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              style={{ display: 'inline-block', textDecoration: 'none' }}
              aria-label="Send an email to Idris to discuss hiring"
            >
              Hire me
            </motion.a>

            <motion.a
              className="px-5 py-2 sm:px-7 sm:py-3 bg-white text-black text-sm sm:text-base md:text-lg font-bold rounded-lg border-2 border-black flex items-center justify-center"
              variants={secondButtonVariants}
              href="https://github.com/Idris-jose"
              target="_blank"
              rel="noopener noreferrer"
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              style={{ display: 'inline-block', textDecoration: 'none' }}
              aria-label="Visit Jose Idris's GitHub profile"
            >
              Github Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}