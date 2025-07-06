
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

const AboutSection = () => {
  const resumeUrl = 'https://docs.google.com/document/d/1SeYZL9oWxpJfgMFXzbxCg84RL7n_abHp/edit?usp=drive_link&ouid=101457459427532664424&rtpof=true&sd=true';
  
  const handleViewResume = () => {
    window.open(resumeUrl, '_blank');
  };
  
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-white via-creamy-beige/30 to-sky-blue/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-cosmic-purple mb-4">Hi, I'm Santhosh 👋</h2>
          <p className="text-cosmic-purple/70 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm currently pursuing a dual academic path — BCA in Data Science from SRM University and Entrepreneurship + Full Stack Development from the Institute of Venture Building.
            I combine technical development, business operations, and startup execution into a single dynamic profile — driven by purpose, curiosity, and impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up bg-gradient-to-br from-white/50 to-sky-blue/30 backdrop-blur-sm border border-white/50">
            <div className="h-80 w-full relative p-4">
              <img 
                src="/lovable-uploads/aa9a8458-e2b6-489d-8b36-4d8e62706bae.png" 
                alt="Santhosh Kumar" 
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-cosmic-purple leading-tight">
                Crafting Tomorrow's Solutions Today
              </h3>
              
              <div className="space-y-3 text-cosmic-purple/80 leading-relaxed">
                <p>
                  I'm a passionate full stack developer skilled in building seamless web applications from front to back. 
                  I work with modern technologies like <span className="text-cosmic-blue font-semibold">React, Tailwind CSS, JavaScript, and Node.js</span> to deliver responsive UIs, 
                  while also handling backend logic and integrations to ensure complete, user-centric solutions.
                </p>
                
                <p>
                  Beyond development, I'm a strategic, creative thinker with hands-on experience in marketing, operations and team coordination. 
                  I turn ideas into action, building brand presence, streamlining processes and leading initiatives that drive growth with 
                  <span className="text-cosmic-blue font-semibold"> empathy, adaptability and impact</span>.
                </p>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="bg-gradient-to-r from-cosmic-purple/10 to-cosmic-blue/10 p-3 rounded-xl border border-cosmic-purple/20">
                <h4 className="font-semibold text-cosmic-purple text-sm">Entrepreneurship + Full Stack (IVB)</h4>
              </div>
              <div className="bg-gradient-to-r from-cosmic-blue/10 to-sky-blue/10 p-3 rounded-xl border border-cosmic-blue/20">
                <h4 className="font-semibold text-cosmic-purple text-sm">Data Science (SRM University)</h4>
              </div>
              <div className="bg-gradient-to-r from-sky-blue/10 to-peach/10 p-3 rounded-xl border border-sky-blue/20 sm:col-span-2">
                <h4 className="font-semibold text-cosmic-purple text-sm">Top performer in product & tech immersion</h4>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-purple text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 group"
                onClick={handleViewResume}
              >
                <Eye className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
