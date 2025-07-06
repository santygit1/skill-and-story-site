
import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowDown, Sparkles, Code, Lightbulb } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      hero.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-creamy-beige via-sky-blue/20 to-peach/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          {/* Floating orbs with different animations */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-sky-blue/30 to-peach/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-peach/20 to-cosmic-purple/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Geometric shapes */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                background: i % 3 === 0 ? '#3E2C84' : i % 3 === 1 ? '#1E2A78' : '#C2E9FB',
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div 
        ref={heroRef}
        className="container mx-auto px-4 z-10 transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Avatar */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 backdrop-blur-sm animate-glow">
                <img 
                  src="/lovable-uploads/aa9a8458-e2b6-489d-8b36-4d8e62706bae.png" 
                  alt="Santhosh Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating icons around avatar */}
              <div className="absolute -top-2 -right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-float">
                <Sparkles className="w-5 h-5 text-cosmic-purple" />
              </div>
              <div className="absolute -bottom-2 -left-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Code className="w-5 h-5 text-cosmic-blue" />
              </div>
              <div className="absolute top-1/2 -right-8 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <Lightbulb className="w-5 h-5 text-peach" />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block text-cosmic-purple mb-2">
              Santhosh Kumar
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-cosmic-blue font-sans font-light">
              — Architecting Tech, Ideas & Impact
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-cosmic-purple/80 mb-8 animate-fade-in-up font-medium" style={{ animationDelay: '0.4s' }}>
            Entrepreneurial Aspirant | AI, Tech & Product Enthusiast
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-purple text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3"
            >
              <a href="#projects">Explore Portfolio</a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white rounded-full px-8 py-3 backdrop-blur-sm bg-white/50 transition-all duration-300"
            >
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full h-12 w-12 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-5 w-5 text-cosmic-purple" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
