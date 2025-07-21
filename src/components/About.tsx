import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Award, Building } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      title: "Community Leadership",
      description: "Over 15 years of dedicated service to local communities"
    },
    {
      icon: Heart,
      title: "Social Welfare",
      description: "Initiated multiple healthcare and education programs"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Recipient of Excellence in Public Service Award"
    },
    {
      icon: Building,
      title: "Infrastructure",
      description: "Led development of roads, schools, and community centers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Gadi Maryam</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to serving the people with integrity, transparency, and a commitment to positive change
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As your elected Gadi, my mission is to bridge the gap between government policies and 
              community needs. I believe in transparent governance, inclusive development, and ensuring 
              that every voice in our community is heard and valued.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through collaborative efforts and strategic partnerships, we can build a stronger, 
              more prosperous future for all residents while preserving our cultural heritage and values.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;