
import { Card, CardContent } from '../ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const AcademicSection = () => {
  const academics = [
    {
      year: '2024-27',
      course: 'UG in Entrepreneurship & Full Stack Dev',
      institute: 'Institute of Venture Building',
      grade: '65%',
      status: 'Currently Pursuing',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      year: '2024-27',
      course: 'BCA in Data Science',
      institute: 'SRM University',
      grade: 'Pursuing',
      status: 'Currently Pursuing',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      year: '2023',
      course: 'Class XII (State Board)',
      institute: 'YMCA Boys Town, Chennai',
      grade: '70%',
      status: 'Completed',
      statusColor: 'bg-gray-100 text-gray-700'
    },
    {
      year: '2021',
      course: 'Class X (State Board)',
      institute: 'YMCA Boys Town, Chennai',
      grade: 'Pass',
      status: 'Completed',
      statusColor: 'bg-gray-100 text-gray-700'
    }
  ];

  return (
    <section id="academics" className="py-12 bg-gradient-to-br from-sky-blue/10 via-white to-creamy-beige/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-cosmic-purple mb-4">Academic Qualifications</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            Building a strong foundation through diverse academic pursuits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academics.map((academic, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Header with year and status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-cosmic-purple font-semibold">{academic.year}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${academic.statusColor}`}>
                    {academic.status}
                  </span>
                </div>

                {/* Course Details */}
                <div className="space-y-3">
                  <h3 className="text-lg font-serif text-cosmic-purple group-hover:text-cosmic-blue transition-colors duration-300">
                    {academic.course}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-cosmic-purple/70">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{academic.institute}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-cosmic-purple/70">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">{academic.grade}</span>
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

export default AcademicSection;
