import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Brain, 
  Database, 
  BarChart3, 
  Cpu, 
  Shield, 
  Award,
  Sparkles,
  Layers,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "Deep Learning (TensorFlow, PyTorch)",
        "Natural Language Processing",
        "Large Language Models",
        "Computer Vision",
        "Reinforcement Learning"
      ],
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Generative AI Platforms",
      icon: Sparkles,
      skills: [
        "LangChain & LangGraph",
        "RAG & GraphRAG Systems",
        "Prompt Engineering",
        "OpenAI & Claude APIs",
        "Vector Databases"
      ],
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        "Python", 
        "Java", 
        "C/C++",
        "JavaScript/TypeScript",
        "SQL"
      ],
      color: "text-primary-glow",
      gradient: "from-primary-glow/20 to-primary-glow/5"
    },
    {
      title: "Data Science & Analytics",
      icon: BarChart3,
      skills: [
        "Data Analysis & Visualization",
        "Statistical Modeling", 
        "Apache Spark",
        "Power BI & Tableau",
        "Jupyter Notebooks"
      ],
      color: "text-accent-glow",
      gradient: "from-accent-glow/20 to-accent-glow/5"
    },
    {
      title: "Cloud & Infrastructure",
      icon: Database,
      skills: [
        "AWS Cloud Services",
        "Docker & Kubernetes",
        "MongoDB & MySQL",
        "Redis & Vector DBs",
        "CI/CD Pipelines"
      ],
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Development Tools",
      icon: Layers,
      skills: [
        "Git & GitHub",
        "VS Code & PyCharm",
        "REST APIs",
        "Agile Methodologies",
        "Testing Frameworks"
      ],
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  const certifications = [
    { name: "IISC QuRP Workshop", category: "Research" },
    { name: "Python for Data Science", category: "Programming" },
    { name: "Design and Analysis of Algorithm", category: "Computer Science" },
    { name: "Discrete Mathematics", category: "Mathematics" },
    { name: "DevPalooza by NVIDIA", category: "AI/ML" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive expertise across the full spectrum of AI and data science technologies
          </p>
        </div>

        {/* Skills Grid - Clean & Professional Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Subtle gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6">
                  {/* Category Header - Clean & Minimal */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-background/80 backdrop-blur-sm border border-border/30 group-hover:scale-110 transition-all duration-300">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills List - Professional Format */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-background/40 backdrop-blur-sm border border-transparent hover:border-border/30 hover:bg-background/60 transition-all duration-200 group/item"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${category.color.replace('text-', 'bg-')} group-hover/item:scale-125 transition-transform duration-200`} />
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications Section - Elegant & Professional */}
          <Card className="relative overflow-hidden bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/20 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/30">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Certifications & Training</h3>
                  <p className="text-sm text-muted-foreground mt-1">Professional development and continuous learning</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.name}
                    className="group p-4 rounded-xl bg-background/40 backdrop-blur-sm border border-border/20 hover:border-primary/30 hover:bg-background/60 transition-all duration-300"
                    style={{ animationDelay: `${0.7 + (index * 0.1)}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200 text-sm leading-tight">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 font-medium">
                          {cert.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Skills Summary - Professional Dashboard */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { 
                  value: skillCategories.reduce((total, category) => total + category.skills.length, 0), 
                  label: "Technical Skills", 
                  color: "text-primary",
                  bgColor: "from-primary/10 to-primary/5"
                },
                { 
                  value: skillCategories.length, 
                  label: "Specializations", 
                  color: "text-accent",
                  bgColor: "from-accent/10 to-accent/5"
                },
                { 
                  value: certifications.length, 
                  label: "Certifications", 
                  color: "text-primary-glow",
                  bgColor: "from-primary-glow/10 to-primary-glow/5"
                },
                { 
                  value: "3+", 
                  label: "Years Experience", 
                  color: "text-accent-glow",
                  bgColor: "from-accent-glow/10 to-accent-glow/5"
                }
              ].map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="group relative overflow-hidden bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-elegant"
                  style={{ animationDelay: `${0.9 + (index * 0.1)}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative p-6 text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;