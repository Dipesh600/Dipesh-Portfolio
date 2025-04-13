'use client';

const Resume = () => {
  return (
    <div id="resume" className="max-w-[21cm] mx-auto bg-white p-8 print:p-6 shadow-lg">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Happy Swaraj</h1>
        <p className="text-gray-600 mb-3">Saran, Bihar 841424</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <a href="tel:9128730395" className="hover:text-blue-600 transition-colors">📱 9128730395</a>
          <a href="mailto:happyswaraj7667@gmail.com" className="hover:text-blue-600 transition-colors">✉️ happyswaraj7667@gmail.com</a>
          <a href="https://linkedin.com/in/happyswaraj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">🔗 linkedin.com/in/happyswaraj/</a>
          <a href="https://github.com/happy0002" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">💻 github.com/happy0002</a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          Computer Science & Engineering student with hands-on experience in full-stack development, mobile app development, and secure authentication systems. Skilled in React Native, Python, and database management.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 pb-1 text-gray-900">Projects</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-gray-800">Police Connect | React Native, Expo, TypeScript, PLSQL</h3>
            <span className="text-sm text-gray-600">Feb 2025</span>
          </div>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
            <li>Built a cross-platform mobile application ensuring smooth user experience across iOS and Android</li>
            <li>Integrated secure login system with UID authentication and PL SQL data storage</li>
            <li>Developed features for complaint management and investigation tracking</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-gray-800">FastAPI Authentication System | FastAPI, React Native, SQLite</h3>
            <span className="text-sm text-gray-600">Dec 2024</span>
          </div>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
            <li>Developed secure authentication routes using FastAPI and SQLAlchemy ORM</li>
            <li>Implemented password hashing with Passlib and bcrypt for secure data storage</li>
            <li>Built React Native frontend with Axios and AsyncStorage for token management</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 pb-1 text-gray-900">Technical Skills</h2>
        <div className="grid grid-cols-1 gap-2 text-sm">
          <div className="flex gap-2">
            <span className="font-semibold min-w-[100px]">Languages:</span>
            <span className="text-gray-700">C++, Java, JavaScript, Python</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold min-w-[100px]">Technologies:</span>
            <span className="text-gray-700">React JS, Node.js, React Native, FastAPI, SQLite, PLSQL</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold min-w-[100px]">Tools:</span>
            <span className="text-gray-700">Git, GitHub, VS Code, IntelliJ, Postman, Selenium</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold min-w-[100px]">Skills:</span>
            <span className="text-gray-700">Full-stack Development, Mobile Development, Database Design, API Development</span>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 pb-1 text-gray-900">Education</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-gray-800">B.Tech in Computer Science and Engineering</h3>
              <p className="text-sm text-gray-700">Lovely Professional University Punjab | CGPA: 6.35</p>
            </div>
            <span className="text-sm text-gray-600">2022 – 2026</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-gray-800">12th with Science</h3>
              <p className="text-sm text-gray-700">Sanjay Gandhi Inter College, Bihar | Percentage: 73.3%</p>
            </div>
            <span className="text-sm text-gray-600">2020 – 2021</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-gray-800">10th with Science</h3>
              <p className="text-sm text-gray-700">G.D Mission Public School, Bihar | Percentage: 60%</p>
            </div>
            <span className="text-sm text-gray-600">2017 – 2018</span>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section>
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 pb-1 text-gray-900">Certifications</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Core and Advance Java</span>
            <span className="text-sm text-gray-600">Board Infinity, Nov 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Data Structures & Algorithms (C/C++)</span>
            <span className="text-sm text-gray-600">Udemy, Nov 2023</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Object Oriented Programming (C++)</span>
            <span className="text-sm text-gray-600">NIIT, April 2022</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume; 