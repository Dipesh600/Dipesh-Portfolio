import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

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
        <a 
          href="#home" 
          className="text-xl font-bold text-primary-900 dark:text-white flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <span className="bg-gradient-text">Happy Swaraj</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.section);
              }}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

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
                <a
                  key={link.section}
                  href={`#${link.section}`}
                  className="text-primary-600 dark:text-primary-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.section);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-between items-center py-2">
                <span className="text-primary-600 dark:text-primary-300">Toggle theme</span>
                <ThemeToggle isMobile={true} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
