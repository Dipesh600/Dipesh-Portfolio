import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "School Management System",
    description: "A comprehensive web-based system that streamlines administration with features for managing students, teachers, and operations efficiently. Built with PHP and MySQL database to ensure secure and effective data management. The system provides an intuitive interface for administrative tasks and features responsive design for access across different devices.",
    shortDescription: "Web-based school administration system",
    image: "/assets/projects/Admin_Dashboard.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Dipesh600/School-Management-System",
    demoLink: "",
    date: "Nov 2024"
  },
  {
    id: 2,
    title: "Wandi-Now",
    description: "Developed a feature-rich tourism website that enables users to seamlessly book hotels, flights, and guide services. Integrated MongoDB for secure and efficient user data management and authentication. The platform features RESTful APIs for real-time data retrieval and secure transactions, with a responsive and user-friendly interface for smooth navigation across all devices.",
    shortDescription: "Tourism booking platform with comprehensive features",
    image: "/assets/projects/Wandr-Now.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful API"],
    githubLink: "https://github.com/Dipesh600/Wandi-Now",
    demoLink: "",
    date: "April 2024"
  },
  {
    id: 3,
    title: "App Limiter",
    description: "An Android application designed to help users manage their screen time effectively. Built using Kotlin in Android Studio, the app provides a simple and intuitive interface for users to monitor and control their app usage. Features include displaying selected apps, remaining time, and total time limits, with notifications when limits are reached to encourage better app usage habits.",
    shortDescription: "Android app for screen time management",
    image: "/assets/projects/App_Limitter.png",
    technologies: ["Kotlin", "Android Studio", "XML", "SQLite"],
    githubLink: "https://github.com/Dipesh600/App-Limiter",
    demoLink: "",
    date: "January 2024"
  }
]; 