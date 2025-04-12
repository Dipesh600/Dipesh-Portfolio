import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Briefcase, GraduationCap, Code } from "lucide-react";

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
      title: "Web Development Intern",
      organization: "TechSolutions Inc.",
      period: "Jun 2023 - Aug 2023",
      description:
        "Developed responsive web applications using React.js and Node.js. Collaborated with the design team to implement UI/UX improvements. Participated in code reviews and contributed to team projects.",
      skills: ["React.js", "Node.js", "REST API"],
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Bachelor of Technology",
      organization: "Computer Science & Engineering",
      period: "2020 - 2024",
      description:
        "Completed coursework in Data Structures, Algorithms, Database Management Systems, Web Development, and Software Engineering. Participated in hackathons and technical clubs.",
      skills: ["Data Structures", "Algorithms", "Web Development"],
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Open Source Contributor",
      organization: "Various Projects",
      period: "2022 - Present",
      description:
        "Actively contribute to open-source projects, fixing bugs and implementing new features. Collaborate with developers globally and participate in code reviews.",
      skills: ["JavaScript", "React", "Git"],
      icon: <Code className="h-6 w-6" />,
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
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            My academic journey and professional experience in the field of
            computer science.
          </p>
        </div>

        <div className="timeline-dot relative max-w-3xl mx-auto">
          {experiences.map((experience, index) => {
            let iconBgColor;
            if (index === 0) {
              iconBgColor = "bg-blue-500";
            } else if (index === 1) {
              iconBgColor = "bg-primary-700 dark:bg-primary-600";
            } else {
              iconBgColor = "bg-emerald-500";
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
