import React from 'react';
import { Link } from 'wouter';
import { Home, User, Code, Briefcase, Award, Send, Github, Linkedin, Mail, Twitter, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/ThemeProvider';

const SidebarLink = ({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick?: () => void }) => {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <div className="text-gray-500 dark:text-gray-400">{icon}</div>
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
    </Link>
  );
};

interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile = false, onClose }) => {
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      if (isMobile && onClose) {
        onClose();
      }
    }
  };

  return (
    <aside className={`flex flex-col h-full ${isMobile ? 'w-full' : 'w-64'} bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800`}>
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Happy Swaraj</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Full Stack Developer</p>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        <a 
          href="#home"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => {
            scrollToSection('home');
          }}
        >
          <div className="text-gray-500 dark:text-gray-400"><Home size={18} /></div>
          <span className="text-gray-700 dark:text-gray-300">Home</span>
        </a>
        
        <a 
          href="#about"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => {
            scrollToSection('about');
          }}
        >
          <div className="text-gray-500 dark:text-gray-400"><User size={18} /></div>
          <span className="text-gray-700 dark:text-gray-300">About</span>
        </a>
        
        <a 
          href="#skills"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => {
            scrollToSection('skills');
          }}
        >
          <div className="text-gray-500 dark:text-gray-400"><Code size={18} /></div>
          <span className="text-gray-700 dark:text-gray-300">Skills</span>
        </a>
        
        <a 
          href="#projects"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => {
            scrollToSection('projects');
          }}
        >
          <div className="text-gray-500 dark:text-gray-400"><Briefcase size={18} /></div>
          <span className="text-gray-700 dark:text-gray-300">Projects</span>
        </a>
        
        <a 
          href="#experience"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => {
            scrollToSection('experience');
          }}
        >
          <div className="text-gray-500 dark:text-gray-400"><Briefcase size={18} /></div>
          <span className="text-gray-700 dark:text-gray-300">Experience</span>
        </a>
        
        <a 
          href="#certificates"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => {
            scrollToSection('certificates');
          }}
        >
          <div className="text-gray-500 dark:text-gray-400"><Award size={18} /></div>
          <span className="text-gray-700 dark:text-gray-300">Certificates</span>
        </a>
        
        <a 
          href="#contact"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => {
            scrollToSection('contact');
          }}
        >
          <div className="text-gray-500 dark:text-gray-400"><Send size={18} /></div>
          <span className="text-gray-700 dark:text-gray-300">Contact</span>
        </a>
      </nav>
      
      {/* Social Links */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-around">
          <a 
            href="https://github.com/happyswaraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/happyswaraj", "_blank");
            }}
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/happyswaraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://linkedin.com/in/happyswaraj", "_blank");
            }}
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:happyswaraj@gmail.com" 
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://twitter.com/happyswaraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://twitter.com/happyswaraj", "_blank");
            }}
          >
            <Twitter size={20} />
          </a>
          <button 
            onClick={toggleTheme} 
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;