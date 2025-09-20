import React, { useRef, useEffect } from 'react';
import { motion, useAnimationControls, useMotionValue } from 'framer-motion';
import background from "./assets/background.png";

import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpeg";
import image5 from "./assets/image5.jpeg";
import image6 from "./assets/image6.jpeg";

export default function Section3() {
  // ANIMATION VARIANTS - Customize these for different animation styles

  const images = [image1, image2, image3, image4, image5, image6];

  // Container animation - controls the overall section entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Wait before children start animating
        staggerChildren: 0.2, // Time between each child animation
        duration: 0.8
      }
    }
  };

  // Main heading animation - "Let's work together"
  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, // Start 50px below
      scale: 0.8 // Start slightly smaller
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing curve
        type: "spring", // Spring animation for bouncy feel
        stiffness: 100
      }
    }
  };

  // Description text animation
  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 // Start 30px below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2 // Small delay after heading
      }
    }
  };

  // Button container animation
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4, // Wait for text to appear first
        staggerChildren: 0.15 // Time between button animations
      }
    }
  };

  // Button hover animations

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

  // Text hover animations for interactive feel
  const textHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      color: "#4F46E5", // Change to purple on hover
      transition: { duration: 0.3 }
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
// Auto-scroll animation controls
  const scrollContainerRef = useRef(null);
  const scrollControls = useAnimationControls();
  const x = useMotionValue(0);

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Define the auto-scroll animation
    const scroll = async () => {
      await scrollControls.start({
        x: -scrollWidth, // Scroll to the end
        transition: {
          x: {
            duration: scrollWidth / 100, // Adjust speed (pixels per second)
            ease: 'linear',
          },
        },
      });
      // Reset to start for seamless looping
      scrollControls.set({ x: 0 });
      // Restart the animation
      scroll();
    };

    scroll();

    // Cleanup to stop animation on unmount
    return () => scrollControls.stop();
  }, [scrollControls]);

  return (
    <motion.section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      id="contact"
      className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-12 gap-8 min-h-screen relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* MAIN CONTENT CONTAINER */}
      <motion.div 
        className="text-center"
        animate={floatingAnimation}
      >
        {/* MAIN HEADING - "Let's work together" */}
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-white"
          variants={headingVariants}
          whileHover="hover"
          initial="rest"
        >
          <motion.span variants={textHoverVariants}>
            Let's work together
          </motion.span> 
        </motion.h1> 

        {/* DESCRIPTION TEXT */}
        <motion.p 
          className="mt-4 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto text-gray-200"
          variants={descriptionVariants}
          whileHover={{
            scale: 1.02,
            color: "#ffffff",
            transition: { duration: 0.3 }
          }}
        >
          Have a project in mind or just want to say hi?<br/>
          Let's connect and  create something amazing together.
        </motion.p>

          {/* BUTTONS CONTAINER */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-6"
            variants={buttonContainerVariants}
          >
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
              <motion.button 
                className="px-5 py-2 sm:px-7 sm:py-3 bg-[#4F46E5] text-white text-sm sm:text-base md:text-lg font-bold rounded-lg border-2 border-black"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                Hire me
              </motion.button>
              
              <motion.a
                href="/cv-Jose idris" // Place your CV file in the public folder as cv.pdf
                download="jose idris-CV.pdf"
                className="px-5 py-2 sm:px-7 sm:py-3 bg-white text-black text-sm sm:text-base md:text-lg font-bold rounded-lg border-2 border-black flex items-center justify-center"
                variants={secondButtonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                style={{ textDecoration: "none" }}
              >
                Download Cv
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RANDOM REEL SECTION - Image showcase */}
        <motion.div
          className="w-full max-w-6xl mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl  font-bold text-white text-left mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Random Reel
          </motion.h3>
          
          {/* IMAGE REEL CONTAINER - Auto-scrolling */}
          <div className="overflow-hidden">
            <motion.div 
              ref={scrollContainerRef}
              className="flex gap-4 py-4 px-2"
              style={{ x }}
              animate={scrollControls}
            >
              {/* First set of images */}
              {images.map((img, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-64 sm:w-56 sm:h-72 rounded-xl border-4 border-black shadow-lg overflow-hidden relative group cursor-pointer"
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    y: 50 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0 
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.1 + (index * 0.1),
                    ease: "backOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,0.8)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{
                    scale: 0.95,
                    y: 2,
                    boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.8)"
                  }}
                >
                  <img
                    src={img}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                </motion.div>
              ))}
              {/* Duplicate set for seamless looping */}
              {images.map((img, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-64 sm:w-56 sm:h-72 rounded-xl border-4 border-black shadow-lg overflow-hidden relative group cursor-pointer"
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    y: 50 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0 
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.1 + (index * 0.1),
                    ease: "backOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,0.8)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{
                    scale: 0.95,
                    y: 2,
                    boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.8)"
                  }}
                >
                  <img
                    src={img}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                 
                </motion.div>
              ))}
            </motion.div>
          </div>

         
        </motion.div>
      </motion.div>
    </motion.section>
  );
}