
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Rocket, Calendar, Users, ArrowRight } from 'lucide-react';

const LiveProjectsSection = () => {
  return (
    <section id="live-projects" className="py-12 bg-gradient-to-br from-sky-blue/10 via-creamy-beige/20 to-peach/10">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-cosmic-purple mb-4">Live Projects</h2>
          <p className="text-cosmic-purple/70 max-w-2xl mx-auto text-lg">
            Currently building solutions that matter
          </p>
        </div>
        
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl animate-fade-in-up max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Project Icon & Status */}
              <div className="flex-shrink-0 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Co-Founder
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif text-cosmic-purple group-hover:text-cosmic-blue transition-colors duration-300 mb-2">
                    Ecovo
                  </h3>
                  <div className="flex items-center gap-2 text-cosmic-purple/60 justify-center lg:justify-start mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Jan 2025 – Present</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-cosmic-purple/60 mt-1 flex-shrink-0" />
                    <p className="text-cosmic-purple/80 leading-relaxed">
                      Created an EV charging slot app, developed brand assets using Canva, AI tools, and ChatGPT.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-cosmic-purple/60 mt-1 flex-shrink-0" />
                    <p className="text-cosmic-purple/80 leading-relaxed">
                      Researched EV competitors, market trends, and systems to guide product planning and GTM strategy.
                    </p>
                  </div>
                </div>

                <Button 
                  className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-purple text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3 group/btn"
                >
                  See Strategy
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LiveProjectsSection;
