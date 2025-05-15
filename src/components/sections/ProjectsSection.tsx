
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  category: string;
}

// Sample project data - you can replace this with your actual projects
const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-library Website',
    description: 'A smart e-library platform that lets users explore, read, and manage digital books seamlessly from any device.',
    image: '/placeholder.svg',
    tags: ['HTML', 'CSS', 'Javascript', 'local storage'],
    // demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/santygit1/E-Library',
    category: 'web',
  },
  {
    id: 2,
    title: 'Personal portfolio Website',
    description: 'Modern and responsive portfolio website built with React',
    image: '/placeholder.svg',
    tags: ['React', 'HTML', 'email.js', 'TailwindCSS'],
    // demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/santygit1/skill-and-story-site',
    category: 'web',
  },
  {
    id: 3,
    title: 'Intella Education Website',
    description: 'Built a responsive website for Intella Education using HTML, CSS and JavaScript enhancing my skills in teamwork, problem-solving, and clean UI development.',
    image: '/placeholder.svg',
    tags: ['HTML','React', 'Google review API', 'Javascript'],
    // demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/santygit1/vibrant-portfolio-kit',
    category: 'web',
  },
  // {
  //   id: 4,
  //   title: 'Portfolio Website',
  //   description: 'Modern and responsive portfolio website built with React',
  //   image: '/placeholder.svg',
  //   tags: ['React', 'Tailwind CSS', 'Framer Motion'],
  //   demoUrl: 'https://example.com',
  //   codeUrl: 'https://github.com',
  //   category: 'web',
  // },
  // {
  //   id: 5,
  //   title: 'Recipe Finder',
  //   description: 'An app to discover and save cooking recipes from various cuisines',
  //   image: '/placeholder.svg',
  //   tags: ['React Native', 'API Integration', 'AsyncStorage'],
  //   demoUrl: 'https://example.com',
  //   codeUrl: 'https://github.com',
  //   category: 'app',
  // },
  // {
  //   id: 6,
  //   title: 'Data Visualization Dashboard',
  //   description: 'Interactive charts and graphs for business analytics',
  //   image: '/placeholder.svg',
  //   tags: ['React', 'D3.js', 'Node.js', 'Express'],
  //   demoUrl: 'https://example.com',
  //   codeUrl: 'https://github.com',
  //   category: 'data',
  // },
];

// Import framer-motion for animations
const MotionCard = motion(Card);

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All' },
  //   // { id: 'web', name: 'Web' },
  //   // { id: 'app', name: 'App' },
  //   // { id: 'data', name: 'Data' },
  ];
  
   const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <div className="section-title">
          <h2 className="mb-2">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my works and projects
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={filter === category.id ? "bg-portfolio-accent hover:bg-portfolio-blue" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <MotionCard
              key={project.id}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {/* Project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Project Image
                </div>
                
                {/* Overlay with buttons on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  {project.demoUrl && (
                    <Button asChild size="sm" className="bg-portfolio-accent hover:bg-portfolio-blue">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button asChild variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
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
