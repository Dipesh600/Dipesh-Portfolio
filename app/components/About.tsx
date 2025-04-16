'use client';

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Code, GraduationCap, MapPin, Mail, Heart } from "lucide-react";

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
      className="py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              I'm a <span className="text-blue-500 font-semibold">Computer Science & Engineering</span> student with a passion for building 
              innovative solutions. My journey in technology began with curiosity about 
              how digital systems work and has evolved into a dedicated pursuit of knowledge 
              and skills in software development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              I specialize in <span className="text-blue-500 font-semibold">web development</span> with a focus on React and modern JavaScript. 
              I'm constantly learning new technologies and methodologies to enhance my 
              problem-solving abilities and create efficient, user-friendly applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">B.Tech in Computer Science</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2022 - 2026</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Janakpur, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">dipeshch040313@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <Code className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Skills</h4>
                  <p className="text-gray-600 dark:text-gray-300">React, Node.js, Python</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
