import { motion } from 'framer-motion';
import background from "./assets/background.png";
import { FaGithub, FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  // ANIMATION VARIANTS - Customize for different effects

  // Container animation for the entire footer
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  // Animation for individual elements
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Social icon animations
  const iconVariants = {
    rest: { 
      scale: 1,
      rotate: 0
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.9,
      rotate: -5
    }
  };

  // Link hover animations
  const linkVariants = {
    rest: { 
      color: "#ffffff",
      x: 0
    },
    hover: { 
      color: "#4F46E5",
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer
      className="bg-[#2A2A2A] text-white px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center"     }}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION - Name and Avatar */}
        <motion.div 
          className="flex items-center gap-4 mb-8"
          variants={itemVariants}
        >
          {/* Profile Avatar */}
          <motion.div
            className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center border-2 border-white"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            <span className="text-white font-bold text-lg">JI</span>
          </motion.div>
          
          {/* Name */}
          <motion.h3 
            className="text-xl sm:text-2xl font-bold"
            whileHover={{
              color: "#4F46E5",
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Jose Idris
          </motion.h3>
        </motion.div>

        {/* DESCRIPTION SECTION */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            I'm not just here to make things pretty, I'm here to solve real problems. Confused UX? Fixed. Clunky flows? 
            Smoothed. Bland concept? Elevated.
          </motion.p>
          <br />
          <motion.p 
            className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I thrive on creative challenges, enjoy collaborating, and always designing with purpose. If you've 
            got a vision and need a design partner who gets it (and actually listens to everything), we'll work great 
            together. Let's build something smart and beautiful.
          </motion.p>
        </motion.div>

        {/* NAVIGATION LINKS */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div className="flex flex-wrap gap-6 sm:gap-8">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-sm sm:text-base font-medium hover:text-[#4F46E5] transition-colors duration-200"
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* SOCIAL MEDIA ICONS */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div className="flex gap-4">
            {/* GitHub */}
            <motion.a
              href="#"
              className="text-white hover:text-[#4F46E5] transition-colors duration-200"
              variants={iconVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </motion.a>

          

            {/* LinkedIn */}
            <motion.a
              href="#"
              className="text-white hover:text-[#4F46E5] transition-colors duration-200"
              variants={iconVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="#"
              className="text-white hover:text-[#4F46E5] transition-colors duration-200"
              variants={iconVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* FOOTER BOTTOM - Copyright */}
        <motion.div 
          className="border-t border-gray-600 pt-6"
          variants={itemVariants}
        >
          <motion.div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#ffffff" }}
            >
             ui/ux designer-jose ridwan
            </motion.p>

            
          </motion.div>
        </motion.div>

      </div>
    </motion.footer>
  );
}