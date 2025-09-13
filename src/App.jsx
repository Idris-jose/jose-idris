import { motion, AnimatePresence } from 'framer-motion';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';
import Nav from './Nav';
import './App.css';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.2
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50
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

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Animated background elements */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        
        </motion.div>

        {/* Navigation */}
        <motion.div variants={sectionVariants}>
          <Nav />
        </motion.div>

        {/* Sections with staggered animations */}
        <motion.div variants={sectionVariants}>
          <Section1 />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Section2 />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Section3 />
        </motion.div>
       
        {/* Footer */}
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;