'use client';

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Code, Award, Users } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  icon: JSX.Element;
}

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences: ExperienceItem[] = [
    {
      title: "Open Source Contributor",
      organization: "React & Next.js Community",
      period: "2023 - Present",
      description:
        "Active contributor to various React and Next.js projects, focusing on performance optimization and accessibility improvements. Collaborated with developers globally, participated in code reviews, and helped maintain documentation. Contributed to popular UI component libraries and helped resolve critical issues.",
      skills: ["React.js", "Next.js", "TypeScript", "Git", "UI/UX"],
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Technical Community Lead",
      organization: "LPU Coding Club",
      period: "2023 - Present",
      description:
        "Lead a community of 100+ student developers, organizing workshops and coding competitions. Mentored junior developers in web development best practices and modern technologies. Facilitated peer learning sessions and hackathon preparations, resulting in increased student participation in tech events.",
      skills: ["Leadership", "Mentoring", "Event Management", "Public Speaking"],
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Hackathon Winner",
      organization: "Smart India Hackathon",
      period: "2024",
      description:
        "Led a team of 6 developers to victory in the Smart India Hackathon, developing an innovative solution for digital governance. Created a mobile application for streamlined police department operations, implementing secure authentication and real-time data management features.",
      skills: ["Team Leadership", "React Native", "FastAPI", "Problem Solving"],
      icon: <Award className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 bg-primary-50 dark:bg-gray-900 ${
        isVisible ? "section-animate-active" : "section-animate"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Highlights of my technical journey, leadership roles, and contributions to the developer community.
          </p>
        </div>

        <div className="timeline-dot relative max-w-3xl mx-auto">
          {experiences.map((experience, index) => {
            let iconBgColor;
            if (index === 0) {
              iconBgColor = "bg-blue-500";
            } else if (index === 1) {
              iconBgColor = "bg-emerald-500";
            } else {
              iconBgColor = "bg-purple-500";
            }

            return (
              <div key={index} className="timeline-item flex mb-12">
                <div
                  className={`timeline-marker w-16 h-16 ${iconBgColor} text-white rounded-full flex items-center justify-center z-10 shrink-0`}
                >
                  {experience.icon}
                </div>
                <div className="timeline-content ml-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <span className="text-sm text-blue-500 font-medium">
                      {experience.period}
                    </span>
                  </div>
                  <h4 className="text-primary-600 dark:text-primary-300 font-medium mb-4">
                    {experience.organization}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400">
                    {experience.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
