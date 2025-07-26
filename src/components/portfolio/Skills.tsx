import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Brain, 
  Database, 
  BarChart3, 
  Shield, 
  Award,
  Sparkles,
  ChevronRight
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Analysis",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "Data Cleaning", "Data Manipulation", "Exploratory Data Analysis"],
      color: "text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800/30"
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        "Supervised & Unsupervised Learning", 
        "Deep Learning (TensorFlow, PyTorch)", 
        "Natural Language Processing", 
        "Model Evaluation", 
        "LLM Techniques (LoRA, QLoRA)", 
        "Graph-Based Approaches", 
        "RAG, GraphRAG, RAFT", 
        "Prompt Engineering"
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800/30"
    },
    {
      title: "Agentic AI Tools",
      icon: Sparkles,
      skills: [
        "LangChain", 
        "mem0", 
        "LangGraph", 
        "LangSmith", 
        "OpenRouter", 
        "Needle"
      ],
      color: "text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      borderColor: "border-emerald-200 dark:border-emerald-800/30"
    },
    {
      title: "Generative Engine Optimization",
      icon: Sparkles,
      skills: [
        "Model Output Optimization", 
        "Prompt Refinement", 
        "Response Ranking", 
        "Task-specific Tuning", 
        "Cross-modal Coherence"
      ],
      color: "text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      borderColor: "border-amber-200 dark:border-amber-800/30"
    },
    {
      title: "Data & Visualization",
      icon: BarChart3,
      skills: ["Apache Spark", "Matplotlib", "Seaborn", "Power BI"],
      color: "text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      borderColor: "border-cyan-200 dark:border-cyan-800/30"
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["MySQL", "MongoDB", "AWS"],
      color: "text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800/30"
    },
    {
      title: "Security & Identity",
      icon: Shield,
      skills: ["Okta"],
      color: "text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800/30"
    }
  ];

  const certifications = [
    "IISC QuRP Workshop",
    "Python for Data Science",
    "Design and Analysis of Algorithm",
    "Discrete Mathematics",
    "DevPalooza by NVIDIA"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across AI, data science, and modern development technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm ${category.borderColor} hover:shadow-lg transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className={`p-6 ${category.bgColor} border-b ${category.borderColor}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/80 dark:bg-black/20">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-6">
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group/skill"
                      >
                        <ChevronRight className="w-3 h-3 opacity-60 group-hover/skill:opacity-100 transition-opacity" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skill Count */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {category.skills.length} technologies
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <div className="p-6 border-b border-border bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Certifications & Training</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">
                {skillCategories.reduce((total, category) => total + category.skills.length, 0)}+
              </div>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">{skillCategories.length}</div>
              <p className="text-sm text-muted-foreground">Domains</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">{certifications.length}</div>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">3+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;