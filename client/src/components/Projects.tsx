import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "Node.js"],
      liveLink: "#",
      githubLink: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "Firebase"],
      liveLink: "#",
      githubLink: "https://github.com",
    },
    {
      title: "Blog Platform",
      description:
        "A responsive blog platform with content management system, user authentication, and comment functionality.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "MongoDB"],
      liveLink: "#",
      githubLink: "https://github.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-white dark:bg-gray-800 ${
        isVisible ? "section-animate-active" : "section-animate"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-primary-50 dark:bg-gray-900 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${
                        techIndex === 0
                          ? "bg-blue-500 text-white"
                          : "bg-primary-700 text-white"
                      } text-xs px-2 py-1 rounded-full ${
                        techIndex > 0 ? "ml-2" : ""
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-primary-600 dark:text-primary-400 hover:text-blue-500 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 text-primary-800 dark:text-primary-100 rounded-lg font-medium border border-primary-200 dark:border-primary-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Projects on GitHub <SiGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
