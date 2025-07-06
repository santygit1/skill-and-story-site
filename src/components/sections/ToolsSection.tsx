
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
  logo: string;
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
      { name: 'HTML5', category: 'frontend', logo: '🌐' },
      { name: 'CSS3', category: 'frontend', logo: '🎨' },
      { name: 'JavaScript (ES6+)', category: 'frontend', logo: '⚡' },
      { name: 'React.js', category: 'frontend', logo: '⚛️' },
      { name: 'Node.js', category: 'backend', logo: '🟢' },
      { name: 'Express.js', category: 'backend', logo: '🚀' },
      { name: 'MongoDB', category: 'database', logo: '🍃' },
      { name: 'Git', category: 'tools', logo: '📝' },
      { name: 'GitHub', category: 'tools', logo: '🐙' },
      { name: 'VS Code', category: 'tools', logo: '💻' }
    ]
  },
  {
    id: 'product',
    title: 'Product Management & Business Strategy',
    subtitle: 'Bridging user needs with scalable strategies.',
    icon: Target,
    color: 'from-sky-blue to-cosmic-blue',
    tools: [
      { name: 'Jira', category: 'management', logo: '📋' },
      { name: 'Trello', category: 'management', logo: '📌' },
      { name: 'Notion', category: 'management', logo: '📓' },
      { name: 'Excel', category: 'analysis', logo: '📊' },
      { name: 'Google Analytics', category: 'analytics', logo: '📈' },
      { name: 'Business Model Canvas', category: 'strategy', logo: '🎯' }
    ]
  },
  {
    id: 'design',
    title: 'Design, No-Code & Marketing',
    subtitle: 'From ideas to impact — visual, no-code & growth tools.',
    icon: Palette,
    color: 'from-peach to-cosmic-purple',
    tools: [
      { name: 'Canva', category: 'design', logo: '🎨' },
      { name: 'Figma', category: 'design', logo: '🎭' },
      { name: 'Webflow', category: 'no-code', logo: '🌊' },
      { name: 'Mixpanel', category: 'analytics', logo: '📊' },
      { name: 'WordPress', category: 'no-code', logo: '📝' },
      { name: 'Meta Ads', category: 'marketing', logo: '📢' },
      { name: 'AI Tools', category: 'ai', logo: '🤖' }
    ]
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-12 bg-gradient-to-br from-sky-blue/10 via-white to-peach/10">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-cosmic-purple mb-4">Tools & Technologies</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning development, strategy, and creative domains
          </p>
        </div>
        
        <div className="space-y-8">
          {toolsData.map((category, categoryIndex) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-cosmic-purple mb-1">{category.title}</h3>
                    <p className="text-cosmic-purple/70">{category.subtitle}</p>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={tool.name} 
                      className="group/tool relative flex flex-col items-center p-4 rounded-xl bg-creamy-beige/50 hover:bg-creamy-beige/70 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                      title={tool.name}
                    >
                      <div className="text-3xl mb-3 group-hover/tool:scale-110 transition-transform duration-300">
                        {tool.logo}
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
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-cosmic-purple/60 font-serif italic text-lg">
            "Lifelong learner. Curious always."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
