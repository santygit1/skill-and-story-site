
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in-up">
            <div className="h-96 w-full relative">
              {/* Updated profile photo */}
              <img 
                src="/lovable-uploads/aa9a8458-e2b6-489d-8b36-4d8e62706bae.png" 
                alt="Santhosh Kumar" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold">
              I'm <span className="text-portfolio-accent">Santhosh Kumar</span>, a Full Stack Developer
            </h3>
            
            <p className="text-gray-700">
<<<<<<< HEAD
            I'm a passionate full stack developer skilled in building seamless web applications from front to back.
            I work with modern technologies like React, Tailwind CSS, JavaScript, Bootstrap, EmailJS and LocalStorage to deliver responsive UIs, 
            while also handling backend logic and integrations to ensure complete, user-centric solutions.


            </p>
            
            <p className="text-gray-700">
            I'm a strategic, creative thinker with hands-on experience in marketing, operations and team coordination. 
            I turn ideas into action building brand presence, streamlining processes and leading initiatives that drive growth with empathy, adaptability and impact.


=======
              I'm a passionate full stack developer with a strong focus on building scalable, end-to-end web applications. 
              I specialize in technologies like <span className="text-portfolio-accent">React, Tailwind CSS, Node.js, Express and MongoDB</span>, crafting clean user 
              interfaces and robust backend systems.
            </p>
            
            <p className="text-gray-700">
              I enjoy solving real-world problems through code, blending functionality with design to create impactful 
              digital experiences.
>>>>>>> 44f48d7e783d01eb91f77065a1e06895f24a99f2
            </p>
            
            <div className="pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-portfolio-accent hover:bg-portfolio-blue flex items-center gap-2"
                onClick={handleDownload}
              >
<<<<<<< HEAD
                <a href={resumeUrl} download="final resume.pdf">
=======
                <a href={resumeUrl} download="Santhosh_Kumar_Resume.pdf">
>>>>>>> 44f48d7e783d01eb91f77065a1e06895f24a99f2
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
