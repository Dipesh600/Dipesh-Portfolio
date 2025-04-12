import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

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
          {projects.map((project) => (
            <div
              key={project.id}
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
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
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
                  {project.technologies.length > 2 && (
                    <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full ml-2">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4 text-sm">
                  {project.shortDescription}
                </p>
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/project/${project.id}`}
                    className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-1"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="flex gap-2">
                    <button
                      className="text-primary-600 dark:text-primary-400 hover:text-blue-500 text-xs p-1"
                      onClick={() => {
                        toast({
                          title: "Live Demo",
                          description: "Live demo will be available soon!",
                          duration: 3000,
                        });
                      }}
                    >
                      <Globe className="h-4 w-4" />
                    </button>
                    <a
                      href={project.githubLink}
                      className="text-primary-600 dark:text-primary-400 hover:text-blue-500 text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.githubLink, "_blank");
                      }}
                    >
                      <SiGithub className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/happyswaraj"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 text-primary-800 dark:text-primary-100 rounded-lg font-medium border border-primary-200 dark:border-primary-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/happyswaraj", "_blank");
            }}
          >
            View More Projects on GitHub <SiGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;