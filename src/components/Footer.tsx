
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const toolLogos = [
    '⚛️', '🟢', '🎨', '⚡', '📝', '📋', '📊', '🎯', '🤖', '🎭',
    '🌊', '📢', '📓', '🐙', '💻', '🌐', '🚀', '🍃', '📌', '📈'
  ];

  return (
    <footer className="bg-gradient-to-br from-cosmic-purple via-cosmic-blue to-cosmic-purple text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Animated Tools Section */}
        <div className="mb-12">
          <h4 className="text-center text-lg font-semibold mb-6 text-sky-blue">My Technology Stack</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {toolLogos.map((logo, index) => (
              <div 
                key={index}
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 animate-float text-2xl"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '3s'
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-4">
              <span className="text-sky-blue">Santhosh</span> Kumar
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Building the future through code, creativity, and conscious innovation.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-peach animate-pulse" />
              <span>in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-sky-blue">Quick Links</h4>
            <ul className="space-y-3">
              {['hero', 'about', 'projects', 'tools', 'contact'].map((section) => (
                <li key={section}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(section);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:underline capitalize"
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-sky-blue">Let's Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a 
                href="https://github.com/santygit1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/santhosh-kumar-94824b328/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="text-sm text-white/70">
              <p>santhosh2027ug@buildwithivb.com</p>
              <p className="mt-1">Based in India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="mb-4">
            <p className="text-white/90 font-serif italic text-lg">
              "Built with passion, driven by purpose — Santhosh Kumar"
            </p>
          </div>
          <p className="text-white/60 text-sm">
            © {currentYear} Santhosh Kumar. All rights reserved. 
            <span className="ml-2">Crafted with modern web technologies.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
