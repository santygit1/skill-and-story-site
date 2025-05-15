
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  // This will be replaced with your actual final resume file
  const resumeUrl = '/https://docs.google.com/document/d/1SeYZL9oWxpJfgMFXzbxCg84RL7n_abHp/edit?usp=drive_link&ouid=101457459427532664424&rtpof=true&sd=true';
  
  const handleDownload = () => {
    // In a real implementation, this could track the download event
    console.log('Resume download initiated');
  };
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="section-title">
          <h2 className="mb-2">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in-up">
            <div className="bg-gray-200 h-96 w-full relative">
              {/* Replace this with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Your Photo Here
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold">
              I'm <span className="text-portfolio-accent">Santhosh Kumar</span>, a Full Stack Developer
            </h3>
            
            <p className="text-gray-700">
            I'm a passionate full stack developer skilled in building seamless web applications from front to back.
            I work with modern technologies like React, Tailwind CSS, JavaScript, Bootstrap, EmailJS and LocalStorage to deliver responsive UIs, 
            while also handling backend logic and integrations to ensure complete, user-centric solutions.


            </p>
            
            <p className="text-gray-700">
            I'm a strategic, creative thinker with hands-on experience in marketing, operations and team coordination. 
            I turn ideas into action building brand presence, streamlining processes and leading initiatives that drive growth with empathy, adaptability and impact.


            </p>
            
            <div className="pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-portfolio-accent hover:bg-portfolio-blue flex items-center gap-2"
                onClick={handleDownload}
              >
                <a href={resumeUrl} download="final resume.pdf">
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
