import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiMongodb,
  SiGit,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills: Skill[] = [
    { name: "React.js", icon: <SiReact className="h-12 w-12" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-12 w-12" /> },
    { name: "Node.js", icon: <SiNodedotjs className="h-12 w-12" /> },
    { name: "HTML5", icon: <SiHtml5 className="h-12 w-12" /> },
    { name: "CSS3", icon: <SiCss3 className="h-12 w-12" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-12 w-12" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-12 w-12" /> },
    { name: "Git", icon: <SiGit className="h-12 w-12" /> },
    { name: "SQL", icon: <SiPostgresql className="h-12 w-12" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-12 w-12" /> },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 bg-primary-50 dark:bg-gray-900 ${
        isVisible ? "section-animate-active" : "section-animate"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web
            applications and software solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-center group"
            >
              <div className="skill-icon text-blue-500 mb-4 transition-transform duration-300 flex justify-center group-hover:translate-y-[-5px]">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-primary-800 dark:text-primary-100">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
