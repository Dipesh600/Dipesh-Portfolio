export interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  imageUrl: string;
  credentialUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "SQL for Data Science",
    organization: "Great Learning",
    date: "March 2024",
    imageUrl: "/assets/certificates/sql-great-learning.png",
    credentialUrl: "https://www.mygreatlearning.com/academy/learn-for-free/courses/sql-for-data-science?utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin_certificate_share&utm_source_page=public_certificate_view"
  },
  {
    id: 2,
    title: "INTRODUCTION TO SOFTWARE TESTING",
    organization: "Coursera",
    date: "April 2024",
    imageUrl: "/assets/certificates/sql-coursera.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/YU2VD5C84FBK?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
  }
]; 