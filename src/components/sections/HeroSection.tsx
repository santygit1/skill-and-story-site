
import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      hero.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10">
          {/* Background decorative elements */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-portfolio-accent"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                opacity: Math.random() * 0.5 + 0.1,
                transform: `scale(${Math.random() * 2 + 0.5})`,
                animation: `pulse-slow ${Math.random() * 5 + 3}s infinite`
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 animate-fade-in-up">
<<<<<<< HEAD
            <span className="block text-portfolio-dark">Hello, I'm</span>
            <span className="text-portfolio-accent">Santhosh Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A passionate full stack developer crafting seamless web experiences from intuitive frontends to robust backends.
          </p>
          
=======
            <span className="block text-portfolio-dark mb-2">Hello, I'm</span>
            <span className="text-portfolio-accent">Santhosh Kumar</span>
            <span className="block text-portfolio-dark text-xl md:text-2xl mt-2">Full Stack Developer</span>
          </h1>
          
>>>>>>> 44f48d7e783d01eb91f77065a1e06895f24a99f2
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-portfolio-accent hover:bg-portfolio-blue">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full h-12 w-12 border border-gray-300"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
