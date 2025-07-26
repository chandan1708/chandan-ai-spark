import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import techBg from "@/assets/tech-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${techBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
              <img
                src={profilePhoto}
                alt="Chandan R - AI & Data Science Engineer"
                className="w-80 h-80 rounded-full object-cover border-4 border-primary shadow-glow relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CHANDAN RAMESH
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-accent mb-6 font-medium">
              Gen AI Engineer
            </h2>
            
            <p className="text-lg text-accent/80 mb-2 font-medium italic">
              Tuning AI to think in Indic tongues.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Raised in Bengaluru, I found myself drawn to how machines understand language and more curiously, how they forget. In the drift between data and dialogue, I now work as a GenAI Engineer — not to teach machines to speak, but to listen with memory.
              <br /><br />
              My path has never been a straight line — it bent with curiosity, sparked with code, and still moves in rhythm with questions.
              <br /><br />
              This is not the destination. It's the becoming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-3"
              >
                View My Work
                <ArrowDown className="ml-2 animate-bounce" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://linkedin.com/in/chandan-r-7a8bb8237"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-primary-foreground" />
              </a>
              
              <a
                href="https://github.com/chandan1708/chandan1708.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Github className="w-6 h-6 group-hover:text-primary-foreground" />
              </a>
              
              <a
                href="mailto:chandan17.ramesh@gmail.com"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;