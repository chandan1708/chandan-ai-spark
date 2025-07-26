import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Mail, Phone, User, BookOpen, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Raised in Bengaluru, I found myself drawn to how machines understand language and more curiously, how they forget. In the drift between data and dialogue, I now work as a GenAI Engineer — not to teach machines to speak, but to listen with memory.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Profile Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Personal Info Card */}
            <Card className="group p-8 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/20 transition-all duration-500 hover:shadow-elegant animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-background/80 backdrop-blur-sm border border-border/30 group-hover:scale-110 transition-all duration-300">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary group-hover:text-primary-glow transition-colors">Personal Info</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 7996484276</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm">chandan17.ramesh@gmail.com</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Philosophy Card */}
            <Card className="group lg:col-span-2 p-8 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/20 transition-all duration-500 hover:shadow-elegant animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-background/80 backdrop-blur-sm border border-border/30 group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary group-hover:text-primary-glow transition-colors">Philosophy & Journey</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-accent">My Journey</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    My path has never been a straight line — it bent with curiosity, sparked with code, and still moves in rhythm with questions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This is not the destination. It's the becoming.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">Generative AI</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">NLP</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">Machine Learning</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">Deep Learning</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">AI Research</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">Data Science</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Education Section */}
          <Card className="group p-8 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/20 transition-all duration-500 hover:shadow-elegant animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/30 group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary group-hover:text-primary-glow transition-colors">Education</h3>
                <p className="text-sm text-muted-foreground mt-1">Academic foundation and continuous learning</p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bachelor's Degree */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <div className="pl-8">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">Bachelor of Engineering</h4>
                      <p className="text-accent font-medium">Artificial Intelligence and Data Science</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Visvesvaraya Technological University
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 bg-muted/30 rounded-lg px-3 py-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Dec 2021 - May 2025</span>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      CGPA: 8.56
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strong foundation in AI, Data Science, and advanced statistical methods, 
                    complemented by programming and computational skills.
                  </p>
                </div>
              </div>

              {/* Pre-University */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary/50 rounded-full"></div>
                <div className="pl-8">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10 mt-1">
                      <BookOpen className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">Pre-University Course (PUC)</h4>
                      <p className="text-accent font-medium">Physics, Chemistry, Mathematics, Computer Science</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        St. Claret Pre-University College, Bengaluru
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 bg-muted/30 rounded-lg px-3 py-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Jun 2019 - July 2021</span>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      87.16%
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive science education with strong emphasis on mathematical foundations and computational thinking.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;