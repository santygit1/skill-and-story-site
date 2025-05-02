
import { Card, CardContent } from '../ui/card';

interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Material UI']
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase']
  },
  {
    id: 'tools',
    name: 'Tools & Others',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Netlify', 'Figma']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.id} className="animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 text-center">
                      <span className="font-medium">{skill}</span>
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
