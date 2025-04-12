export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialUrl: string;
  imageUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: "certificate-1",
    title: "Web Development Professional Certificate",
    organization: "Meta",
    date: "March 2024",
    credentialUrl: "https://www.youracclaim.com/badges/123456",
    imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "certificate-2",
    title: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    date: "January 2024",
    credentialUrl: "https://www.freecodecamp.org/certification/123456",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "certificate-3",
    title: "Full Stack Web Development",
    organization: "Udemy",
    date: "October 2023",
    credentialUrl: "https://www.udemy.com/certificate/123456",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];