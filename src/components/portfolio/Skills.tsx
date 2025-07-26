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
      title: "Programming & Analysis",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "Data Cleaning", "Data Manipulation", "Exploratory Data Analysis (EDA)"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        "Supervised & Unsupervised Learning", 
        "Deep Learning (TensorFlow, PyTorch)", 
        "Natural Language Processing (NLP)", 
        "Model Evaluation", 
        "LLM Techniques (LoRA, QLoRA)", 
        "Graph-Based Approaches", 
        "RAG, GraphRAG, RAFT", 
        "Prompt Engineering", 
        "LangChain", 
        "mem0", 
        "LangGraph", 
        "LangSmith", 
        "OpenRouter", 
        "Needle"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    },
    {
      title: "Generative Engine Optimization (GEO)",
      icon: Sparkles,
      skills: [
        "Optimization strategies for generative model outputs", 
        "Prompt refinement", 
        "Response ranking", 
        "Retrieval-augmented generation (RAG)", 
        "Task-specific tuning", 
        "Generative relevance enhancement", 
        "Cross-modal coherence optimization"
      ],
      color: "text-primary-glow",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/30"
    },
    {
      title: "Big Data & Visualization",
      icon: BarChart3,
      skills: ["Apache Spark", "Matplotlib", "Seaborn", "Power BI"],
      color: "text-accent-glow",
      bgColor: "bg-accent/5",
      borderColor: "border-accent/30"
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["MySQL", "MongoDB", "AWS"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      title: "Security & Identity Management",
      icon: Shield,
      skills: ["Okta"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
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

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className={`p-6 bg-card/50 backdrop-blur-sm ${category.borderColor} hover:shadow-glow transition-all duration-500 group animate-slide-up hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-all duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 group/skill"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-primary group-hover/skill:scale-125 transition-transform"></div>
                      <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-4 flex justify-end">
                  <Badge 
                    variant="outline" 
                    className={`${category.borderColor} ${category.color} text-xs`}
                  >
                    {category.skills.length} skills
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-accent/10">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary">Certifications & Training</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${0.7 + (index * 0.1)}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cert.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills Summary */}
          <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">
                  {skillCategories.reduce((total, category) => total + category.skills.length, 0)}+
                </div>
                <p className="text-sm text-muted-foreground">Technical Skills</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-accent mb-2">
                  {skillCategories.length}
                </div>
                <p className="text-sm text-muted-foreground">Skill Categories</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">
                  {certifications.length}
                </div>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;