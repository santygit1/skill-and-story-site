
import { Card, CardContent } from '../ui/card';
import { Trophy, Target, Lightbulb, Code, Award, Users } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Elbuddy',
      description: 'Built a companionship model for elder-youth connection using persona insights & design thinking.',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'PM Project',
      description: 'Strategized an edtech platform using research, segmentation & lifecycle planning.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Capstone (ZenVerse)',
      description: 'Mapped founder journey via interviews, learning startup mindset & narrative building.',
      icon: Lightbulb,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Intella',
      description: 'Built responsive frontend using React & HTML; enhanced user experience.',
      icon: Code,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Startup Competition (1st Prize)',
      description: 'Proposed a post-quantum cryptography startup idea for digital security.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Retail Immersion (2nd Prize)',
      description: 'Analyzed in-store behavior, proposed loyalty strategies using market psychology.',
      icon: Award,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="achievements" className="py-12 bg-gradient-to-br from-creamy-beige/20 via-white to-sky-blue/10">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-cosmic-purple mb-4">Achievements & Co-Curricular</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            Recognition through innovation and strategic thinking
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif text-cosmic-purple group-hover:text-cosmic-blue transition-colors duration-300 mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-cosmic-purple/70 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
