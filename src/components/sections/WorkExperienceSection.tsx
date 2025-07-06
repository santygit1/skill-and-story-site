
import { Card, CardContent } from '../ui/card';
import { Briefcase, Calendar, Star } from 'lucide-react';

const WorkExperienceSection = () => {
  const experiences = [
    {
      title: 'Crew Member',
      company: "McDonald's",
      timeline: 'June 2024 – Sept 2024',
      impacts: [
        'Delivered smooth operations & service, ensuring fast execution, team coordination, and strong customer experience.',
        'Achieved 85% CRM score by optimizing workflows and frontline communication.'
      ],
      color: 'from-yellow-400 to-red-500'
    },
    {
      title: 'Crew Member',
      company: 'Flipkart',
      timeline: 'Jan 2024 – Sept 2024',
      impacts: [
        'Managed bulk order logistics & last-mile delivery, improving field ops performance.',
        'Resolved customer issues and met 85% CRM satisfaction rate.'
      ],
      color: 'from-blue-500 to-orange-500'
    },
    {
      title: 'Freelance Event Coordinator',
      company: 'Freelance',
      timeline: 'Sep 2023 – Jan 2024',
      impacts: [
        'Planned and executed 4+ events (50–100 guests); streamlined vendors and on-site ops.',
        'Praised for dependable delivery and smooth event coordination.'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="py-12 bg-gradient-to-br from-white via-creamy-beige/20 to-sky-blue/10">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-cosmic-purple mb-4">Work Experience</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            Building expertise through diverse professional experiences
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Icon & Timeline */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-cosmic-purple/60 justify-center md:justify-start">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{experience.timeline}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-serif text-cosmic-purple group-hover:text-cosmic-blue transition-colors duration-300 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-cosmic-blue font-semibold">{experience.company}</p>
                    </div>

                    <div className="space-y-3">
                      {experience.impacts.map((impact, impactIndex) => (
                        <div key={impactIndex} className="flex items-start gap-3">
                          <Star className="w-4 h-4 text-cosmic-purple/60 mt-1 flex-shrink-0" />
                          <p className="text-cosmic-purple/80 leading-relaxed">{impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
