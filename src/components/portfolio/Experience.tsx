import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Gen AI Engineer",
      company: "WordWise Language Labs",
      location: "Bengaluru, Karnataka",
      period: "May 2025 - Present",
      type: "Current",
      achievements: [
        "Building a platform that connects consumer brands with emerging markets across India's heartland through authentic, impactful content created by acclaimed regional writers",
        "Unlocking access to information, commerce, and opportunity while driving inclusive growth and local empowerment",
        "Developed advanced AI systems enhancing brand-consumer connections in regional markets",
        "Implemented scalable content generation pipelines for multi-regional deployment"
      ],
      skills: ["LangGraph", "mem0", "Okta", "Agentic AI tools", "LangSmith", "OpenRouter", "Needle", "Python"]
    },
    {
      title: "Gen-AI Engineer Intern",
      company: "WordWise Language Labs",
      location: "Bengaluru, Karnataka",
      period: "August 2024 - May 2025",
      type: "Completed",
      achievements: [
        "Developed an inpainting model and hyperlocal language model, enhancing language processing capabilities by 30%",
        "Streamlined workflows using advanced language modeling, improving collaboration by 25% and overall efficiency by 40%",
        "Worked on image translation, retrieval-augmented generation (RAG), fine-tuning, sequence-to-sequence (S2S) models",
        "Implemented automatic speech recognition (ASR) and text-to-speech (TTS) technologies"
      ],
      skills: ["Generative AI", "RAG", "NLP", "Image Translation", "ASR", "TTS", "Fine-tuning"]
    },
    {
      title: "Research and Development Intern",
      company: "Exicom Energy-Systems Limited",
      location: "Bengaluru, Karnataka",
      period: "Nov 2023 - April 2024",
      type: "Completed",
      achievements: [
        "Developed automated Python scripts to streamline data processing, boosting efficiency by 30%",
        "Reduced processing time by 25% through large dataset analysis and optimization",
        "Designed an embedded dashboard using PySide6 and PyQt6, utilizing company's SDE calculation sheets",
        "Improved analysis efficiency over Lanview, enhancing stakeholder understanding by 40% and reducing manual effort by 50%"
      ],
      skills: ["Python", "Data Processing", "PySide6", "PyQt6", "Dashboard Development", "Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in AI development, research, and building scalable solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden p-8 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/20 transition-all duration-500 hover:shadow-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-lg font-medium text-accent mt-1">
                    <Building2 className="w-5 h-5" />
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Badge 
                    variant={exp.type === "Current" ? "default" : "secondary"}
                    className="w-fit"
                  >
                    {exp.type}
                  </Badge>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
                
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;