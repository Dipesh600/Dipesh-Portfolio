'use client';

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    school: "Lovely Professional University Punjab",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Jalandhar, Punjab",
    period: "2022 – 2026",
    grade: "CGPA: 6.82"
  },
  {
    school: "Premier Higher Secondary School",
    degree: "12th with Science",
    location: "Kathmandu, Nepal",
    period: "2019 – 2021",
    grade: "Percentage: 82.5%"
  },
  {
    school: "Peace Zone English Boarding School",
    degree: "10th with Science",
    location: "Nawalpur, Sarlahi, Nepal",
    period: "2018 – 2019",
    grade: "Percentage: 87.5%"
  }
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            My academic journey and qualifications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-0.5 bg-blue-500" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative md:flex items-start mb-32 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-8 z-10">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
              </div>

              {/* Content */}
              <div 
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:pr-32 md:w-1/2' 
                    : 'md:pl-32 md:ml-auto md:w-1/2'
                }`}
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-8 relative shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-6">{edu.school}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <GraduationCap className="w-5 h-5 text-blue-500" />
                      <span>{edu.degree}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-gray-600 dark:text-gray-300">{edu.grade}</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 