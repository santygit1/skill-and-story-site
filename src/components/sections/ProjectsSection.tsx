
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeUrl?: string;
}

// Project data based on your requirements
const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-library Website',
    description: 'Built a responsive digital library using HTML, CSS and JavaScript, designed for easy book browsing and a smooth reading experience on all devices.',
    image: '/elibrary-project.jpg', // You'll need to add this image
    tags: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
    codeUrl: 'https://github.com/yourusername/elibrary', // Replace with your actual GitHub URL
  },
  {
    id: 2,
    title: 'Intella Education Website',
    description: 'Worked closely with an amazing team to craft a responsive website for Intella Education using HTML, CSS, JavaScript and React.js.',
    image: '/intella-project.jpg', // You'll need to add this image
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    codeUrl: 'https://github.com/yourusername/intella-education', // Replace with your actual GitHub URL
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'Built a personal portfolio using React.js, JavaScript, Tailwind CSS and Email.js to showcase my projects, skills, and full stack development experience with a clean, responsive design.',
    image: '/portfolio-project.jpg', // You'll need to add this image
    tags: ['JavaScript', 'React.js', 'Tailwind CSS', 'Email.js'],
    codeUrl: 'https://github.com/yourusername/portfolio', // Replace with your actual GitHub URL
  },
];

// Import framer-motion for animations
const MotionCard = motion(Card);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <MotionCard
              key={project.id}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {/* Project image - you'll need to add these images to your project */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.parentElement!.className = "absolute inset-0 flex items-center justify-center bg-gray-200";
                      target.parentElement!.innerHTML = `<div class="text-gray-500">${project.title}</div>`;
                    }}
                  />
                </div>
                
                {/* Overlay with button on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  {project.codeUrl && (
                    <Button asChild variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
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
