
import { Card, CardContent } from '../ui/card';
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Users, 
  Brain,
  Wrench,
  Lightbulb,
  Heart,
  Target
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: typeof Code;
  skills: Array<{ name: string; level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' }>;
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend & UI',
    icon: Palette,
    color: 'from-cosmic-purple to-cosmic-blue',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Material UI', level: 'Intermediate' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Data',
    icon: Database,
    color: 'from-sky-blue to-cosmic-blue',
    skills: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'RESTful APIs', level: 'Advanced' }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    icon: Wrench,
    color: 'from-peach to-cosmic-purple',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Netlify', level: 'Intermediate' },
      { name: 'Figma', level: 'Intermediate' }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Innovation',
    icon: Brain,
    color: 'from-cosmic-blue to-peach',
    skills: [
      { name: 'AI Strategy', level: 'Intermediate' },
      { name: 'Product Thinking', level: 'Advanced' },
      { name: 'System Design', level: 'Intermediate' },
      { name: 'Innovation', level: 'Advanced' }
    ]
  },
  {
    id: 'soft',
    name: 'Leadership & Strategy',
    icon: Heart,
    color: 'from-peach to-sky-blue',
    skills: [
      { name: 'Empathy', level: 'Expert' },
      { name: 'Strategic Thinking', level: 'Advanced' },
      { name: 'Team Leadership', level: 'Advanced' },
      { name: 'Problem Solving', level: 'Expert' },
      { name: 'Communication', level: 'Advanced' }
    ]
  }
];

const SkillsSection = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white';
      case 'Advanced': return 'bg-gradient-to-r from-cosmic-blue to-sky-blue text-white';
      case 'Intermediate': return 'bg-sky-blue/80 text-cosmic-purple';
      case 'Beginner': return 'bg-peach/80 text-cosmic-purple';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-sky-blue/10 via-white to-peach/10">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-cosmic-purple mb-4">My Expertise</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            A diverse toolkit spanning technology, strategy, and human-centered design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-cosmic-purple">{category.name}</h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="flex items-center justify-between p-3 rounded-xl bg-creamy-beige/50 hover:bg-creamy-beige/70 transition-all duration-200 group/skill"
                    >
                      <span className="font-medium text-cosmic-purple group-hover/skill:text-cosmic-blue transition-colors">
                        {skill.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(skill.level)} transition-all duration-200`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-cosmic-purple/60 font-serif italic text-lg">
            "Lifelong learner. Curious always."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
