import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Github, ExternalLink, BookOpen, GraduationCap, User } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
  category: 'web' | 'ai' | 'mobile' | 'all';
  icon: typeof BookOpen;
}

// Project data with enhanced details and proper images
const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-library Website',
    description: 'A smart e-library platform that lets users explore, read, and manage digital books seamlessly from any device with intuitive search and reading features.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    codeUrl: 'https://github.com/santygit1/E-Library',
    category: 'web',
    icon: BookOpen
  },
  {
    id: 2,
    title: 'Intella Education Website',
    description: 'Built a responsive website for Intella Education using modern web technologies, enhancing user experience with clean UI and seamless navigation for educational content.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    tags: ['HTML', 'React', 'Google Review API', 'JavaScript'],
    codeUrl: 'https://github.com/santygit1/vibrant-portfolio-kit',
    category: 'web',
    icon: GraduationCap
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'Modern and responsive portfolio website built with React, showcasing projects and skills with elegant animations and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Email.js', 'Framer Motion'],
    codeUrl: 'https://github.com/santygit1/skill-and-story-site',
    category: 'web',
    icon: User
  }
];

const categories = [
  { id: 'all', name: 'All Projects', count: projectsData.length },
  { id: 'web', name: 'Web Apps', count: projectsData.filter(p => p.category === 'web').length },
  { id: 'ai', name: 'AI Projects', count: projectsData.filter(p => p.category === 'ai').length }
];

const MotionCard = motion(Card);

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-creamy-beige/20 to-sky-blue/10">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-cosmic-purple mb-4">My Projects</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            A showcase of innovative solutions and creative implementations
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white shadow-lg' 
                  : 'border-cosmic-purple/30 text-cosmic-purple hover:bg-cosmic-purple/10'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 rounded-full bg-white/20 text-xs">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <MotionCard
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl hover:border-cosmic-blue/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-cosmic-purple/10 to-cosmic-blue/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cosmic-purple/20"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.parentElement!.innerHTML = `
                      <div class="flex items-center justify-center h-full bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20">
                        <div class="text-center">
                          <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-cosmic-purple" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                            </svg>
                          </div>
                          <p class="text-cosmic-purple font-semibold">${project.title}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <project.icon className="w-5 h-5 text-cosmic-purple" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/90 via-cosmic-purple/50 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-all duration-300">
                  {project.codeUrl && (
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-cosmic-purple transition-all duration-300 rounded-full"
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-cosmic-purple transition-all duration-300 rounded-full"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-cosmic-purple mb-3 group-hover:text-cosmic-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-cosmic-purple/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      className="bg-sky-blue/20 text-cosmic-purple hover:bg-cosmic-purple/20 transition-colors duration-200 rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
