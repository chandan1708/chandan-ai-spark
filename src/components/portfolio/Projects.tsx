import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, TrendingUp } from "lucide-react";
import alpSurveillance from "@/assets/alp-surveillance.jpg";
import accirescue from "@/assets/accirescue.jpg";
import hospitalManagement from "@/assets/hospital-management.jpg";

const Projects = () => {
  const projects = [
    {
      title: "ALP Intelligence Surveillance",
      period: "Jun 2024 - Aug 2024",
      description: "Advanced AI surveillance system with real-time phone usage detection, plastic/waste litter monitoring, and continuous attendance tracking.",
      achievements: [
        "Achieved 89% accuracy in real-time detection",
        "Reduced manual oversight by 40%",
        "Integrated deep learning and computer vision techniques",
        "Enhanced operational efficiency and behavior analysis"
      ],
      technologies: ["Computer Vision", "Deep Learning", "Real-time Processing", "Behavior Analysis"],
      image: alpSurveillance,
      status: "Completed",
      impact: "40% reduction in manual oversight"
    },
    {
      title: "ACCIRESCUE",
      period: "Sep 2024 - Jan 2025",
      description: "AI-powered accident detection and emergency routing system leveraging live CCTV feeds and real-time traffic data for instant alerts and optimal ambulance routing.",
      achievements: [
        "Improved emergency response efficiency by 40%",
        "Enhanced collaboration among responders and traffic authorities",
        "Ensured timely medical care and swift path clearance",
        "Integrated YOLOv11 for accurate accident detection"
      ],
      technologies: ["YOLOv11", "Computer Vision", "Streamlit", "Real-time Data", "Emergency Systems"],
      image: accirescue,
      status: "In Progress",
      impact: "40% improvement in emergency response"
    },
    {
      title: "Hospital Management System",
      period: "Dec 2023 - Apr 2024",
      description: "Scalable and secure Python-based hospital management system improving workflow efficiency through streamlined patient/doctor management.",
      achievements: [
        "Improved workflow efficiency by 40%",
        "Streamlined patient and doctor management",
        "Automated appointment scheduling and report generation",
        "Implemented secure data handling with MySQL integration"
      ],
      technologies: ["Python", "CustomTkinter", "MySQL", "GUI Development", "Database Design"],
      image: hospitalManagement,
      status: "Completed",
      impact: "40% efficiency improvement"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI solutions that solve real-world problems and drive meaningful impact
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Project Image */}
                <div className="lg:col-span-2 relative overflow-hidden">
                  <div className="aspect-video lg:aspect-square relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:from-transparent lg:to-background/80"></div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={project.status === "Completed" ? "secondary" : "default"}
                      className="backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-3 p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>
                  </div>

                  {/* Impact Metric */}
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-accent font-medium">{project.impact}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        const githubUrls = {
                          "ALP Intelligence Surveillance": "https://github.com/chandan1708/ALP-Intelligence-Surveillance",
                          "ACCIRESCUE": "https://github.com/chandan1708/ACCIRESCUE",
                          "Hospital Management System": "https://github.com/chandan1708/Hospital-Management-System"
                        };
                        window.open(githubUrls[project.title as keyof typeof githubUrls], '_blank');
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;