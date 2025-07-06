
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AcademicSection from '@/components/sections/AcademicSection';
import ToolsSection from '@/components/sections/ToolsSection';
import WorkExperienceSection from '@/components/sections/WorkExperienceSection';
import LiveProjectsSection from '@/components/sections/LiveProjectsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-creamy-beige/50 via-white to-sky-blue/20">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicSection />
        <ToolsSection />
        <WorkExperienceSection />
        <LiveProjectsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
