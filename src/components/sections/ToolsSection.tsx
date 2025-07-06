
import { Card, CardContent } from '../ui/card';
import { 
  Code, 
  Database, 
  Palette, 
  Users, 
  BarChart3,
  Lightbulb,
  Brain,
  Target,
  Globe,
  Wrench
} from 'lucide-react';

interface Tool {
  name: string;
  category: string;
}

interface ToolCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Code;
  color: string;
  tools: Tool[];
}

const toolsData: ToolCategory[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    subtitle: 'Crafting dynamic web apps with robust backend integration.',
    icon: Code,
    color: 'from-cosmic-purple to-cosmic-blue',
    tools: [
      { name: 'HTML5', category: 'frontend' },
      { name: 'CSS3', category: 'frontend' },
      { name: 'JavaScript (ES6+)', category: 'frontend' },
      { name: 'React.js', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Express.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Git', category: 'tools' },
      { name: 'GitHub', category: 'tools' },
      { name: 'VS Code', category: 'tools' }
    ]
  },
  {
    id: 'product',
    title: 'Product Management & Business Strategy',
    subtitle: 'Bridging user needs with scalable strategies.',
    icon: Target,
    color: 'from-sky-blue to-cosmic-blue',
    tools: [
      { name: 'Jira', category: 'management' },
      { name: 'Trello', category: 'management' },
      { name: 'Notion', category: 'management' },
      { name: 'Excel', category: 'analysis' },
      { name: 'Google Analytics', category: 'analytics' },
      { name: 'Business Model Canvas', category: 'strategy' }
    ]
  },
  {
    id: 'design',
    title: 'Design, No-Code & Marketing',
    subtitle: 'From ideas to impact — visual, no-code & growth tools.',
    icon: Palette,
    color: 'from-peach to-cosmic-purple',
    tools: [
      { name: 'Canva', category: 'design' },
      { name: 'Figma', category: 'design' },
      { name: 'Webflow', category: 'no-code' },
      { name: 'Mixpanel', category: 'analytics' },
      { name: 'WordPress', category: 'no-code' },
      { name: 'Meta Ads', category: 'marketing' },
      { name: 'AI Tools', category: 'ai' }
    ]
  }
];

const ToolsSection = () => {
  const getToolIcon = (toolName: string) => {
    const iconMap: { [key: string]: typeof Code } = {
      'HTML5': Code,
      'CSS3': Palette,
      'JavaScript (ES6+)': Code,
      'React.js': Code,
      'Node.js': Database,
      'Express.js': Database,
      'MongoDB': Database,
      'Git': Wrench,
      'GitHub': Wrench,
      'VS Code': Wrench,
      'Jira': Users,
      'Trello': Users,
      'Notion': Users,
      'Excel': BarChart3,
      'Google Analytics': BarChart3,
      'Business Model Canvas': Target,
      'Canva': Palette,
      'Figma': Palette,
      'Webflow': Globe,
      'Mixpanel': BarChart3,
      'WordPress': Globe,
      'Meta Ads': Target,
      'AI Tools': Brain
    };
    
    return iconMap[toolName] || Lightbulb;
  };

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-sky-blue/10 via-white to-peach/10">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-cosmic-purple mb-4">Tools & Technologies</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning development, strategy, and creative domains
          </p>
        </div>
        
        <div className="space-y-12">
          {toolsData.map((category, categoryIndex) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-cosmic-purple mb-1">{category.title}</h3>
                    <p className="text-cosmic-purple/70">{category.subtitle}</p>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.tools.map((tool, toolIndex) => {
                    const IconComponent = getToolIcon(tool.name);
                    return (
                      <div 
                        key={tool.name} 
                        className="group/tool relative flex flex-col items-center p-4 rounded-xl bg-creamy-beige/50 hover:bg-creamy-beige/70 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                        title={tool.name}
                      >
                        <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-white/80 group-hover/tool:bg-cosmic-purple/10 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-cosmic-purple group-hover/tool:text-cosmic-blue transition-colors duration-300" />
                        </div>
                        <span className="text-sm font-medium text-cosmic-purple group-hover/tool:text-cosmic-blue transition-colors duration-300 text-center">
                          {tool.name}
                        </span>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-cosmic-purple text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover/tool:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                          {tool.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-cosmic-purple"></div>
                        </div>
                      </div>
                    );
                  })}
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

export default ToolsSection;
