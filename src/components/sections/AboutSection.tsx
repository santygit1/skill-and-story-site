
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  // This will be replaced with your actual resume file
  const resumeUrl = '/resume.pdf';
  
  const handleDownload = () => {
    // In a real implementation, this could track the download event
    console.log('Resume download initiated');
  };
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in-up">
            <div className="h-96 w-full relative">
              {/* Your profile photo */}
              <img 
                src="/profile-photo.jpg" 
                alt="Santhosh Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold">
              I'm <span className="text-portfolio-accent">Santhosh Kumar</span>, a Full Stack Developer
            </h3>
            
            <p className="text-gray-700">
              I'm a passionate full stack developer with a strong focus on building scalable, end-to-end web applications. 
              I specialize in technologies like React, Tailwind CSS, Node.js, Express and MongoDB, crafting clean user 
              interfaces and robust backend systems.
            </p>
            
            <p className="text-gray-700">
              I enjoy solving real-world problems through code, blending functionality with design to create impactful 
              digital experiences.
            </p>
            
            <div className="pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-portfolio-accent hover:bg-portfolio-blue flex items-center gap-2"
                onClick={handleDownload}
              >
                <a href={resumeUrl} download="Santhosh_Kumar_Resume.pdf">
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
