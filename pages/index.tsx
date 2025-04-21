// pages/index.tsx
import Navbar from '../components/Navbar';  // Assuming Navbar is a component
import Hero from '../sections/Hero';  // Assuming Hero is a section component
import About from '../sections/About';  // Assuming About is a section component
import Projects from '../sections/Projects';  // Assuming Projects is a section component
import Skills from '../sections/Skills';  // Assuming Skills is a section component
import Resume from '../sections/Resume';  // Assuming Resume is a section component
import Blog from '../sections/Blog';  // Assuming Blog is a section component
import Contact from '../sections/contact';  // Assuming Contact is a section component

const HomePage = () => {
  return (
    <div>
      {/* Global Header (Navbar) */}
      <Navbar />
      
      {/* Main content sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Blog />
      <Contact />
      
      {/* You can also include a footer here if needed */}
      <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
  <p>🌐 All rights reserved © 2025 Sudip Pandey</p>
</footer>

      </footer>
    </div>
  );
};

export default HomePage;
