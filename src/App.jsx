import Navbar from './components/Navbar';
import Footer from './components/Footer'
import HeroSection from './section/HeroSection';
import SkillsSection from './section/SkillsSection';
import ProjectsSection from './section/ProjectsSection';
import AboutSection from './section/AboutSection';
import EducationSection from './section/EducationSection';
import ExperienceSection from './section/ExperienceSection';
import ContactSection from './section/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <EducationSection/>
      <SkillsSection />
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
      {/* Other sections will go here */}
    </>
  );
}

export default App;
