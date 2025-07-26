import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A motivated and detail-oriented data scientist with a strong foundation in statistics, 
            data manipulation, visualization, and model development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">Phone:</span>
                  <span>+91 7996484276</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">Email:</span>
                  <span>chandan17.ramesh@gmail.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-accent">Objective</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking to leverage technical and analytical skills to solve complex problems 
                  and drive business insights in a data scientist role. Passionate about using 
                  AI to create meaningful impact in real-world applications.
                </p>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
              
              <div className="space-y-6">
                {/* Bachelor's Degree */}
                <div className="border-l-2 border-primary pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Bachelor of Engineering</h4>
                      <p className="text-accent">Artificial Intelligence and Data Science</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    SDM Institute of Technology, Ujire
                  </p>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Dec 2021 - Present</span>
                    </div>
                    <Badge variant="secondary">CGPA: 7.84</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Strong foundation in AI, Data Science, and advanced statistical methods, 
                    complemented by programming and computational skills.
                  </p>
                </div>

                {/* Pre-University */}
                <div className="border-l-2 border-accent pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Pre-University Course (PUC)</h4>
                      <p className="text-accent">Physics, Chemistry, Mathematics, Computer Science</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    St. Claret Pre-University College, Bengaluru
                  </p>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Jun 2019 - July 2021</span>
                    </div>
                    <Badge variant="secondary">87.16%</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;