
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '../ui/card';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
}

const skillsData: Skill[] = [
  // Frontend Skills
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Redux', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  
  // Backend Skills
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 70, category: 'backend' },
  { name: 'RESTful APIs', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 65, category: 'backend' },
  
  // Tools & Others
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Webpack', level: 75, category: 'tools' },
  { name: 'Jest', level: 70, category: 'tools' },
  { name: 'CI/CD', level: 65, category: 'tools' },
];

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${skillsData[index % skillsData.length].level}%`;
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & Others' }
  ];
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container" ref={skillsRef}>
        <div className="section-title">
          <h2 className="mb-2">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <Card key={skill.name} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                          <div 
                            className="skill-progress-bar h-full bg-portfolio-accent rounded-full transition-all duration-1000 ease-out"
                            style={{ width: '0%' }} // Initial width, will be animated
                          ></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
