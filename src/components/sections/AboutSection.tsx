
import { Button } from '../ui/button';
import { download } from 'lucide-react';

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
              I'm <span className="text-portfolio-accent">Your Name</span>, a React Developer
            </h3>
            
            <p className="text-gray-700">
              I'm a passionate frontend developer with expertise in building interactive user interfaces
              using React and modern web technologies. With a strong foundation in JavaScript and a keen
              eye for design, I create engaging web experiences that users love.
            </p>
            
            <p className="text-gray-700">
              My journey in web development began over 5 years ago, and I've worked on various projects
              ranging from small business websites to complex enterprise applications. I'm constantly
              learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            
            <div className="pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-portfolio-accent hover:bg-portfolio-blue flex items-center gap-2"
                onClick={handleDownload}
              >
                <a href={resumeUrl} download="Your_Name_Resume.pdf">
                  <download className="h-5 w-5" />
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
