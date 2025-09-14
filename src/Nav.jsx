import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Animation variants
    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                delayChildren: 0.1,
                staggerChildren: 0.05
            }
        }
    };

    const mobileItemVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2 }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        rest: { 
            scale: 1,
            boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.8)"
        },
        hover: { 
            scale: 1.05,
            boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.8)",
            y: -2,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: { 
            scale: 0.95,
            boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.8)",
            y: 2
        }
    };

    return (
        <motion.nav 
            className="sticky top-0 bg-black shadow-lg z-50 "
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-4">
                <motion.h1 
                    className="text-2xl font-bold text-white"
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.1,
                        color: "#4F46E5",
                        transition: { duration: 0.2 }
                    }}
                >
                Jose idris
                </motion.h1>
                
                {/* Desktop Menu */}
                <motion.div 
                    className="hidden md:flex items-center gap-6"
                    variants={itemVariants}
                >
                    {['Home', 'Stack','Projects', 'Contact'].map((item, index) => (
                        <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative"
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              whileHover={{
                scale: 1.1,
                color: '#4F46E5',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3 + index * 0.1 },
              }}
            >
                            {item}
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-[#4F46E5]"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                      <motion.a
                                   href="/cv-Jose idris" // Place your CV file in the public folder as cv.pdf
                                   download="jose idris-CV.pdf"
                                className="inline-block px-6 py-2 bg-white text-black font-bold rounded-lg border-2 border-white shadow-md mt-2"
                                onClick={() => setIsOpen(false)}
                                variants={mobileItemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "4px 4px 0px 0px rgba(79,70,229,0.8)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download CV
                            </motion.a>
                </motion.div>

                {/* Mobile Hamburger Button */}
                <motion.button 
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1 p-2 relative z-10"
                    aria-label="Toggle menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    variants={itemVariants}
                >
                    <motion.span 
                        className="w-6 h-0.5 bg-white"
                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                        className="w-6 h-0.5 bg-white"
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                        className="w-6 h-0.5 bg-white"
                        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="px-6 pb-4 space-y-4">
                            {['Home','Stack', 'Projects', 'Contact'].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block text-white hover:text-[#4F46E5] font-medium transition-colors duration-200 py-2"
                                    onClick={() => setIsOpen(false)}
                                    variants={mobileItemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        x: 10,
                                        color: "#4F46E5"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.a
                                   href="/cv-Jose idris" // Place your CV file in the public folder as cv.pdf
                                download="jose idris-CV.pdf"
                                className="inline-block px-6 py-2 bg-white text-black font-bold rounded-lg border-2 border-white shadow-md mt-2"
                                onClick={() => setIsOpen(false)}
                                variants={mobileItemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "4px 4px 0px 0px rgba(79,70,229,0.8)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}