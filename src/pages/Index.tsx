import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Awards from "@/components/portfolio/Awards";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-secondary/50 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Chandan R. Built with passion for AI and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
