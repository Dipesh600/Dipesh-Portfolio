import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

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
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-500 text-lg md:text-xl mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-text">
            Happy Swaraj
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-300 mb-8">
            Computer Science & Engineering Student
          </h2>
          <p className="text-primary-500 dark:text-primary-400 text-lg mb-12 max-w-2xl mx-auto">
            Passionate about crafting elegant solutions to complex problems
            through code. Exploring the intersection of technology and
            innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white dark:bg-gray-800 text-primary-800 dark:text-primary-100"
              asChild
            >
              <a href="/resume.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="mailto:happyswaraj@example.com"
              className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
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
