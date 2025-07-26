import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Users } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Fusion Techathon 3.0 - First Place",
      type: "24-Hour National Level Hackathon",
      icon: Trophy,
      description: "Led Team KrushiAl to victory with the innovative 'KrushiAl Bot' project, an autonomous rover utilizing embedded hardware and machine learning for real-time field data collection and personalized crop recommendations.",
      achievements: [
        "Outperformed 104 teams in Open Theme Domain",
        "Demonstrated exceptional leadership and problem-solving skills",
        "Integrated embedded hardware with machine learning",
        "Developed autonomous rover for agricultural applications"
      ],
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30"
    },
    {
      title: "C Programming Competition - Third Place",
      type: "Competitive Programming",
      icon: Medal,
      description: "Showcased strong programming skills and algorithmic thinking in a competitive coding environment, demonstrating proficiency in C programming language.",
      achievements: [
        "Strong algorithmic problem-solving skills",
        "Efficient code optimization",
        "Time-constrained programming challenges",
        "Complex data structure implementation"
      ],
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    },
    {
      title: "Srishti Tech Innovation Competition - Semi-Finalist",
      type: "Innovation Competition",
      icon: Award,
      description: "Advanced to the semi-finals with an AI-based Kareyole (Digital Invitation maker) project, showcasing innovation in digital solutions and user experience design.",
      achievements: [
        "AI-powered digital invitation system",
        "User-centric design approach",
        "Advanced to semi-final round",
        "Innovative use of technology for social applications"
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for technical excellence, innovation, and leadership in competitive environments
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <Card 
              key={award.title}
              className={`p-8 bg-card/50 backdrop-blur-sm ${award.borderColor} border-2 hover:shadow-glow transition-all duration-500 group animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon */}
                <div className={`${award.bgColor} p-4 rounded-2xl self-start`}>
                  <award.icon className={`w-8 h-8 ${award.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                        {award.title}
                      </h3>
                      <Badge variant="secondary" className="w-fit mt-2 sm:mt-0">
                        {award.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {award.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      Key Highlights:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {award.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Major Awards</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">104+</div>
            <div className="text-muted-foreground">Teams Competed Against</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">1st</div>
            <div className="text-muted-foreground">Place in Hackathon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;