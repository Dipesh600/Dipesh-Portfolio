export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveLink: string;
  githubLink: string;
  category: 'web' | 'mobile' | 'desktop';
  date: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    shortDescription: "A full-stack e-commerce platform with user authentication and payment integration.",
    description:
      "A comprehensive e-commerce solution built with React.js and Node.js. The platform includes user authentication, product catalog, shopping cart functionality, and secure payment integration. The admin dashboard allows for easy product management and order tracking.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "Redux", "JWT Authentication"],
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order tracking and history",
      "Admin dashboard for product management",
      "Responsive design for all devices"
    ],
    liveLink: "https://ecommerce-platform.example.com",
    githubLink: "https://github.com/happyswaraj/ecommerce-platform",
    category: "web",
    date: "June 2023"
  },
  {
    id: "task-management",
    title: "Task Management App",
    shortDescription: "A collaborative task management application with real-time updates.",
    description:
      "A collaborative task management application designed to help teams organize projects and tasks efficiently. The app features real-time updates, task assignments, progress tracking, and notifications. Built with React.js and Firebase, it offers a smooth and responsive user experience.",
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "Firebase", "Firestore", "Redux", "Material-UI", "React DnD"],
    features: [
      "Task creation and management",
      "Drag-and-drop interface for task prioritization",
      "Team collaboration features",
      "Real-time updates and notifications",
      "Project timelines and deadlines",
      "Performance analytics and reporting",
      "Mobile-responsive design"
    ],
    liveLink: "https://task-management.example.com",
    githubLink: "https://github.com/happyswaraj/task-management",
    category: "web",
    date: "September 2023"
  },
  {
    id: "web-data-harvester",
    title: "Web Data Harvester",
    shortDescription: "A powerful web scraping tool for collecting and analyzing data from websites.",
    description:
      "Web Data Harvester is a sophisticated web scraping application that allows users to extract structured data from websites. It features a user-friendly interface, customizable scraping rules, data validation, and export options in various formats. Built with Python and React.js, it provides powerful data collection capabilities for research and analytics.",
    image:
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "React.js", "Beautiful Soup", "Selenium", "Flask", "MongoDB", "Pandas"],
    features: [
      "Custom scraping rules and patterns",
      "Scheduled data collection",
      "Data cleaning and transformation",
      "Multiple export formats (CSV, JSON, Excel)",
      "Proxy rotation and user agent spoofing",
      "Visual data preview and validation",
      "API access for integration with other tools"
    ],
    liveLink: "https://web-data-harvester.example.com",
    githubLink: "https://github.com/happyswaraj/web-data-harvester",
    category: "web",
    date: "February 2024"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};