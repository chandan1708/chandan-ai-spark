import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative AI projects or discuss opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:chandan17.ramesh@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      chandan17.ramesh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+917996484276"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 7996484276
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/chandan-r-7a8bb8237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-primary-foreground" />
                  </a>
                  
                  <a
                    href="https://github.com/chandan1708/chandan1708.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-secondary/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="bg-secondary/50 border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;