import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold bg-gradient-text">
              Dipesh Chaudhary
            </a>
            <p className="text-primary-300 mt-2 max-w-md">
              Computer Science & Engineering student passionate about creating web applications 
              and exploring new technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Dipesh600"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/dipesh--chaudhary/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/DipeshCh040313"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:dipeshch040313@gmail.com"
                className="text-primary-300 hover:text-blue-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-primary-400 text-sm">
              © {currentYear} Dipesh Chaudhary. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
