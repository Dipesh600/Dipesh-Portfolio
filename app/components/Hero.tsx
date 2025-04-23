'use client';

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Github, Linkedin, Twitter, Mail, ChevronDown, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.9,
      opacity: 0,
      y: 20
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.2
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`min-h-[90vh] flex items-center justify-center py-20 relative ${
        isVisible ? "section-animate-active" : "section-animate"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 dark:from-blue-500/10 dark:to-emerald-500/10"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-lg"
              variants={imageVariants}
            >
              <img
                src="/assets/profile.jpg"
                alt="Dipesh Chaudhary"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="text-center md:text-left"
              variants={itemVariants}
            >
              <motion.p 
                className="text-blue-500 text-lg md:text-xl mb-3"
                variants={itemVariants}
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-text"
                variants={itemVariants}
              >
                Dipesh Chaudhary
              </motion.h1>
              <motion.h2 
                className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-300 mb-8"
                variants={itemVariants}
              >
                Computer Science & Engineering Student
              </motion.h2>
              <motion.p 
                className="text-primary-500 dark:text-primary-400 text-lg mb-12 max-w-2xl"
                variants={itemVariants}
              >
                Passionate about crafting elegant solutions to complex problems
                through code. Exploring the intersection of technology and
                innovation.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                variants={buttonVariants}
              >
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
                  onClick={scrollToContact}
                >
                  Get in Touch
                </Button>
                <a 
                  href="/assets/Dipesh_Specialized.pdf" 
                  download
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white dark:bg-gray-800 text-primary-800 dark:text-primary-100 hover:bg-gray-100 dark:hover:bg-gray-700 h-11 px-8"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </motion.div>
              <motion.div 
                className="mt-12 flex justify-center space-x-6"
                variants={itemVariants}
              >
                <a
                  href="https://github.com/Dipesh600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/dipesh--chaudhary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/DipeshCh040313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="mailto:dipeshch040313@gmail.com"
                  className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-primary-400 dark:text-primary-500"
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: "smooth",
              });
            }
          }}
          aria-label="Scroll to About section"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
