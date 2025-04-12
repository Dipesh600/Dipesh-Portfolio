import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Code, GraduationCap, MapPin, Mail, Heart } from "lucide-react";
import happyImage from "@assets/WhatsApp Image 2025-04-11 at 18.24.40.jpeg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 ${
        isVisible ? "section-animate-active" : "section-animate"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Who am I?</h3>
            <p className="text-primary-600 dark:text-primary-300 mb-6 text-lg leading-relaxed">
              I'm a <span className="text-blue-500 font-semibold">Computer Science & Engineering</span> student with a passion for building 
              innovative solutions. My journey in technology began with curiosity about 
              how digital systems work and has evolved into a dedicated pursuit of knowledge 
              and skills in software development.
            </p>
            <p className="text-primary-600 dark:text-primary-300 mb-8 text-lg leading-relaxed">
              I specialize in <span className="text-blue-500 font-semibold">web development</span> with a focus on React and modern JavaScript. 
              I'm constantly learning new technologies and methodologies to enhance my 
              problem-solving abilities and create efficient, user-friendly applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 dark:text-white mb-1">Education</h4>
                  <p className="text-primary-600 dark:text-primary-400">B.Tech in Computer Science & Engineering</p>
                  <p className="text-sm text-primary-500 dark:text-primary-500">2020 - 2024</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 dark:text-white mb-1">Location</h4>
                  <p className="text-primary-600 dark:text-primary-400">Hyderabad, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 dark:text-white mb-1">Email</h4>
                  <p className="text-primary-600 dark:text-primary-400">happyswaraj@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Heart className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 dark:text-white mb-1">Interests</h4>
                  <p className="text-primary-600 dark:text-primary-400">Web Development, AI, Cloud Computing</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-30 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full transform rotate-6 group-hover:rotate-3 transition-all duration-500"></div>
              
              {/* Main image */}
              <img
                src={happyImage}
                alt="Professional portrait of Happy Swaraj"
                className="rounded-full w-64 h-64 object-cover relative shadow-lg z-10 transform group-hover:scale-[1.02] transition-all duration-500 border-4 border-white dark:border-gray-700"
              />
              
              {/* Code decorations */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg z-20 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                <Code className="h-8 w-8 text-blue-500" />
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg z-20 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-6 w-6 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
