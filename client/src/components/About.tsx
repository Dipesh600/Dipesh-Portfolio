import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-white dark:bg-gray-800 ${
        isVisible ? "section-animate-active" : "section-animate"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Who am I?</h3>
            <p className="text-primary-600 dark:text-primary-300 mb-6">
              I'm a Computer Science & Engineering student with a passion for building 
              innovative solutions. My journey in technology began with curiosity about 
              how digital systems work and has evolved into a dedicated pursuit of knowledge 
              and skills in software development.
            </p>
            <p className="text-primary-600 dark:text-primary-300 mb-8">
              I specialize in web development with a focus on React and modern JavaScript. 
              I'm constantly learning new technologies and methodologies to enhance my 
              problem-solving abilities and create efficient, user-friendly applications.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary-900 dark:text-white mb-2">Education</h4>
                <p className="text-primary-600 dark:text-primary-400">B.Tech in Computer Science & Engineering</p>
                <p className="text-sm text-primary-500 dark:text-primary-500">2020 - 2024</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 dark:text-white mb-2">Location</h4>
                <p className="text-primary-600 dark:text-primary-400">Hyderabad, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 dark:text-white mb-2">Email</h4>
                <p className="text-primary-600 dark:text-primary-400">happyswaraj@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 dark:text-white mb-2">Interests</h4>
                <p className="text-primary-600 dark:text-primary-400">Web Development, AI, Cloud Computing</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Professional portrait of Happy Swaraj"
                className="rounded-2xl w-full max-w-md relative shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
