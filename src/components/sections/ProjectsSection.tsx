
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
<<<<<<< HEAD
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
=======
    description: 'Built a responsive digital library using HTML, CSS and JavaScript, designed for easy book browsing and a smooth reading experience on all devices.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
    codeUrl: 'https://github.com/yourusername/elibrary', // Replace with your actual GitHub URL
  },
  {
    id: 2,
    title: 'Intella Education Website',
    description: 'Worked closely with an amazing team to craft a responsive website for Intella Education using HTML, CSS, JavaScript and React.js.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    codeUrl: 'https://github.com/yourusername/intella-education', // Replace with your actual GitHub URL
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'Built a personal portfolio using React.js, JavaScript, Tailwind CSS and Email.js to showcase my projects, skills, and full stack development experience with a clean, responsive design.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['JavaScript', 'React.js', 'Tailwind CSS', 'Email.js'],
    codeUrl: 'https://github.com/yourusername/portfolio', // Replace with your actual GitHub URL
  },
>>>>>>> 44f48d7e783d01eb91f77065a1e06895f24a99f2
];

// Import framer-motion for animations
const MotionCard = motion(Card);

const ProjectsSection = () => {
<<<<<<< HEAD
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
  
=======
>>>>>>> 44f48d7e783d01eb91f77065a1e06895f24a99f2
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my works and projects
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
                {/* Project image */}
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
