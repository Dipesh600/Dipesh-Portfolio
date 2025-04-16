'use client';

import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const contactInfo = {
    email: 'dipeshch040313@gmail.com',
    phone: '8521129540',
    linkedin: 'linkedin.com/in/dipesh--chaudhary/',
    github: 'https://github.com/Dipesh600'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`Found element with id ${sectionId}, scrolling to:`, element.offsetTop - 80);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      closeMobileMenu();
    } else {
      console.error(`Element with id ${sectionId} not found`);
    }
  };

  const headerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/90 dark:bg-gray-900/90 shadow-sm backdrop-blur-sm"
      : "bg-transparent"
  }`;

  const navLinks = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Experience", section: "experience" },
    { name: "Certificates", section: "certificates" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="#home" 
          className="text-xl font-bold text-primary-900 dark:text-white flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <span className="bg-gradient-text">Dipesh Chaudhary</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.section}
              href={`#${link.section}`}
              className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.section);
              }}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="social-icon"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="social-icon"
            title="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-primary-600 dark:text-primary-300" />
          ) : (
            <Menu className="h-6 w-6 text-primary-600 dark:text-primary-300" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.section}
                  href={`#${link.section}`}
                  className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.section);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex justify-between items-center py-2">
                <span className="text-primary-600 dark:text-primary-300">Toggle theme</span>
                <ThemeToggle isMobile={true} />
              </div>
            </nav>
            <div className="flex justify-center space-x-4 py-4 border-t">
              <a href={`mailto:${contactInfo.email}`} className="social-icon">
                <Mail className="w-5 h-5" />
              </a>
              <a href={`tel:${contactInfo.phone}`} className="social-icon">
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .social-icon {
          @apply text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors;
        }
      `}</style>
    </header>
  );
};

export default Header;
