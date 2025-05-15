
<<<<<<< HEAD
// import { useEffect, useRef } from 'react';
// import { Card, CardContent } from '../ui/card';

// interface Skill {
//   name: string;
//   level: number; // 0-100
//   category: 'frontend' | 'backend' | 'tools';
// }

// const skillsData: Skill[] = [
//   // Frontend Skills
//   { name: 'React', level: 90, category: 'frontend' },
//   { name: 'JavaScript', level: 85, category: 'frontend' },
//   { name: 'TypeScript', level: 80, category: 'frontend' },
//   { name: 'HTML/CSS', level: 95, category: 'frontend' },
//   // { name: 'Redux', level: 85, category: 'frontend' },
//   { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  
//   // Backend Skills
//   { name: 'Node.js', level: 75, category: 'backend' },
//   { name: 'Express', level: 70, category: 'backend' },
//   { name: 'RESTful APIs', level: 80, category: 'backend' },
//   { name: 'MongoDB', level: 65, category: 'backend' },
  
//   // Tools & Others
//   { name: 'Git', level: 85, category: 'tools' },
//   { name: 'Material ui', level: 75, category: 'tools' },
//   { name: 'email.js', level: 70, category: 'tools' },
//   { name: 'CI/CD', level: 65, category: 'tools' },
// ];

// const SkillsSection = () => {
//   const skillsRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const progressBars = document.querySelectorAll('.skill-progress-bar');
//             progressBars.forEach((bar, index) => {
//               setTimeout(() => {
//                 (bar as HTMLElement).style.width = `${skillsData[index % skillsData.length].level}%`;
//               }, index * 100);
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
    
//     if (skillsRef.current) {
//       observer.observe(skillsRef.current);
//     }
    
//     return () => {
//       if (skillsRef.current) {
//         observer.unobserve(skillsRef.current);
//       }
//     };
//   }, []);
  
//   const categories = [
//     { id: 'frontend', name: 'Frontend' },
//     { id: 'backend', name: 'Backend' },
//     { id: 'tools', name: 'Tools & Others' }
//   ];
  
//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="section-container" ref={skillsRef}>
//         <div className="section-title">
//           <h2 className="mb-2">My Skills</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Technologies and tools I work with
//           </p>
//         </div>
        
//         <div className="space-y-12">
//           {categories.map((category) => (
//             <div key={category.id} className="animate-fade-in-up">
//               <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {skillsData
//                   .filter((skill) => skill.category === category.id)
//                   .map((skill, index) => (
//                     <Card key={skill.name} className="overflow-hidden">
//                       <CardContent className="p-6">
//                         <div className="flex justify-between mb-2">
//                           <span className="font-medium">{skill.name}</span>
//                           <span className="text-gray-500">{skill.level}%</span>
//                         </div>
//                         <div className="w-full bg-gray-200 h-2 rounded-full">
//                           <div 
//                             className="skill-progress-bar h-full bg-portfolio-accent rounded-full transition-all duration-1000 ease-out"
//                             style={{ width: '0%' }} // Initial width, will be animated
//                           ></div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


import { useEffect, useRef } from 'react';
=======
>>>>>>> 44f48d7e783d01eb91f77065a1e06895f24a99f2
import { Card, CardContent } from '../ui/card';

interface SkillCategory {
  id: string;
  name: string;
<<<<<<< HEAD
  category: 'frontend' | 'backend' | 'tools';
}

const skillsData: Skill[] = [
  // Frontend Skills
  { name: 'React', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  
  // Backend Skills
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'APIs', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  
  // Tools & Others
  { name: 'Git', category: 'tools' },
  { name: 'Material UI', category: 'tools' },
  { name: 'email.js', category: 'tools' },
  // { name: 'CI/CD', category: 'tools' },
];

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // You can keep this if you want to animate something else in the future
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
  
=======
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
>>>>>>> 44f48d7e783d01eb91f77065a1e06895f24a99f2
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
<<<<<<< HEAD
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <Card key={skill.name} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          {/* Removed the level display */}
                        </div>
                        {/* Removed the progress bar */}
                      </CardContent>
                    </Card>
                  ))}
=======
              <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 text-center">
                      <span className="font-medium">{skill}</span>
                    </CardContent>
                  </Card>
                ))}
>>>>>>> 44f48d7e783d01eb91f77065a1e06895f24a99f2
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;