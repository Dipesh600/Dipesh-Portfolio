import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "Police Connect",
    description: "A cross-platform mobile application using React Native and Expo, ensuring a smooth, responsive user experience across both iOS and Android. Integrated a secure login system using unique UID and password, with PL SQL for secure data storage. Developed features that allow officers to quickly access and manage complaints, investigations, and ongoing cases.",
    shortDescription: "Cross-platform mobile app for police department management",
    image: "/assets/projects/punjabPoliceplatform.png",
    technologies: ["React Native", "Expo", "TypeScript", "PLSQL"],
    githubLink: "https://github.com/happy0002/Police-connect",
    demoLink: "",
    date: "Feb 2025"
  },
  {
    id: 2,
    title: "FastAPI",
    description: "Developed secure authentication routes for user signup and login using FastAPI, Python's high-performance web framework. Integrated SQLite as the database for storing user credentials, using SQLAlchemy ORM for database interactions. Implemented password hashing using Passlib and bcrypt, ensuring secure storage and protection of user passwords. Built the mobile frontend using React Native, with Axios for API calls and AsyncStorage to store authentication tokens securely.",
    shortDescription: "High-performance authentication system with FastAPI",
    image: "/assets/projects/fastapiimage.png",
    technologies: ["FastAPI", "React Native", "SQLite", "Python"],
    githubLink: "https://github.com/happy0002/fastapi-backend-for_polish",
    demoLink: "",
    date: "Dec 2024"
  }
]; 