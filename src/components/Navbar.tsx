
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'tools' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-sky-blue/20 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-serif font-bold text-cosmic-purple hover:text-cosmic-blue transition-colors duration-300"
        >
          <span className="text-cosmic-blue">Santhosh</span> Kumar
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative text-cosmic-purple hover:text-cosmic-blue transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cosmic-blue after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-purple text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6"
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-cosmic-purple hover:text-cosmic-blue hover:bg-sky-blue/20 rounded-full"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sky-blue/20 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-cosmic-purple hover:text-cosmic-blue py-2 transition-colors duration-300 font-medium border-b border-transparent hover:border-cosmic-blue/30 text-left"
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-purple text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full mt-4"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
