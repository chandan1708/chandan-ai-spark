import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Analysis",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "Data Cleaning", "Data Manipulation", "Exploratory Data Analysis (EDA)"],
      color: "text-primary"
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: ["Supervised & Unsupervised Learning", "Deep Learning (TensorFlow, PyTorch)", "Natural Language Processing (NLP)", "Model Evaluation", "LLM Techniques (LoRA, QLoRA, Graph-Based Approaches, RAG, GraphRAG, RAFT)", "Prompt Engineering", "LangChain and Agentic AI Tools (mem0, LangGraph, LangSmith, OpenRouter, Needle)"],
      color: "text-accent"
    },
    {
      title: "Generative Engine Optimization (GEO)",
      icon: Brain,
      skills: ["Optimization strategies for generative model outputs", "Prompt refinement", "Response ranking", "Retrieval-augmented generation (RAG)", "Task-specific tuning to enhance generative relevance and coherence across modalities"],
      color: "text-primary-glow"
    },
    {
      title: "Big Data & Visualization",
      icon: BarChart3,
      skills: ["Apache Spark", "Matplotlib", "Seaborn", "Power BI"],
      color: "text-accent-glow"
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["MySQL", "MongoDB", "AWS"],
      color: "text-primary"
    },
    {
      title: "Security & Identity Management",
      icon: Database,
      skills: ["Okta"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full spectrum of AI and data science technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-secondary group-hover:bg-primary transition-colors duration-300`}>
                  <category.icon className={`w-6 h-6 ${category.color} group-hover:text-primary-foreground`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="text-accent">Certifications & Training</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "IISC QuRP Workshop",
              "Python for Data Science",
              "Design and Analysis of Algorithm",
              "Discrete Mathematics",
              "DevPalooza by NVIDIA"
            ].map((cert) => (
              <Badge 
                key={cert}
                variant="outline"
                className="text-sm py-2 px-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;