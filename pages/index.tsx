// pages/index.tsx
import Navbar from '../sections/Navbar';  // Assuming Navbar is a component
import Hero from '../sections/Hero';  // Assuming Hero is a section component
import About from '../sections/About';  // Assuming About is a section component
import Projects from '../sections/Projects';  // Assuming Projects is a section component
import Skills from '../sections/Skills';  // Assuming Skills is a section component
import Resume from '../sections/Resume';  // Assuming Resume is a section component
import Blog from '../sections/Blog';  // Assuming Blog is a section component
import Contact from '../sections/contact';  // Assuming Contact is a section component
import Calendar from '../sections/calender';
import Footer from '../sections/Footer';

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
      <Calendar/>
      <Footer/>

      
    </div>
  );
};

export default HomePage;
